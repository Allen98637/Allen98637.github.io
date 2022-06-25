$(document).ready(function(){
    $(document).pjax('a', '#container');
});

const menu0 = document.getElementById("menu0");
var menu0Event = null;
if(menu0.className != "menuItem chosenItem"){
    menu0.style.borderTopWidth = "1px";
    menu0.addEventListener('mouseover', function () {
        clearInterval(menu0Event);
        menu0Event = setInterval(function(){
            menu0.style.borderTopWidth = parseInt(menu0.style.borderTopWidth)+1+"px";
            if(parseInt(menu0.style.borderTopWidth) >= 5){menu0.style.borderTopWidth = "5px";clearInterval(menu0Event);}
        }, 20);
    });
    menu0.addEventListener('mouseout', function () {
        clearInterval(menu0Event);
        menu0Event = setInterval(function(){
            menu0.style.borderTopWidth = parseInt(menu0.style.borderTopWidth)-1+"px";
            if(parseInt(menu0.style.borderTopWidth) <= 1){menu0.style.borderTopWidth = "1px";clearInterval(menu0Event);}
        }, 20);
    });
}
const menu1 = document.getElementById("menu1");
var menu1Event = null;
if(menu1.className != "menuItem chosenItem"){
    menu1.style.borderTopWidth = "1px";
    menu1.addEventListener('mouseover', function () {
        clearInterval(menu1Event);
        menu1Event = setInterval(function(){
            menu1.style.borderTopWidth = parseInt(menu1.style.borderTopWidth)+1+"px";
            if(parseInt(menu1.style.borderTopWidth) >= 5){menu1.style.borderTopWidth = "5px";clearInterval(menu1Event);}
        }, 20);
    });
    menu1.addEventListener('mouseout', function () {
        clearInterval(menu1Event);
        menu1Event = setInterval(function(){
            menu1.style.borderTopWidth = parseInt(menu1.style.borderTopWidth)-1+"px";
            if(parseInt(menu1.style.borderTopWidth) <= 1){menu1.style.borderTopWidth = "1px";clearInterval(menu1Event);}
        }, 20);
    });
}
const menu2 = document.getElementById("menu2");
var menu2Event = null;
if(menu2.className != "menuItem chosenItem"){
    menu2.style.borderTopWidth = "1px";
    menu2.addEventListener('mouseover', function () {
        clearInterval(menu2Event);
        menu2Event = setInterval(function(){
            menu2.style.borderTopWidth = parseInt(menu2.style.borderTopWidth)+1+"px";
            if(parseInt(menu2.style.borderTopWidth) >= 5){menu2.style.borderTopWidth = "5px";clearInterval(menu2Event);}
        }, 20);
    });
    menu2.addEventListener('mouseout', function () {
        clearInterval(menu2Event);
        menu2Event = setInterval(function(){
            menu2.style.borderTopWidth = parseInt(menu2.style.borderTopWidth)-1+"px";
            if(parseInt(menu2.style.borderTopWidth) <= 1){menu2.style.borderTopWidth = "1px";clearInterval(menu2Event);}
        }, 20);
    });
}
const menu3 = document.getElementById("menu3");
var menu3Event = null;
if(menu3.className != "menuItem chosenItem"){
    menu3.style.borderTopWidth = "1px";
    menu3.addEventListener('mouseover', function () {
        clearInterval(menu3Event);
        menu3Event = setInterval(function(){
            menu3.style.borderTopWidth = parseInt(menu3.style.borderTopWidth)+1+"px";
            if(parseInt(menu3.style.borderTopWidth) >= 5){menu3.style.borderTopWidth = "5px";clearInterval(menu3Event);}
        }, 20);
    });
    menu3.addEventListener('mouseout', function () {
        clearInterval(menu3Event);
        menu3Event = setInterval(function(){
            menu3.style.borderTopWidth = parseInt(menu3.style.borderTopWidth)-1+"px";
            if(parseInt(menu3.style.borderTopWidth) <= 1){menu3.style.borderTopWidth = "1px";clearInterval(menu3Event);}
        }, 20);
    });
}

var introa = setInterval(frame, 20);
const icons = document.querySelector('footer');

var op = 0;
function frame() {
    if(op < 0.98){
        op += 0.02;
    }
    else{
        op = 1;
    }
    icons.style.opacity = op;
    if(op == 1){
        clearInterval(introa);
    }
}