export interface BaseRepositoryInterface<D, M> {
    create(dto: D): Promise<M>;
    findById(id: number): Promise<M>;
    findAll(): Promise<M[]>;
    update(id: number, dto: D): Promise<M>;
    partialUpdate(id: number, dto: D): Promise<M>;
    delete(id: number): Promise<void>;
}  