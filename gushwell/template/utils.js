"use strict";
exports.__esModule = true;
var Stopwatch = /** @class */ (function () {
    function Stopwatch() {
    }
    Stopwatch.startNew = function () {
        var sw = new Stopwatch();
        sw.start();
        return sw;
    };
    Stopwatch.prototype.start = function () {
        this.startTime = Date.now();
    };
    Stopwatch.prototype.stop = function () {
        this.stopTime = Date.now();
    };
    Stopwatch.prototype.elapsed = function () {
        return this.stopTime - this.startTime;
    };
    Stopwatch.prototype.toString = function () {
        var tms = this.elapsed();
        var h = Math.floor(tms / (1000 * 60 * 60));
        var m = Math.floor(tms / (1000 * 60));
        var s = Math.floor(tms / 1000);
        var ms = Math.floor(tms % 1000);
        return this._zeroPadding(h) + ":" + this._zeroPadding(m) + ":" + this._zeroPadding(s) + ":" + this._zeroPadding(ms, 3);
    };
    Stopwatch.prototype._zeroPadding = function (n, d) {
        if (d === void 0) { d = 2; }
        var zero = '';
        for (var i = 1; i < d; i++)
            zero += '0';
        return (zero + n).slice(-d);
    };
    return Stopwatch;
}());
exports.Stopwatch = Stopwatch;
