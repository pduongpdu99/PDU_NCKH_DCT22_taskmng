import { IQuery } from "./query";

export interface ICRUD<C, U, E> {
    find(query: IQuery): Promise<[E]>;
    findById(): Promise<E>;
    create(payload: C): Promise<E>;
    update(id: number, payload: U): Promise<E>;
    delete(id: number): null;
}