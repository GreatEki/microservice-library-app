import { Schema, model } from "mongoose";
import { CustomerModelAttributes } from "../interface/customer";

const CustomerSchema: Schema = new Schema<CustomerModelAttributes>(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Customer = model<CustomerModelAttributes>("customer", CustomerSchema);

export default Customer;
