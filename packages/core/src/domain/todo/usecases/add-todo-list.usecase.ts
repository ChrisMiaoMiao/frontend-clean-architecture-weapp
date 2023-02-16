import {
  ToDoListRepository,
  ToDoListEntity
} from '../entity/todo.entity'

export class AddToDoUseCase {
  constructor (private toDoRepository: ToDoListRepository) {}

  execute(params: string): Promise<ToDoListEntity> {
    return this.toDoRepository.addToDo(params)
  }
}