import { Request, Response } from "express";
import { Customer } from "../model";
import ApplicationError from "../error/ApplicationError";

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const newCustomer = new Customer({
      name: req.body.name,
      age: req.body.age,
      address: req.body.address,
    });

    const result = await newCustomer.save();

    return res.status(200).json({
      success: true,
      status: "Created",
      statusCode: 201,
      message: "Customer created",
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

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await Customer.find({}).sort({ $natural: -1 });

    return res.status(200).json({
      success: true,
      status: "OK",
      statusCode: 200,
      message: "All customers returned",
      data: customers,
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

export const getCustomer = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params;
    const customer = await Customer.findById(customerId);

    if (!customer)
      throw new ApplicationError(
        "No customer found for id supplied",
        "Bad Request",
        404
      );

    return res.status(200).json({
      success: true,
      status: "OK",
      statusCode: 200,
      message: "Customer retrieved successfully",
      data: customer,
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

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params;

    const theCustomer = await Customer.findByIdAndRemove(customerId);

    if (!theCustomer)
      throw new ApplicationError(
        "Customer with id not found",
        "Not Found",
        404
      );

    return res.status(200).json({
      success: true,
      status: "Deleted",
      statusCode: 200,
      message: "Customer deleted",
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
