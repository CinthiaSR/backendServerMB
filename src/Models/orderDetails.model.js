import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    blindDetailsID: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blind",
      },
    ],
    cn: {
      type: String,
    },
    date: {
      type: Date,
    },
    sucursal: {
      type: String,
    },
    measure: {
      type: String,
    },
    customerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    delivery: {
      type: String,
    },
    state: {
      type: String,
    },
    precioID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PrecioShutters",
    },
  },
  {
    timestamps: true,
  }
);

const orderDetails = new mongoose.model("OrderDetails", orderSchema);
export default orderDetails;
