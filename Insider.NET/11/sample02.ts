function paramtest(arg1: number, ...restparam: number[]) {
    return "first item of restparam:" + restparam[0] +
        "\nlength of restparam:" + restparam.length;
}
alert(paramtest(1, 2, 3, 4, 5));
window.close();