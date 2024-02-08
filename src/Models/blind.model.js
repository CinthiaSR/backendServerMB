import mongoose from "mongoose";
const blindSchema = new mongoose.Schema(
  {
    typeBlind: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Blind = mongoose.model("Blind", blindSchema);
export default Blind;
