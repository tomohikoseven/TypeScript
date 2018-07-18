var rank: string[] = ["不可", "可", "良", "優"];
var score, rnum: number;
score = 75;
if (score < 60) {
    rnum = 0;
} else if (score < 70) {
    rnum = 1;
} else if (score < 80) {
    rnum = 2;
} else {
    rnum = 3;
}
alert("あなたの成績は" + rank[rnum] + "です");