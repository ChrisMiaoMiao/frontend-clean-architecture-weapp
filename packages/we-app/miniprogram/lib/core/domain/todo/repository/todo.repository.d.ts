import { ToDoListEntity, ToDoListRepository } from '../entity/todo.entity';
export declare class ToDoListWebRepository extends ToDoListRepository {
    constructor();
    getToDoList(): Promise<ToDoListEntity>;
    deleteToDo(id: number): Promise<ToDoListEntity>;
    addToDo(title: string): Promise<ToDoListEntity>;
}
