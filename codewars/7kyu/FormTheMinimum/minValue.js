"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minValue = (values) => {
    let fil = values.filter(function (x, i, self) {
        return self.indexOf(x) === i;
    });
    let filSort = fil.sort();
    return Number(filSort.join(""));
};
