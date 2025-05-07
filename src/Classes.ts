export class Counter {
    counter: number;

    constructor(start: number = 0) {
        this.counter = start;
    }

    public increment(): number {
        return ++this.counter;
    }

    public decrement(): number {
        return --this.counter;
    }
}
