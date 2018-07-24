var m_name: string = "D";
var x: number = Math.floor(Math.random() * 10);
var y: number = Math.floor(Math.random() * 10);
document.body.style.fontFamily = '"Courier","monospace"';
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++){
        if (i == y && j == x) {
            document.body.innerHTML += m_name;
        } else {
            document.body.innerHTML += ".";
        }
    }
    document.body.innerHTML += "<br/>";
}