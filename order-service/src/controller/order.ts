import { Request, Response } from "express";
import { Order } from "../model";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = new Order({
      ...req.body,
      orderDate: req.body.orderDate || Date.now(),
    });
    const result = await newOrder.save();
    return res.status(201).json({
      success: true,
      status: "Created",
      statusCode: 201,
      message: "Order placed",
      data: result,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      statusCode: err.statusCode || 500,
      message: err.message,
    });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({}).sort({ $natural: -1 });

    return res.status(200).json({
      success: true,
      status: "OK",
      statusCode: 200,
      message: "Orders returned",
      data: orders,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      statusCode: err.statusCode || 500,
      message: err.message,
    });
  }
};
