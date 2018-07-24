class Monster {
    name: string;
    hp: number;
    mp: number;
}
var m: Monster = new Monster();
m.name = "Dragon";
m.hp = 100;
m.mp = 200;
document.body.innerHTML = "モンスターのステータス一覧<br/>";
for (var x in m) {
    document.body.innerHTML += x + ":" + m[x] + "<br/>";
}