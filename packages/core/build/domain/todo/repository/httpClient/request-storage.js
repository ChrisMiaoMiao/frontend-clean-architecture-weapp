"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoService = void 0;
var todo_entity_1 = require("../../entity/todo.entity");
var ToDoService = /** @class */ (function (_super) {
    __extends(ToDoService, _super);
    function ToDoService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToDoService.prototype.getToDoList = function () {
        return new Promise(function (resolve, _reject) {
            setTimeout(function () {
                try {
                    var list = [{
                            id: 1,
                            title: '牛逼1',
                            done: false
                        }, {
                            id: 2,
                            title: '牛逼2',
                            done: false
                        }];
                    // const list = this._getList()
                    resolve(list);
                }
                catch (e) {
                    _reject(e);
                }
            }, 100);
        });
    };
    ToDoService.prototype.addToDo = function (title) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            setTimeout(function () {
                try {
                    var list = _this._getList();
                    // 后续该方法抽到 helper 里(new Date()).valueOf();
                    _this._saveList(list.concat([{
                            id: (new Date()).valueOf(),
                            title: title,
                            done: false
                        }]));
                    resolve(true);
                }
                catch (e) {
                    _reject(e);
                }
            }, 100);
        });
    };
    ToDoService.prototype.deleteToDo = function (id) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            setTimeout(function () {
                try {
                    var list = _this._getList();
                    _this._saveList(list.filter(function (item) { return item.id !== id; }));
                    resolve(true);
                }
                catch (e) {
                    _reject(e);
                }
            }, 100);
        });
    };
    ToDoService.prototype.completeToDo = function (id) {
        throw new Error('Method not implemented.');
    };
    ToDoService.prototype.unDoToDo = function (id) {
        throw new Error('Method not implemented.');
    };
    ToDoService.prototype._getList = function () {
        var localList = localStorage.getItem('LOCAL_LIST');
        return localList ? JSON.parse(localList) : [];
    };
    ToDoService.prototype._saveList = function (list) {
        localStorage.setItem('LOCAL_LIST', JSON.stringify(list));
    };
    return ToDoService;
}(todo_entity_1.ToDoListRepository));
exports.ToDoService = ToDoService;
//# sourceMappingURL=request-storage.js.map