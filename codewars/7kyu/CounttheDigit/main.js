"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
    static nbDig(n, d) {
        let dStr = d.toString();
        let count = 0;
        for (let i = 0; i <= n; i++) {
            count += (i * i).toString().split(dStr).length - 1;
        }
        return count;
    }
}
exports.G964 = G964;
console.log(G964.nbDig(10, 1));
