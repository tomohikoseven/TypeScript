var countUp = (() => {
    var origin = 0;
    return (delta: number) => {
        return origin += delta;
    };
})();
alert(countUp(2));
alert(countUp(3));
window.close();