var fortune: string;
var n: number;

n = Math.floor(Math.random() * 7);
switch (n) {
    case 0:
    case 1:
        fortune = "大吉";
        break;
    case 2:
        fortune = "中吉";
        break;
    case 3:
    case 4:
        fortune = "小吉";
        break;
    case 5:
        fortune = "凶";
        break;
    default:
        fortune = "大凶";
}
alert(n + ":" + fortune);