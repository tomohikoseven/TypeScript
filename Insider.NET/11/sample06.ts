function getLength(x: number): number;
function getLength(x: string, isCharUnit: boolean): number;
function getLength(x: any, isCharUnit = true): number {
    if (typeof (x) == "string") {
        if (isCharUnit) {
            return x.length;
        } else {
            var sum = 0;
            for (var i = 0; i < x.length; i++){
                if (x.charCodeAt(i) < 256) {
                    sum += 1;
                } else {
                    sum += 2;
                }
            }
            return sum;
        }
    } else {
        if (x == 0) return 1;
        return Math.floor(Math.log(x) / Math.LN10) + 1;
    }
}

alert(getLength("abc日本語", false));
window.close();