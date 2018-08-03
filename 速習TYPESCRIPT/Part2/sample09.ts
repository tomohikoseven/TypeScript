interface StringMap {
    [index: string]: string;
}

let obj: StringMap = {
    'hoge': 'ほげ',
    'foo': 'ふぅ',
    'bar': 'ばぁ'
}
alert(obj.hoge);
window.close();