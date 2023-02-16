"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteToDoUseCase = void 0;
var DeleteToDoUseCase = /** @class */ (function () {
    function DeleteToDoUseCase(toDoRepository) {
        this.toDoRepository = toDoRepository;
    }
    DeleteToDoUseCase.prototype.execute = function (params) {
        return this.toDoRepository.deleteToDo(params);
    };
    return DeleteToDoUseCase;
}());
exports.DeleteToDoUseCase = DeleteToDoUseCase;
//# sourceMappingURL=delete-todo-list.usecase.js.map