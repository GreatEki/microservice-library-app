import { Schema, model } from "mongoose";
import { OrderModelAttributes } from "../interface/order";

const OrderSchema: Schema = new Schema<OrderModelAttributes>(
  {
    customer: { type: Schema.Types.ObjectId, required: true },
    book: { type: Schema.Types.ObjectId, required: true },
    orderDate: { type: Date, required: true, default: Date.now },
    deliveryDate: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Order = model<OrderModelAttributes>("order", OrderSchema);

export default Order;
