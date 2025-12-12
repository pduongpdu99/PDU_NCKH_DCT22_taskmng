import { ICRUD } from "@i/CRUD";
import { IQuery } from "@i/query";

export abstract class CRUDImpl<C, U, E> implements ICRUD<C, U, E> {
    find(query: IQuery): Promise<[E]> {
        throw new Error("Method not implemented.");
    }
    findById(): Promise<E> {
        throw new Error("Method not implemented.");
    }
    create(payload: C): Promise<E> {
        throw new Error("Method not implemented.");
    }
    update(id: number, payload: U): Promise<E> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): null {
        throw new Error("Method not implemented.");
    }

}