import mongoose from "mongoose";
const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    nationality: {
      type: String,
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderDetails",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", clientSchema);
export default Customer;
