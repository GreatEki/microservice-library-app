import { Request, Response } from "express";
import { Book } from "../model";
import ApplicationError from "../error/ApplicationError";

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

export const getBook = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;

    const book = await Book.findById(bookId);

    if (!book) throw new ApplicationError("Book Not Found", "Bad Request", 404);

    return res
      .status(200)
      .json({ success: true, message: "Book returned", data: book });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      statusCode: err.statusCode || 500,
      message: err.message,
    });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;

    const delBook = await Book.findOneAndRemove({ _id: bookId });

    if (!delBook)
      throw new ApplicationError(
        "Invalid Id supplied for book in request params",
        "Bad Request",
        401
      );

    return res.status(200).json({
      success: true,
      status: "OK",
      statusCode: 200,
      message: "Book deleted",
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server Error",
      statusCode: err.statusCode || 500,
      message: err.message,
    });
  }
};
