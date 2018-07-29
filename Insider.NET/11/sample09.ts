function getCircleArray<T>(data: T[], idx: number): T {
    var index: number;
    index = idx % data.length;
    return data[index];
}
var a = [10, 20, 30, 40];
var dir = ["N", "E", "S", "W"];
alert(getCircleArray<number>(a, 5));
alert(getCircleArray<string>(dir, 5));
window.close();