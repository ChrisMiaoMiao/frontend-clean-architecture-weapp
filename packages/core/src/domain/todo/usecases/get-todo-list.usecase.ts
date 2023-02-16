import {
  ToDoListRepository,
  ToDoListEntity
} from '../entity/todo.entity'

export class GetToDoUseCase {
  constructor (private toDoRepository: ToDoListRepository) {}

  execute(params: void): Promise<ToDoListEntity> {
    return this.toDoRepository.getToDoList()
  }
}