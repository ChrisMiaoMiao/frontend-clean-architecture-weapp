"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToDoUseCase = void 0;
var AddToDoUseCase = /** @class */ (function () {
    function AddToDoUseCase(toDoRepository) {
        this.toDoRepository = toDoRepository;
    }
    AddToDoUseCase.prototype.execute = function (params) {
        return this.toDoRepository.addToDo(params);
    };
    return AddToDoUseCase;
}());
exports.AddToDoUseCase = AddToDoUseCase;
//# sourceMappingURL=add-todo-list.usecase.js.map