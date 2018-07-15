var c: string;
var h: number, d: Date;
d = new Date();
h = d.getHours();
if (h < 12) {
    c = "skyblue";
} else {
    c = "lightyellow";
}
document.body.style.backgroundColor = c;
