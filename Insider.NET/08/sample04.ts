enum animals { "申", "酉", "戌", "亥", "子", "丑", "寅", "卯", "辰", "巳", "午", "未" };
var d: Date = new Date();
var i = d.getFullYear() % 12;
alert( animals[i] );