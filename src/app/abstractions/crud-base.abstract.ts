export abstract class CrudBase<T> {
  abstract create(element: T): boolean
  abstract read(): Array<T>
  abstract update(element: T): void
  abstract remove(element: T): boolean
}
