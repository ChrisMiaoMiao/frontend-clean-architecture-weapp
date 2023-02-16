export type ToDoEntity = {
    id: number;
    title: string;
};
export type ToDoModel = {
    title: string;
};
export type ToDoListEntity = ToDoEntity[];
export declare abstract class ToDoListRepository {
    abstract addToDo(title: string): Promise<ToDoListEntity>;
    abstract deleteToDo(id: number): Promise<ToDoListEntity>;
    abstract getToDoList(): Promise<ToDoListEntity>;
}
