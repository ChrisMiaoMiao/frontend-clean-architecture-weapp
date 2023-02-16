import { ToDoListRepository, ToDoListEntity } from '../entity/todo.entity';
export declare class DeleteToDoUseCase {
    private toDoRepository;
    constructor(toDoRepository: ToDoListRepository);
    execute(params: number): Promise<ToDoListEntity>;
}
