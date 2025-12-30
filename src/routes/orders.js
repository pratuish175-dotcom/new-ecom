import express from "express";
import Order from "../models/Order.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/* ===============================
   PLACE ORDER (CHECKOUT)
   POST /api/orders/checkout
================================ */
router.post("/checkout", authMiddleware, async (req, res) => {
  try {
    const { items, totalAmount, paymentMethod } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const order = await Order.create({
      user: req.user.id,
      items,
      totalAmount,
      paymentMethod: paymentMethod || "COD",
      status: "Placed",
    });

    res.status(201).json(order);
  } catch (err) {
    console.error("CHECKOUT ERROR:", err);
    res.status(500).json({ message: "Order placement failed" });
  }
});

/* ===============================
   MY ORDERS (LOGGED-IN USER)
   GET /api/orders/my
================================ */
router.get("/my", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    console.error("MY ORDERS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

export default router;
