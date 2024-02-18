import { CrudBase } from "../abstractions/crud-base.abstract";
import { Book } from "../types/book.entitie";

export interface BooksCrud extends CrudBase<Book> { }
