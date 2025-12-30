import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    // 🔐 Logged-in user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 🛒 Ordered items
    items: {
      type: Array,
      required: true,
    },

    // 💰 Amount
    totalAmount: {
      type: Number,
      required: true,
    },

    // 💳 Payment
    paymentMethod: {
      type: String,
      default: "COD",
    },

    // 📦 Status
    status: {
      type: String,
      default: "Placed", // Placed → Shipped → Delivered
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
