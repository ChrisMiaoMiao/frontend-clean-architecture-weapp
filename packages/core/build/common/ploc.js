"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ploc = void 0;
var Ploc = /** @class */ (function () {
    function Ploc(initalState) {
        this.listeners = [];
        this.internalState = initalState;
    }
    Object.defineProperty(Ploc.prototype, "state", {
        get: function () {
            return this.internalState;
        },
        enumerable: false,
        configurable: true
    });
    Ploc.prototype.changeState = function (state) {
        var _this = this;
        console.log('trigger change state');
        this.internalState = state;
        console.log('now state', state);
        console.log('listeners', this.listeners);
        if (this.listeners.length > 0) {
            this.listeners.forEach(function (listener) { return listener(_this.state); });
        }
    };
    Ploc.prototype.subscribe = function (listener) {
        console.log('trigger subscribe');
        console.log('listener', listener);
        this.listeners.push(listener);
    };
    Ploc.prototype.unsubscribe = function (listener) {
        var index = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    };
    return Ploc;
}());
exports.Ploc = Ploc;
//# sourceMappingURL=ploc.js.map