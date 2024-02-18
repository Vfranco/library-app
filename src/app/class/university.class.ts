import { LibraryProcess } from "../abstractions/library-process.abstract";
import { Book } from "../types/book.entitie";
import { Student } from "../types/student.entitie";

export class UniversityLibrary extends LibraryProcess {
  private isDelivered!: boolean;

  isBookAvailable(book: Book): boolean {
    return true;
  }

  isStudentRegistered(student: Student): boolean {
    return true;
  }

  toLean(student: Student): void {
    console.log("prestado!")
  }

  toClaim(student: Student): void {
    console.log("reclamar!");
  }
}
