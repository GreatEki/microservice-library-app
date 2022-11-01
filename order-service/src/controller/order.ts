import { Request, Response } from "express";
import { Order } from "../model";
import axios from "axios";

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

    const processedOrders = await Promise.all(
      orders.map(async (order) => {
        const theCust = await axios.get(
          `${process.env.CUSTOMER_MICROSERVICE_DOMAIN}/customer/${order.customer}`
        );

        const theBook = await axios.get(
          `${process.env.BOOK_MICROSERVICE_DOMAN}/book/${order.book}`
        );

        return {
          _id: order._id,
          customer: theCust.data.data,
          book: theBook.data.data,
          orderDate: order.orderDate,
          deliveryDate: order.deliveryDate,
        };
      })
    );

    return res.status(200).json({
      success: true,
      status: "OK",
      statusCode: 200,
      message: "Orders returned",
      data: processedOrders,
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
