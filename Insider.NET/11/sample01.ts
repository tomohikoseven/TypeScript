function calcCost(price: number, amount: number, discount?: number): number{
    if (discount) {
        return price * amount * (1 - discount);
    } else {
        return price * amount;
    }
}
alert(calcCost(1200, 10));
window.close();