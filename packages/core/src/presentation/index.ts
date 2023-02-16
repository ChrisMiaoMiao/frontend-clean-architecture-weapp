import { ToDoListWebRepository } from '../domain/todo/repository/todo.repository'
import { GetToDoUseCase } from '../domain/todo/usecases/get-todo-list.usecase'
import { DeleteToDoUseCase } from '../domain/todo/usecases/delete-todo-list.usecase'
import { AddToDoUseCase } from '../domain/todo/usecases/add-todo-list.usecase'
import { ToDoPloc } from './todo/todo'


function provideToDoListPloc(): ToDoPloc {
  const toDoListRepository = new ToDoListWebRepository();
  const getToDoUseCase = new GetToDoUseCase(toDoListRepository)
  const deleteToDoUseCase = new DeleteToDoUseCase(toDoListRepository)
  const addToDoUseCase = new AddToDoUseCase(toDoListRepository)
  const homePloc = new ToDoPloc(getToDoUseCase, deleteToDoUseCase, addToDoUseCase)

  return homePloc;
}


export const dependenciesLocator = {
  provideToDoListPloc
};
