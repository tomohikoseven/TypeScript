function div2(x: number, y: number) {
    var q: number = Math.floor(x / y);
    var r: number = x - q * y;
    return { quotient: q, reminder: r };
}
var result = div2(20, 8);
alert("商は" + result.quotient + "、余りは" + result.reminder);
window.close();