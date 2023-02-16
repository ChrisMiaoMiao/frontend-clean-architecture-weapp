import { ToDoListRepository, ToDoListEntity } from '../entity/todo.entity';
export declare class GetToDoUseCase {
    private toDoRepository;
    constructor(toDoRepository: ToDoListRepository);
    execute(params: void): Promise<ToDoListEntity>;
}
