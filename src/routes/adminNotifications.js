import express from "express";
import Notification from "../models/Notification.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

// get notifications
router.get("/admin/notifications", adminAuth, async (req, res) => {
  const notifications = await Notification.find()
    .sort({ createdAt: -1 })
    .limit(20);
  res.json(notifications);
});

// mark as read
router.put("/admin/notifications/:id/read", adminAuth, async (req, res) => {
  await Notification.findByIdAndUpdate(req.params.id, {
    isRead: true,
  });
  res.json({ success: true });
});

export default router;
