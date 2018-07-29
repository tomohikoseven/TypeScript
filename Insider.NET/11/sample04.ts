function getLength(x: string): number {
    return x.length;
}
function getLength(x: number): number {
    if (x == 0) return 1;
    return Math.floor(Math.log(x) / Math.LN10) + 1;
}
alert(getLength(99));
window.close();