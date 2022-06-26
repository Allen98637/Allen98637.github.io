document.body.onload = init;


const content=document.getElementById("content");

var daI = [];
var daD = [];
var daA = [];
var Events = [];
var intro;
function init(){
    for(var i=0;i<data.length;i++){
        var newA = document.createElement("a");
        newA.href = data[i]["href"];
        newA.target = "_blank";
        newA.style.width = "0";
        newA.style.height = "0";
        newA.style.margin = "0";
        newA.style.opacity = 0;
        var newI = document.createElement("img");
        newI.src = "works/"+data[i]["img"];
        newI.alt = data[i]["name"];
        newI.style.margin = "0";
        newI.style.width = "33.33333333%";
        var newD = document.createElement("span");
        var left = 0;
        if(data.length % 3 != 0 && parseInt(data.length / 3) == parseInt(i / 3)){
            if(data.length % 3 == 1){left = 33.33333333;}
            else{left = 16.66666667;}
        }
        newD.style.position = "absolute";
        newD.style.left = left + (i % 3) * 33.33333333 + "%";
        newD.style.margin = "0";
        newD.style.opacity = 0;
        newD.style.backgroundColor = "rgba("+data[i]["color"][0]+","+data[i]["color"][1]+","+data[i]["color"][2]+",0.5)";
        newD.style.width = "33.33333333%";
        newD.style.paddingTop = 56.25 / 6 +"%";
        newD.style.paddingBottom = 56.25 / 6 +"%";
        newD.style.height = "0";
        newD.style.display = "block";
        newD.textContent = data[i]["name"];
        newD.style.color ="rgba("+data[i]["font"][0]+","+data[i]["font"][1]+","+data[i]["font"][2]+",1)";;
        newD.style.transform = "translateY(-100%)";
        newD.style.fontSize = data[i]["size"]+"px";
        newD.style.boxSizing = "border-box";
        daI.push(newI);
        daD.push(newD);
        daA.push(newA);
        Events.push(null);
        newA.appendChild(newI);
        newA.appendChild(newD);
        content.appendChild(newA);
    }
    intro = setInterval(fadeIn,20);
}


var times = 0;
var first = 0;
function fadeIn(){
    var num = parseInt(times/5) + 1;
    if(num > daA.length){num = daA.length;}
    for(var i = first; i < num; i++){
        daA[i].style.opacity = parseFloat(daA[i].style.opacity) + 0.05;
        if(parseFloat(daA[i].style.opacity) >= 1){
            daA[i].style.opacity = 1;
            daA[i].addEventListener("mouseover",function(event) {
                var dex = daA.indexOf(event.target);
                if(dex == -1){dex = daD.indexOf(event.target);}
                if(dex == -1){dex = daI.indexOf(event.target);}
                clearInterval(Events[dex]);
                Events[dex] = setInterval(function(){
                    daD[dex].style.opacity = parseFloat(daD[dex].style.opacity) + 0.05;
                    if(parseFloat(daD[dex].style.opacity) >= 1){clearInterval(Events[dex]);}
                },20);
            });
            daA[i].addEventListener("mouseout",function(event) {
                var dex = daA.indexOf(event.target);
                if(dex == -1){dex = daD.indexOf(event.target);}
                if(dex == -1){dex = daI.indexOf(event.target);}
                clearInterval(Events[dex]);
                Events[dex] = setInterval(function(){
                    daD[dex].style.opacity = parseFloat(daD[dex].style.opacity) - 0.05;
                    if(parseFloat(daD[dex].style.opacity) <= 0){clearInterval(Events[dex]);}
                },20);
            });
            first = i;
        }
    }
    times += 1;
    if(parseFloat(daA[daA.length-1].style.opacity) == 1){clearInterval(intro);}
}

