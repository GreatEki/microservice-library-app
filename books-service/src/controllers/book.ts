import { Request, Response } from "express";
import { Book } from "../model";

export const createBook = async (req: Request, res: Response) => {
  try {
    const newBook = await Book.create([
      {
        ...req.body,
      },
    ]);

    return res.status(500).json({
      success: true,
      message: "Book added",
      data: newBook,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message,
    });
  }
};
