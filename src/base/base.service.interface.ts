interface BaseServiceInterface<D, S> {
    create(dto: D): Promise<S>;
    findById(id: number): Promise<S>;
    findAll(): Promise<S[]>;
    update(id: number, dto: D): Promise<S>;
    partialUpdate(id: number, dto: D): Promise<S>;
    delete(id: number): Promise<void>;
}