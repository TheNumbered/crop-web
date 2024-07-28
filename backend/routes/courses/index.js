import express from "express";
const CoursesRouter = express.Router();

// GET all courses
CoursesRouter.get("/", (req, res, next) => {
  const query = "SELECT * FROM farming_courses";

  req.db.query(query, (err, results) => {
    if (err) {
      return next(err);
    }
    res.json(results);
  });
});

// GET a specific course by ID
CoursesRouter.get("/:id", (req, res, next) => {
  const query = "SELECT * FROM farming_courses WHERE id = ?";
  const params = [req.params.id];

  req.db.query(query, params, (err, results) => {
    if (err) {
      return next(err);
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json(results[0]);
  });
});

//GET all course topics from course_topics table
CoursesRouter.get("/topics/:id", (req, res, next) => {
  const query = "SELECT * FROM course_topics WHERE course_id = ?";
  const params = [req.params.id];

  req.db.query(query, params, (err, results) => {
    if (err) {
      return next(err);
    }
    res.json(results);
  });
});

// POST a new course topic

export default CoursesRouter;
