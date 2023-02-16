import { ToDoListEntity, ToDoListRepository } from '../../entity/todo.entity';
export declare class ToDoService extends ToDoListRepository {
    getToDoList(): Promise<ToDoListEntity>;
    addToDo(title: string): Promise<boolean>;
    deleteToDo(id: number): Promise<boolean>;
    completeToDo(id: number): boolean;
    unDoToDo(id: number): boolean;
    private _getList;
    private _saveList;
}
