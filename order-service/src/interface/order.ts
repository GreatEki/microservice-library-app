import { Types } from "mongoose";
export interface OrderModelAttributes {
  customer: Types.ObjectId;
  book: Types.ObjectId;
  orderDate: Date;
  deliveryDate: Date;
}
