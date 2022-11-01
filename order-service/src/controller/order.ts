import { Request, Response } from "express";
import { Order } from "../model";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = new Order({
      ...req.body,
      orderDate: req.body.orderDate || Date.now(),
    });
    await newOrder.save();
    return res.status(201).json({
      success: true,
      status: "Created",
      statusCode: 201,
      message: "Order placed",
      data: newOrder,
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
