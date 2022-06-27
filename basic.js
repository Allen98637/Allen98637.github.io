$(document).ready(function(){
    $(document).pjax('a', '#container');
});


var menu0;
var menu0Event = null;

var menu1;
var menu1Event = null;

var menu2;
var menu2subEvent;
var menu2sub;
var menu2Event = null;
var menu2subScroll = true;

var menu3Event = null;
var menu3;

var introa;
var icons

var menu2sub0;
var menu2sub1;
var menu2sub2;

window.addEventListener("load",function(){
    menu0 = document.getElementById("menu0");
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
    menu1 = document.getElementById("menu1");
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
    menu2 = document.getElementById("menu2");
    menu2sub = document.getElementById("menu2sub");
    if(menu2.className != "menuItem chosenItem"){
        menu2.style.borderTopWidth = "1px";
    }
    menu3 = document.getElementById("menu3");
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

    introa = setInterval(frame, 20);
    icons = document.querySelector('footer');

    menu2sub0 = document.getElementById("menu2sub0");
    menu2sub1 = document.getElementById("menu2sub1");
    menu2sub2 = document.getElementById("menu2sub2");

    menu2.onmouseover = function(){
        menu2sub.style.display = "block";
        if(menu2subScroll){
            clearInterval(menu2subEvent);
            clearInterval(menu2Event);
            menu2Event = setInterval(function(){
                menu2.style.borderTopWidth = parseInt(menu2.style.borderTopWidth)+1+"px";
                menu2sub.style.top = 56 - parseInt(menu2.style.borderTopWidth) +"px";
                if(parseInt(menu2.style.borderTopWidth) >= 5){
                    menu2.style.borderTopWidth = "5px";
                    menu2sub.style.top = "51px";
                    clearInterval(menu2Event);
                }
            }, 20);
            menu2subEvent = setInterval(menu2subGo,20);
            menu2subScroll = false;
        }
    };
    menu2sub.onmouseover = function(){
        menu2sub.style.display = "block";
        if(menu2subScroll){
            clearInterval(menu2subEvent);
            clearInterval(menu2Event);
            menu2Event = setInterval(function(){
                menu2.style.borderTopWidth = parseInt(menu2.style.borderTopWidth)+1+"px";
                menu2sub.style.top = 56 - parseInt(menu2.style.borderTopWidth) +"px";
                if(parseInt(menu2.style.borderTopWidth) >= 5){
                    menu2.style.borderTopWidth = "5px";
                    menu2sub.style.top = "51px";
                    clearInterval(menu2Event);
                }
            }, 20);
            menu2subEvent = setInterval(menu2subGo,20);
            menu2subScroll = false;
        }
    };
    menu2.onmouseout = function(){
        if(!menu2subScroll && !menu2sub.matches(":hover")){
            clearInterval(menu2subEvent);
            clearInterval(menu2Event);
            menu2Event = setInterval(function(){
                menu2.style.borderTopWidth = parseInt(menu2.style.borderTopWidth)-1+"px";
                menu2sub.style.top = 56 - parseInt(menu2.style.borderTopWidth) +"px";
                if(parseInt(menu2.style.borderTopWidth) <= 1){
                    menu2.style.borderTopWidth = "1px";
                    menu2sub.style.top = "55px";
                    clearInterval(menu2Event);
                }
            }, 20);
            menu2subEvent = setInterval(menu2subBack,20);
            menu2subScroll = true;
        }
    };
    menu2sub.onmouseout = function(){
        if(!menu2subScroll && !menu2.matches(":hover")){
            clearInterval(menu2subEvent);
            clearInterval(menu2Event);
            menu2Event = setInterval(function(){
                menu2.style.borderTopWidth = parseInt(menu2.style.borderTopWidth)-1+"px";
                menu2sub.style.top = 56 - parseInt(menu2.style.borderTopWidth) +"px";
                if(parseInt(menu2.style.borderTopWidth) <= 1){
                    menu2.style.borderTopWidth = "1px";
                    menu2sub.style.top = "55px";
                    clearInterval(menu2Event);
                }
            }, 20);
            menu2subEvent = setInterval(menu2subBack,20);
            menu2subScroll = true;
        }
    };
},false);



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

var menu2subY = 0;
function menu2subGo(){
    menu2subY = menu2subY + (170 - menu2subY) * 0.2;
    menu2sub.style.top = menu2subY - 110 + "px";
    if(menu2subY >= 166){
        menu2sub.style.top = "60px";
        clearInterval(menu2subEvent);
    }
}
function menu2subBack(){
    menu2subY *= 0.8;
    menu2sub.style.top = menu2subY - 110 + "px";
    if(menu2subY < 5){
        menu2sub.style.top = "-110px";
        menu2sub.style.display = "none";
        clearInterval(menu2subEvent);
    }
}