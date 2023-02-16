import { ToDoListRepository, ToDoListEntity } from '../entity/todo.entity';
export declare class AddToDoUseCase {
    private toDoRepository;
    constructor(toDoRepository: ToDoListRepository);
    execute(params: string): Promise<ToDoListEntity>;
}
