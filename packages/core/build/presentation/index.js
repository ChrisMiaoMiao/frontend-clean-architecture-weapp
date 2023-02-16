"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dependenciesLocator = void 0;
var todo_repository_1 = require("../domain/todo/repository/todo.repository");
var get_todo_list_usecase_1 = require("../domain/todo/usecases/get-todo-list.usecase");
var delete_todo_list_usecase_1 = require("../domain/todo/usecases/delete-todo-list.usecase");
var add_todo_list_usecase_1 = require("../domain/todo/usecases/add-todo-list.usecase");
var todo_1 = require("./todo/todo");
function provideToDoListPloc() {
    var toDoListRepository = new todo_repository_1.ToDoListWebRepository();
    var getToDoUseCase = new get_todo_list_usecase_1.GetToDoUseCase(toDoListRepository);
    var deleteToDoUseCase = new delete_todo_list_usecase_1.DeleteToDoUseCase(toDoListRepository);
    var addToDoUseCase = new add_todo_list_usecase_1.AddToDoUseCase(toDoListRepository);
    var homePloc = new todo_1.ToDoPloc(getToDoUseCase, deleteToDoUseCase, addToDoUseCase);
    return homePloc;
}
exports.dependenciesLocator = {
    provideToDoListPloc: provideToDoListPloc
};
//# sourceMappingURL=index.js.map