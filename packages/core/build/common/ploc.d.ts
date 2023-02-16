type Subscription<S> = (state: S) => void;
export declare abstract class Ploc<S> {
    private internalState;
    private listeners;
    constructor(initalState: S);
    get state(): S;
    changeState(state: S): void;
    subscribe(listener: Subscription<S>): void;
    unsubscribe(listener: Subscription<S>): void;
}
export {};
