export default class Priority {
    private priority: number;

    public constructor(priority: number = 9) {
        this.priority = priority;
    }

    public none(): boolean {
        return this.priority <= 0;
    }

    public high(): boolean {
        return this.priority >= 1 && this.priority <= 3;
    }

    public mid(): boolean {
        return this.priority >= 5 && this.priority <= 6;
    }

    public low(): boolean {
        return this.priority > 7;
    }

    public color(): string {
        if (this.low()) return 'blue';
        if (this.mid()) return 'yellow';
        if (this.high()) return 'red';
        return 'gray';
    }
}
