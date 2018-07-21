var count: number = 0;
while (dice() != 6) {
    count++;
}
alert(count);
window.close();

function dice(): number {
    return Math.floor(Math.random() * 6) + 1;
}