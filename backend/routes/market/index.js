import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import express from 'express';
const MarketRouter = express.Router();

MarketRouter.get("/", (req, res, next) => {
    const query = 'SELECT * FROM market_items';

  req.db.query(query, (err, results) => {
    if (err) {
      return next(err);
    }
    res.json(results);
  });
});

MarketRouter.get("/:id",  (req, res, next) => {
    const query = 'SELECT * FROM market_items WHERE id = ?';
    const params = [req.params.id];

    req.db.query(query, params, (err, results) => {
        if (err) {
            return next(err);
        }
        if (results.length === 0) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.json(results[0]);
    });
}
);

MarketRouter.post("/", ClerkExpressRequireAuth(), (req, res, next) => {
    const { name, image, highestBid, description, location, endDate } = req.body;
    const query = 'INSERT INTO market_items (name, image, highest_bid, description, location, end_date) VALUES (?, ?, ?, ?, ?, ?)';

    req.db.query(query, [name, image, highestBid, description, location, endDate], (err, results) => {
        if (err) {
            return next(err);
        }
        res.status(201).json({ message: "Market item added" });
    });
})

export default MarketRouter;
