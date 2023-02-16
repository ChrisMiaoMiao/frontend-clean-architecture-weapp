import { ToDoListEntity, ToDoListRepository } from '../entity/todo.entity'

const list = [
  {
    id: 1,
    title: '待办项目1'
  }, {
    id: 2,
    title: '待办项目2'
  }, {
    id: 3,
    title: '待办项目3'
  }
]

export class ToDoListWebRepository extends ToDoListRepository {
  constructor () {
    super()
  }
  
  async getToDoList(): Promise<ToDoListEntity> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        try {
          resolve(list)
        } catch (e) {
          _reject(e)
        }
      }, 100)
    })
  }

  async deleteToDo(id: number): Promise<ToDoListEntity> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
          try {
            const newList = list.filter(item => item.id !== id)
            resolve(newList)
          } catch (e) {
            _reject(e)
          }
      }, 100);
    });
  }

  async addToDo(title: string): Promise<ToDoListEntity> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        try {
          const newList = list.concat([{
            id: (new Date()).valueOf(),
            title: title
          }])
          resolve(newList)
        } catch (e) {
          _reject(e)
        }
      }, 100)
    })
  }
  
}