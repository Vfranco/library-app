import { Student } from "../types/student.entitie";
import { StudentCrud } from "../interfaces/student.interface";

export class Students implements StudentCrud {

  create(student: Student): boolean {
    return true
  }

  read(): Student[] {
    return []
  }

  update(student: Student): void {
    console.log(student);
  }

  remove(student: Student): boolean {
    return true;
  }
}
