import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["ORDER_PLACED", "CANCEL_REQUEST", "DELIVERED"],
      required: true,
    },
    message: String,
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema);
