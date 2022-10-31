import { Schema, model } from "mongoose";
import { BooksModelAttributes } from "../interface/books";

const BookSchema: Schema = new Schema<BooksModelAttributes>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    numberOfPages: { type: Number },
    publisher: { type: String },
  },
  { timestamps: true }
);

const Book = model<BooksModelAttributes>("book", BookSchema);

export default Book;
