import { CrudBase } from "../abstractions/crud-base.abstract";
import { Book } from "../entities/book.entitie";

export interface BooksCrud extends CrudBase<Book> { }
