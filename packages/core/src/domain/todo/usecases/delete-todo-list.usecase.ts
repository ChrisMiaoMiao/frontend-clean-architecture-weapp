import {
  ToDoListRepository,
  ToDoListEntity
} from '../entity/todo.entity'

export class DeleteToDoUseCase {
  constructor (private toDoRepository: ToDoListRepository) {}

  execute(params: number): Promise<ToDoListEntity> {
    return this.toDoRepository.deleteToDo(params)
  }
}