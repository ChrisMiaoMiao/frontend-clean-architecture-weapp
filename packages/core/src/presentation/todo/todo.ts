import { GetToDoUseCase } from '../../domain/todo/usecases/get-todo-list.usecase'
import { DeleteToDoUseCase } from '../../domain/todo/usecases/delete-todo-list.usecase'
import { AddToDoUseCase } from '../../domain/todo/usecases/add-todo-list.usecase'

import { Ploc } from '../../common/ploc'
import {
  ToDoListEntity
} from '../../domain/todo/entity/todo.entity'

import {
  DataError,
  ListsState,
  ListsInitialState
} from './todo.state'


export class ToDoPloc extends Ploc<ListsState>{
  
  list: ToDoListEntity = []

  constructor(
    private getToDoUseCase: GetToDoUseCase,
    private deleteToDoUseCase: DeleteToDoUseCase,
    private addToDoUseCase: AddToDoUseCase
  ) {
    super(ListsInitialState)
  }
  
  async getToDoList () {    
    try {
      const list = await this.getToDoUseCase.execute()
      console.log('change state before', list)
      this.changeState({
        lists: list,
        kind: 'LoadedListsState'
      })
    } catch (e: any) {
      this.handleError({
        kind: "UnexpectedError",
        error: e
      })
    }
  }

  async addToDo (title: string) {
    try {
      const list = await this.addToDoUseCase.execute(title)
      this.changeState({
        lists: list,
        kind: 'LoadedListsState'
      })
    } catch (e: any) {
      this.handleError({
        kind: "UnexpectedError",
        error: e
      })
    }
  }


  async deleteToDo(id: number) {
    try {
      const list = await this.deleteToDoUseCase.execute(id)
      this.changeState({
        lists: list,
        kind: 'LoadedListsState'
      })
    } catch (e: any) {
      this.handleError({
        kind: "UnexpectedError",
        error: e
      })
    }
  }

  private handleError(error: DataError): ListsState {
    switch (error.kind) {
        case "UnexpectedError": {
            return {
                kind: "ErrorListsState",
                error: "Sorry, an error has ocurred. Please try later again",
                lists: []
            };
        }
    }
  }

}
