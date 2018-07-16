var c: string;
var h: number, d: Date;
d = new Date();
h = d.getHours();
c = "lightyellow";
if (h < 12) c = "skyblue";
document.body.style.backgroundColor = c;
