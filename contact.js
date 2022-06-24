var introa = setInterval(frame, 20);

const icons = document.querySelector('footer');
const textBG = document.getElementsByClassName("textBG");
const context = document.getElementsByClassName("context");

var op = 0;
function frame() {
    if(op < 0.95){
        op += 0.02;
    }
    else{
        op = 1;
    }
    icons.style.opacity = op;
    for(var i=0;i<textBG.length;i++){
        textBG.item(i).style.opacity = op;
    }
    for(var i=0;i<context.length;i++){
        context.item(i).style.opacity = op;
    }
    if(op == 1){
        clearInterval(introa);
    }
}