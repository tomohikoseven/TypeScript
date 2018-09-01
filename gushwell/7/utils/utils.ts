export class Stopwatch {
    private startTime!: number;
    private stopTime!: number;
    static startNew(): Stopwatch {
        let sw = new Stopwatch();
        sw.start();
        return sw;
    }
    start() {
        this.startTime = Date.now();
    }
    stop() {
        this.stopTime = Date.now();
    }
    elapsed(): number {
        return this.stopTime - this.startTime;
    }
    toString(): string {
        let tms = this.elapsed();
        let h = Math.floor(tms / (1000 * 60 * 60));
        let m = Math.floor(tms / (1000 * 60));
        let s = Math.floor(tms / 1000);
        let ms = Math.floor(tms % 1000);
        return `${this._zeroPadding(h)}:${this._zeroPadding(m)}:${this._zeroPadding(s)}:${this._zeroPadding(ms, 3)}`;
    }
    private _zeroPadding(n: number, d: number = 2): string {
        let zero = '';
        for (let i = 1; i < d; i++)
            zero += '0';
        return (zero + n).slice(-d);
    }
}

