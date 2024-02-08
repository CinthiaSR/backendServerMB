import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    role: {
      type: String,
      enum: {
        values: [
          "Gerente de ventas",
          "Ventas",
          "Supervisor",
          "Administrador",
          "Directivo",
        ],
        message: "This {VALUE} option is not supported",
      },
      required: true,
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderDShutters",
      },
    ],
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
