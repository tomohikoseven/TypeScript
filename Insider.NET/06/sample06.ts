var count: number = 0;
var d: number;
var prev: number = 0;
var dup: number = 0;
while ((d = dice()) != 6) {
    if (prev == d) {
        dup++;
        continue;
    }
    count++;
    prev = d;
}
alert(count + ":" + dup);
window.close();

function dice(): number {
    return Math.floor(Math.random() * 6) + 1;
}