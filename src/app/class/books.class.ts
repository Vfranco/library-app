import { Book } from "../types/book.entitie";
import { BooksCrud } from "../interfaces/books.interface";

export class Books implements BooksCrud {

  create(book: Book): boolean {
    return true
  }

  read(): Book[] {
    return [];
  }

  update(book: Book): void {
    console.log(book)
  }

  remove(book: Book): boolean {
    return true;
  }
}
