import { CrudBase } from "../abstractions/crud-base.abstract";
import { Student } from "../types/student.entitie";

export interface StudentCrud extends CrudBase<Student> { }
