type Subscription<S> = (state: S) => void;

export abstract class Ploc<S> {
    private internalState: S;
    private listeners: Subscription<S>[] = [];

    constructor(initalState: S) {
        this.internalState = initalState;
    }

    public get state(): S {
        return this.internalState;
    }

    changeState(state: S) {
        console.log('trigger change state')
        this.internalState = state;
        console.log('now state', state)
        console.log('listeners', this.listeners)
        if (this.listeners.length > 0) {
            this.listeners.forEach(listener => listener(this.state));
        }
    }

    subscribe(listener: Subscription<S>) {
        console.log('trigger subscribe')
        console.log('listener', listener)
        this.listeners.push(listener);
    }

    unsubscribe(listener: Subscription<S>) {
        const index = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }
}
