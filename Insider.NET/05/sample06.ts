var rank: string[] = ["不可", "可", "良", "優"];

var score_data = document.createElement('input');
var rank_text = document.createElement('div');

var score, rnum: number;

score_data.type = "number";
score_data.addEventListener("keydown", showText, false);
document.body.appendChild(score_data);

document.body.appendChild(rank_text);

function showText() {
    if (event.keyCode == 13 || event.keyCode == 9) {
        var s: number = score_data.valueAsNumber;
        if (s < 60) {
            rnum = 0;
        } else if (s < 70) {
            rnum = 1;
        } else if (s < 80) {
            rnum = 2;
        } else {
            rnum = 3;
        }
        rank_text.innerText = rank[rnum];
    }
}