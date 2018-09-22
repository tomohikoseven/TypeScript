"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
    static accum(s) {
        // your code
        return s.split("").map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join("-");
    }
}
exports.G964 = G964;
console.log(G964.accum("abcd"));
