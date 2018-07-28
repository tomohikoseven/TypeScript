var txt = document.createElement('input');
var btn = document.createElement('button');
btn.textContent = "押して";
btn.onclick = () => {
    alert(txt.value + "ですね");
    window.close();
}
document.body.appendChild(txt);
document.body.appendChild(btn);