document.body.onload = init;
const content=document.getElementById("content");

var daA = [];
var daI = [];
var daB = [];
var prog = [];
var Events = [];
var intro;
function init(){
    for(var i = 0; i < data.length; i++){
        var newA = document.createElement("a");
        newA.href = data[i]["link"];
        newA.target = "_blank";
        newA.style.opacity = 0;
        var newI = document.createElement("img");
        newI.src = "works/"+data[i]["img"];
        newI.style.width = "1280px";
        newI.style.margin = "0";
        var newB = document.createElement("div");
        newB.style.width = "1280px";
        newB.style.margin = "0";
        newB.style.marginBottom = "50px";
        newB.style.height = "140px";
        newB.style.transform = "translateY(-5px)";
        newB.textContent = data[i]["title"];
        newB.style.fontSize = "60px";
        newB.style.color = "rgba("+data[i]["titl"][0]+","+data[i]["titl"][1]+","+data[i]["titl"][2]+",1)";
        newB.style.backgroundColor = "rgba("+data[i]["color"][0]+","+data[i]["color"][1]+","+data[i]["color"][2]+",1)";


        daA.push(newA);
        daI.push(newI);
        daB.push(newB);
        Events.push(null);
        prog.push(0);
        newA.appendChild(newI);
        newA.appendChild(newB);
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
            first += 1;
            daA[i].addEventListener("mouseover",function(event) {
                var dex = daA.indexOf(event.target);
                if(dex == -1){dex = daI.indexOf(event.target);}
                if(dex == -1){dex = daB.indexOf(event.target);}
                if(dex != -1){
                    clearInterval(Events[dex]);
                    Events[dex] = setInterval(function(){
                        prog[dex] += 0.1;
                        var r = data[dex]["color"][0] + (data[dex]["scolor"][0] - data[dex]["color"][0]) * prog[dex];
                        var g = data[dex]["color"][1] + (data[dex]["scolor"][1] - data[dex]["color"][1]) * prog[dex];
                        var b = data[dex]["color"][2] + (data[dex]["scolor"][2] - data[dex]["color"][2]) * prog[dex];
                        daB[dex].style.backgroundColor = "rgba("+r+","+g+","+b+",1)";
                        if(prog[dex] >= 1){
                            prog[dex] = 1;
                            daB[dex].style.backgroundColor = "rgba("+data[dex]["scolor"][0]+","+data[dex]["scolor"][1]+","+data[dex]["scolor"][2]+",1)";;
                            clearInterval(Events[dex]);
                        }
                        daI[dex].style.filter = "brightness("+(1 + prog[dex] / 4)+")";
                    },20);
                }
            });
            daA[i].addEventListener("mouseout",function(event) {
                var dex = daA.indexOf(event.target);
                if(dex == -1){dex = daI.indexOf(event.target);}
                if(dex == -1){dex = daB.indexOf(event.target);}
                if(dex != -1){
                    clearInterval(Events[dex]);
                    Events[dex] = setInterval(function(){
                        prog[dex] -= 0.1;
                        var r = data[dex]["color"][0] + (data[dex]["scolor"][0] - data[dex]["color"][0]) * prog[dex];
                        var g = data[dex]["color"][1] + (data[dex]["scolor"][1] - data[dex]["color"][1]) * prog[dex];
                        var b = data[dex]["color"][2] + (data[dex]["scolor"][2] - data[dex]["color"][2]) * prog[dex];
                        daB[dex].style.backgroundColor = "rgba("+r+","+g+","+b+",1)";;
                        if(prog[dex] <= 0){
                            prog[dex] = 0;
                            daB[dex].style.backgroundColor = "rgba("+data[dex]["color"][0]+","+data[dex]["color"][1]+","+data[dex]["color"][2]+",1)";;
                            clearInterval(Events[dex]);
                        }
                        daI[dex].style.filter = "brightness("+(1 + prog[dex] / 4)+")";
                    },20);
                }
            });
        }
    }
    times += 1;
}