import { Request, Response } from "express";
import { Book } from "../model";

export const createBook = async (req: Request, res: Response) => {
  try {
    const newBook = await Book.create([
      {
        ...req.body,
      },
    ]);

    return res.status(200).json({
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

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find({}).sort({ $natural: -1 });

    return res.status(200).json({
      success: true,
      message: "All books returned successfully",
      data: books,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message,
    });
  }
};
