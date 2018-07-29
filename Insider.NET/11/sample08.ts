interface PROP {
    length: any;
}
function getLength<T extends PROP, U>(x: T): U{
    return x.length;
}
alert(getLength<string, number>("総称型"));
window.close();