var count: number = 0;
var d: number;
while ((d = dice()) != 6) {
    if (d == 1) {
        alert("NGな目が出ました");
        break;
    }
    count++;
}
alert(count);
window.close();

function dice(): number {
    return Math.floor(Math.random() * 6) + 1;
}