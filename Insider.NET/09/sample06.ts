interface Dictionary {
    [index: string]: string;
}
var Player: Dictionary = { Pitcher: "岩田", Catcher: "梅野" };
alert(Player["Pitcher"]);
window.close();