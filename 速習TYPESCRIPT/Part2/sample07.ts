let obj: { [index: string]: string; } = {
    'hoge': 'ほげ',
    'foo': 'ふぅ',
    'bar':'ばぁ'
}

alert(obj.hoge);
alert(obj['hoge']);

window.close();