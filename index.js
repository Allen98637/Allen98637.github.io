const intro = document.getElementById("intro");

var introa = setInterval(frame, 20);

const intext = document.getElementById("intext");
const intext2 = document.getElementById("intext2");

var op = 0;
var k = -100;
function frame() {
    if(op < 0.95){
        op += 0.02;
        k *= 0.9;
    }
    else{
        op = 1;
        k = 0;
    }
    intro.style.opacity = op;
    intext.style.top = k+"px";
    intext2.style.top = k*2 +"px";
    if(op == 1){
        clearInterval(introa);
    }
}