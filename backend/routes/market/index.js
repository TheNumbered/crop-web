import express from 'express';
const MarketRouter = express.Router();

MarketRouter.get("/", (req, res, next) => {
    const query = 'SELECT * FROM crop_listings';

  req.db.query(query, (err, results) => {
    if (err) {
      return next(err);
    }
    res.json(results);
  });
});

MarketRouter.get("/:id", (req, res, next) => {
    const query = 'SELECT * FROM crop_listings WHERE id = ?';
    const id = req.params.id;

    req.db.query(query, [id], (err, results) => {
        if (err) {
            return next(err);
        }
        res.json(results);
    });
});

export default MarketRouter;
