import { GetToDoUseCase } from '../../domain/todo/usecases/get-todo-list.usecase';
import { DeleteToDoUseCase } from '../../domain/todo/usecases/delete-todo-list.usecase';
import { AddToDoUseCase } from '../../domain/todo/usecases/add-todo-list.usecase';
import { Ploc } from '../../common/ploc';
import { ToDoListEntity } from '../../domain/todo/entity/todo.entity';
import { ListsState } from './todo.state';
export declare class ToDoPloc extends Ploc<ListsState> {
    private getToDoUseCase;
    private deleteToDoUseCase;
    private addToDoUseCase;
    list: ToDoListEntity;
    constructor(getToDoUseCase: GetToDoUseCase, deleteToDoUseCase: DeleteToDoUseCase, addToDoUseCase: AddToDoUseCase);
    getToDoList(): Promise<void>;
    addToDo(title: string): Promise<void>;
    deleteToDo(id: number): Promise<void>;
    private handleError;
}
