var introa = setInterval(frame, 20);

const textBG = document.getElementsByClassName("textBG");
const context = document.getElementsByClassName("contaxt");

var op = 0;
function frame() {
    if(op < 0.95){
        op += 0.05;
    }
    else{
        op = 1;
    }
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