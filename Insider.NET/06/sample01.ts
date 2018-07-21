var count: number = 0;
var dice: number;
dice = Math.floor(Math.random() * 6) + 1;

while (dice != 6) {
    count++;
    dice = Math.floor(Math.random() * 6) + 1;
}
alert(count);
window.close();