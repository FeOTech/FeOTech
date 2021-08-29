var words = ["Engineers","Dreamers", "Visionaries", "Innovators"];
var i = 0;
var text = "Friends";
function _getChangedText() {
    i = (i + 1) % words.length;
    console.log(words[i]);
    console.log(i);
    return text.replace(/Friends/, words[i]);
}
function _changeText() {
    var txt = _getChangedText();
    console.log(txt);
    document.getElementById("changer").innerHTML = txt;
}
setInterval("_changeText()", 2000);