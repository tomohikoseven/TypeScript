var count: number = 0;
var dice: number;
do {
    dice = Math.floor(Math.random() * 6) + 1;
    count++;
} while (dice != 6);
alert(count);
window.close();