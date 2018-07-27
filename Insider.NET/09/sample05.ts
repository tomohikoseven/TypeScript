var Player = { Pitcher: "岩田", Catcher: "梅野" };
var Members: string = "";
for (var x in Player) {
    Members += Player[x] + "\n";
}
alert(Members);
window.close();