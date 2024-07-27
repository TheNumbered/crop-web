import cors from "cors";
import express from "express";

const ForumRouter = express();
const port = 3000;

ForumRouter.use(cors());
ForumRouter.use(express.json());

const formatDate = (date) => {
  return date.toISOString().slice(0, 19).replace("T", " ");
};

ForumRouter.get("/topics", (req, res) => {
  const query = `
    SELECT 
      t.id AS topic_id,
      t.userId,
      t.subject,
      t.imageURL,
      t.message AS topic_message,
      t.startedBy AS topic_startedBy,
      t.date AS topic_date,
      r.id AS reply_id,
      r.message AS reply_message,
      r.repliedBy AS reply_repliedBy,
      r.date AS reply_date,
      r.replyImageURL,
      r.replierId 
    FROM 
      forum_topics t
    LEFT JOIN 
      forum_comments r ON t.id = r.topic_id
    ORDER BY 
      t.date DESC, r.id;
  `;

  req.db.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
      return;
    }

    const topics = results.reduce((acc, row) => {
      let topic = acc.find((t) => t.id === row.topic_id);
      if (!topic) {
        topic = {
          id: row.topic_id,
          userId: row.userId,
          imageURL: row.imageURL,
          subject: row.subject,
          message: row.topic_message,
          startedBy: row.topic_startedBy,
          date: row.topic_date,
          replies: [],
        };
        acc.push(topic);
      }

      if (row.reply_id) {
        topic.replies.push({
          id: row.reply_id,
          replierId: row.replierId,
          message: row.reply_message,
          repliedBy: row.reply_repliedBy,
          replyImageURL: row.replyImageURL,
          date: row.reply_date,
        });
      }

      return acc;
    }, []);

    res.json(topics);
  });
});

ForumRouter.post("/topics", (req, res) => {
  const { subject, message, startedBy, userId, imageURL } = req.body;
  const query = `
    INSERT INTO forum_topics (subject, message, startedBy, date, userId, imageURL)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [
    subject,
    message,
    startedBy,
    formatDate(new Date()),
    userId,
    imageURL,
  ];

  req.db.query(query, values, (error, results) => {
    if (error) {
      console.error("Error adding topic:", error);
      res.status(500).json({ error: "Error adding topic" });
      return;
    }

    res.status(201).json({ id: results.insertId, ...req.body });
  });
});

ForumRouter.post("/replies", (req, res) => {
  const { topic_id, message, repliedBy, replyImageURL, replierId } = req.body;
  const query = `
    INSERT INTO forum_comments (topic_id, message, repliedBy, date, replyImageURL, replierId)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [
    topic_id,
    message,
    repliedBy,
    formatDate(new Date()),
    replyImageURL,
    replierId,
  ];

  req.db.query(query, values, (error) => {
    if (error) {
      console.error("Error adding reply:", error);
      res.status(500).json({ error: "Error adding reply" });
      return;
    }

    res.status(201).json({ message: "Reply added successfully" });
  });
});

ForumRouter.delete("/topics/:id", (req, res) => {
  const topicId = req.params.id;

  const checkRepliesQuery = `
    SELECT COUNT(*) AS replyCount FROM forum_comments WHERE topic_id = ?
  `;

  req.db.query(checkRepliesQuery, [topicId], (error, results) => {
    if (error) {
      console.error("Error checking replies:", error);
      res.status(500).json({ error: "Error checking replies" });
      return;
    }

    const replyCount = results[0].replyCount;

    if (replyCount > 0) {
      const deleteRepliesQuery = `
        DELETE FROM forum_comments WHERE topic_id = ?
      `;

      req.db.query(deleteRepliesQuery, [topicId], (error) => {
        if (error) {
          console.error("Error deleting replies:", error);
          res.status(500).json({ error: "Error deleting replies" });
          return;
        }

        const deleteTopicQuery = `
          DELETE FROM forum_topics WHERE id = ?
        `;

        req.db.query(deleteTopicQuery, [topicId], (error) => {
          if (error) {
            console.error("Error deleting topic:", error);
            res.status(500).json({ error: "Error deleting topic" });
            return;
          }

          res
            .status(200)
            .json({ message: "Topic and replies deleted successfully" });
        });
      });
    } else {
      const deleteTopicQuery = `
        DELETE FROM forum_topics WHERE id = ?
      `;

      req.db.query(deleteTopicQuery, [topicId], (error) => {
        if (error) {
          console.error("Error deleting topic:", error);
          res.status(500).json({ error: "Error deleting topic" });
          return;
        }

        res.status(200).json({ message: "Topic deleted successfully" });
      });
    }
  });
});

ForumRouter.delete("/reply/:replyId", (req, res) => {
  const replyId = req.params.replyId;

  const deleteReplyQuery = `
    DELETE FROM forum_comments WHERE id = ?
  `;

  req.db.query(deleteReplyQuery, [replyId], (error) => {
    if (error) {
      console.error("Error deleting reply:", error);
      res.status(500).json({ error: "Error deleting reply" });
      return;
    }

    res.status(200).json({ message: "Reply deleted successfully" });
  });
});

export default ForumRouter;
