import express from "express";
import Wishlist from "../models/Wishlist.js";
import authMiddleware from "../middleware/authmiddleware.js";

const router = express.Router();

/* ---------------- ADD TO WISHLIST ---------------- */
router.post("/wishlist/:productId", authMiddleware, async (req, res) => {
  try {
    const exists = await Wishlist.findOne({
      userId: req.user.id,
      productId: req.params.productId,
    });

    if (exists) {
      return res.status(400).json({ message: "Already in wishlist" });
    }

    const item = await Wishlist.create({
      userId: req.user.id,
      productId: req.params.productId,
    });

    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Failed to add to wishlist" });
  }
});

/* ---------------- REMOVE FROM WISHLIST ---------------- */
router.delete("/wishlist/:productId", authMiddleware, async (req, res) => {
  try {
    await Wishlist.findOneAndDelete({
      userId: req.user.id,
      productId: req.params.productId,
    });

    res.json({ message: "Removed from wishlist" });
  } catch (err) {
    res.status(500).json({ message: "Failed to remove" });
  }
});

/* ---------------- GET MY WISHLIST ---------------- */
router.get("/wishlist", authMiddleware, async (req, res) => {
  try {
    const items = await Wishlist.find({ userId: req.user.id }).populate(
      "productId"
    );
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to load wishlist" });
  }
});

export default router;
