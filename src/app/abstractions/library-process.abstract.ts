import { Book } from "../entities/book.entitie";
import { Student } from "../entities/student.entitie";

export abstract class LibraryProcess {
  abstract isBookAvailable(book: Book): boolean
  abstract isStudentRegistered(student: Student): boolean
  abstract toLean(student: Student): void
  abstract toClaim(student: Student): void
}
