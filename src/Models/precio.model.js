import mongoose from "mongoose";
const precioSchema = new mongoose.Schema(
  {
    OrderDShutters: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderDShutters",
    },
    totalft2: {
      type: Number,
      required: true,
      min: 0,
      set: (value) => parseFloat(value.toFixed(2)),
    },
    importe: {
      type: Number,
      required: true,
      min: 0,
      set: (value) => parseFloat(value.toFixed(2)),
    },
    percent: {
      type: Number,
      required: true,
      min: 0,
      set: (value) => parseFloat(value.toFixed(2)),
    },
    totalpercent: {
      type: Number,
      required: true,
      min: 0,
      set: (value) => parseFloat(value.toFixed(2)),
    },
    subtotal: {
      type: Number,
      required: true,
      min: 0,
      set: (value) => parseFloat(value.toFixed(2)),
    },
    installation: {
      type: Number,
      required: true,
      min: 0,
      set: (value) => parseFloat(value.toFixed(2)),
    },
    motorization: {
      type: Number,
      required: true,
      min: 0,
      set: (value) => parseFloat(value.toFixed(2)),
    },
    percentByImporte: {
      type: Number,
      required: true,
      min: 0,
      set: (value) => parseFloat(value.toFixed(2)),
    },
    totalImporte: {
      type: Number,
      required: true,
      min: 0,
      set: (value) => parseFloat(value.toFixed(2)),
    },
    total: {
      type: Number,
      required: true,
      min: 0,
      set: (value) => parseFloat(value.toFixed(2)),
    },
    anticipo: {
      type: Number,
      required: true,
      min: 0,
      set: (value) => parseFloat(value.toFixed(2)),
    },
    saldo: {
      type: Number,
      required: true,
      min: 0,
      set: (value) => parseFloat(value.toFixed(2)),
    },
  },
  {
    timestamps: true,
  }
);

const shipmentPrecioShutters = mongoose.model("PrecioShutters", precioSchema);
export default shipmentPrecioShutters;
