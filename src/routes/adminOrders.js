import express from "express";
import Order from "../models/Order.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

/* =========================
   GET ALL ORDERS (ADMIN)
   GET /api/admin/orders
========================= */
router.get("/orders", adminAuth, async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

/* =========================
   UPDATE ORDER STATUS
   PUT /api/admin/orders/:id/status
========================= */
router.put("/orders/:id/status", adminAuth, async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatus = ["Placed", "Shipped", "Delivered", "Cancelled"];
    if (!allowedStatus.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    await order.save();

    res.json({ message: "Status updated", order });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

export default router;
