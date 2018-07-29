function calcCost(price: number, amount: number, discount = 0): number {
    return price * amount * (1 - discount);
}
alert(calcCost(1200, 10));
window.close();