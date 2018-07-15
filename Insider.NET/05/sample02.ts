var c, t: string;
var h: number, d: Date;
d = new Date();
h = d.getHours();
if (h < 12) {
    t = "午前のページ";
    c = "skyblue";
} else {
    t = "午後のページ";
    c = "lightyellow";
}
document.title = t;
document.body.style.backgroundColor = c;