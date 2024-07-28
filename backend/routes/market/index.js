import express from "express";
const MarketRouter = express.Router();

MarketRouter.get("/", (req, res, next) => {
  const query = "SELECT * FROM crop_listings";

  req.db.query(query, (err, results) => {
    if (err) {
      return next(err);
    }
    res.json(results);
  });
});

MarketRouter.get("/:id", (req, res, next) => {
  const query = "SELECT * FROM crop_listings WHERE id = ?";
  const id = req.params.id;

  req.db.query(query, [id], (err, results) => {
    if (err) {
      return next(err);
    }
    res.json(results);
  });
});

// New endpoint to handle bid updates
MarketRouter.put("/bid/:id", (req, res, next) => {
  const id = req.params.id;
  const newBid = req.body.currentBid;

  const selectQuery = "SELECT currentBid FROM crop_listings WHERE id = ?";
  const updateQuery = "UPDATE crop_listings SET currentBid = ? WHERE id = ?";

  req.db.query(selectQuery, [id], (err, results) => {
    if (err) {
      return next(err);
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    const currentBid = results[0].currentBid;

    if (newBid > currentBid) {
      req.db.query(updateQuery, [newBid, id], (err) => {
        if (err) {
          return next(err);
        }
        res.json({ message: "Bid updated successfully" });
      });
    } else {
      res
        .status(400)
        .json({ message: "Bid must be higher than the current bid" });
    }
  });
});

export default MarketRouter;
