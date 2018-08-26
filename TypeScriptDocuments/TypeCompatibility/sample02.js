var x = function (a) { return 0; };
var y = function (b, s) { return 0; };
y = x; // compile ok.
x = y; // compile ng.
