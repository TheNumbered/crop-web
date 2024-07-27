import express from 'express';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
const CoursesRouter = express.Router();

CoursesRouter.get("/", (req, res, next) => {
    const query = 'SELECT * FROM farming_courses';

    req.db.query(query, (err, results) => {
        if (err) {
            return next(err);
        }
        res.json(results);
    });
});

CoursesRouter.get("/:id",  (req, res, next) => {
    const query = 'SELECT * FROM farming_courses WHERE id = ?';
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
}
);

CoursesRouter.post("/", ClerkExpressRequireAuth(), (req, res, next) => {
    const { title, description, imageUrl } = req.body;
    const query = 'INSERT INTO farming_courses (title, description, image_url) VALUES (?, ?, ?)';
    
    req.db.query(query, [title, description, imageUrl], (err, results) => {
        if (err) {
            return next(err);
        }
        res.status(201).json({ message: "Course added" });
    });
})