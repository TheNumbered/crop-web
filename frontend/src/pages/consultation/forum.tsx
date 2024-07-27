import { useUser } from "@clerk/clerk-react";
import { Box, Button, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AddReplyDialog } from "./add-reply-dialog";
import { AddTopicDialog } from "./add-topic-dialog";
import { TopicDetailsDialog } from "./topic-details-dialog";
import { TopicList } from "./topic-list";
import { Reply, Topic } from "./types";

export const CommunityForum: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [open, setOpen] = useState(false);
  const [replyOpen, setReplyOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const { user } = useUser();

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    const url = "http://localhost:3000/api/topics";
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setTopics(data);
      } else {
        console.error("Failed to fetch topics");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSubject("");
    setMessage("");
  };

  const handleAddTopic = async () => {
    if (subject && message) {
      const startedBy = user?.fullName;
      const imageURL = user?.imageUrl;
      const userId = user?.id;
      const newTopic = {
        subject,
        message,
        startedBy,
        userId,
        imageURL,
      };

      try {
        const response = await fetch("http://localhost:3000/api/topics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTopic),
        });

        if (response.ok) {
          handleClose();
          fetchTopics(); // Fetch updated list of topics
        } else {
          console.error("Failed to add topic");
        }
      } catch (error) {
        console.error("Error adding topic:", error);
      }
    }
  };

  const handleTopicClick = (topic: Topic) => setSelectedTopic(topic);
  const handleCloseTopicDetails = () => setSelectedTopic(null);

  const handleOpenReplyDialog = () => setReplyOpen(true);
  const handleCloseReplyDialog = () => {
    setReplyOpen(false);
    setReplyMessage("");
  };

  const handleAddReply = async () => {
    if (replyMessage && selectedTopic) {
      const repliedBy = user?.fullName ?? "Anonymous";
      const replyImageURL = user?.imageUrl;
      const replierId = user?.id;

      const newReply = {
        message: replyMessage,
        repliedBy,
        replyImageURL,
        replierId,
      };

      try {
        const response = await fetch("http://localhost:3000/api/replies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topic_id: selectedTopic.id,
            ...newReply,
          }),
        });

        if (response.ok) {
          const updatedReply = {
            ...newReply,
            date: new Date(),
          };
          const updatedTopic = {
            ...selectedTopic,
            replies: [...(selectedTopic.replies || []), updatedReply],
          };
          setTopics(
            //@ts-ignore
            topics.map((topic) =>
              topic.id === selectedTopic.id ? updatedTopic : topic
            )
          );
          fetchTopics();
          //@ts-ignore
          setSelectedTopic(updatedTopic); // Update selected topic
          handleCloseReplyDialog();
        } else {
          console.error("Failed to add comment");
        }
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  const handleDeleteTopic = async (topic: Topic) => {
    const userId = user?.id;
    if (userId === topic.userId) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/topics/${topic.id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          setTopics(topics.filter((t) => t.id !== topic.id));
          setSelectedTopic(null);
        } else {
          console.error("Failed to delete topic");
        }
      } catch (error) {
        console.error("Error deleting topic:", error);
      }
    } else {
      console.error("You do not have permission to delete this topic");
    }
  };

  const handleDeleteComment = async (reply: Reply) => {
    const userId = user?.id;

    if (userId === reply.replierId) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/reply/${reply.id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          if (selectedTopic) {
            const updatedReplies = selectedTopic.replies.filter(
              (r) => r.id !== reply.id
            );
            const updatedTopic = {
              ...selectedTopic,
              replies: updatedReplies,
            };
            setTopics(
              topics.map((topic) =>
                topic.id === selectedTopic.id ? updatedTopic : topic
              )
            );
            setSelectedTopic(updatedTopic);
          }
        } else {
          console.error("Failed to delete comment");
        }
      } catch (error) {
        console.error("Error deleting comment:", error);
      }
    } else {
      console.error("User does not have permission to delete this comment");
    }
  };

  return (
    <Box marginTop={3} marginLeft={3}>
      <Button color="primary" onClick={handleOpen}>
        Add Topic
      </Button>
      <Paper>
        <TopicList topics={topics} onTopicClick={handleTopicClick} />
      </Paper>
      <AddTopicDialog
        open={open}
        onClose={handleClose}
        subject={subject}
        setSubject={setSubject}
        message={message}
        setMessage={setMessage}
        handleAddTopic={handleAddTopic}
      />
      {selectedTopic && (
        <TopicDetailsDialog
          topic={selectedTopic}
          onClose={handleCloseTopicDetails}
          onOpenReplyDialog={handleOpenReplyDialog}
          handleDeleteTopic={handleDeleteTopic}
          handleDeleteComment={handleDeleteComment}
        />
      )}
      <AddReplyDialog
        open={replyOpen}
        onClose={handleCloseReplyDialog}
        replyMessage={replyMessage}
        setReplyMessage={setReplyMessage}
        handleAddReply={handleAddReply}
      />
    </Box>
  );
};
