function getLength(x: number): number;
function getLength(x: string): number;
function getLength(x: any): number {
    if (typeof (x) == "string") {
        return x.length;
    } else {
        if (x == 0) return 1;
        return Math.floor(Math.log(x) / Math.LN10) + 1;
    }
}
alert(getLength(123));
window.close();