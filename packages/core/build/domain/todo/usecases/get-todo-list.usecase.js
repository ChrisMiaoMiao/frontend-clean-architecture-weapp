"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetToDoUseCase = void 0;
var GetToDoUseCase = /** @class */ (function () {
    function GetToDoUseCase(toDoRepository) {
        this.toDoRepository = toDoRepository;
    }
    GetToDoUseCase.prototype.execute = function (params) {
        return this.toDoRepository.getToDoList();
    };
    return GetToDoUseCase;
}());
exports.GetToDoUseCase = GetToDoUseCase;
//# sourceMappingURL=get-todo-list.usecase.js.map