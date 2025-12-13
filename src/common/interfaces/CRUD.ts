import { IQuery } from './query'

export interface ICRUD<C, U, E> {
  find(query: IQuery): Promise<E[]>
  findById(id: number): Promise<E | null>
  create(payload: C): unknown
  update(id: number, payload: U): unknown
  delete(id: number): void
}
