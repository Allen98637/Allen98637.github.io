const intro = document.getElementById("intro");

var introa = setInterval(frame, 20);

var op = 0;
function frame() {
    if(op < 0.95){
        op += 0.05;
    }
    else{
        op = 1;
    }
    intro.style.opacity = op;
    if(op == 1){
        clearInterval(introa);
    }
}