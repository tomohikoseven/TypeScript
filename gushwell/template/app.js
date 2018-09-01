"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
//import Stopwatch = Utils.Stopwatch;
var Solver = /** @class */ (function () {
    function Solver() {
    }
    Solver.prototype.exec = function (maxnum) {
        return maxnum;
    };
    return Solver;
}());
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.run = function () {
        var sw = utils_1.Stopwatch.startNew();
        try {
            var p = new Solver();
            var n = p.exec(100000);
            console.log(n);
        }
        finally {
            sw.stop();
            console.log(sw.toString());
        }
    };
    return Application;
}());
Application.run();
