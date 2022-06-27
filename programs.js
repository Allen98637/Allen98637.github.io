document.body.onload = init;


const content=document.getElementById("content");
const footer = document.querySelector('footer');

var sumH = 20;
var daA = [];
var daI = [];
var daD = [];
var daT = [];
var daP = [];
var Events = [];
var prog = [];
var intro;
function init(){
    for(var i = 0;i<data.length;i++){
        newA = document.createElement("a");
        newA.href = data[i]["href"];
        newA.target = "_blank";
        newA.style.opacity = 0;
        newI = document.createElement("img");
        newI.src = "works/"+data[i]["img"];
        newI.alt = data[i]["name"];
        newI.style.position="absolute";
        newI.style.left = "15%";
        newI.style.width = "200px";
        newI.style.top = sumH + 50 + 10 * i + "px";
        newD = document.createElement("div");
        newD.style.position="absolute";
        newD.style.left = "calc(15% + 200px)";
        newD.style.width = "calc(70% - 200px)";
        newD.style.height = "200px";
        newD.style.top = sumH + 50 + 10 * i + "px";
        newD.style.backgroundColor = "rgba("+data[i]["color"][0]+","+data[i]["color"][1]+","+data[i]["color"][2]+",1)";
        newT = document.createElement("h3");
        newT.textContent = data[i]["name"];
        newT.style.color = "rgba("+data[i]["titl"][0]+","+data[i]["titl"][1]+","+data[i]["titl"][2]+",1)";
        newT.style.fontSize = "30px";
        newP = document.createElement("p");
        newP.textContent = data[i]["desc"];
        newP.style.color = "rgba("+data[i]["font"][0]+","+data[i]["font"][1]+","+data[i]["font"][2]+",1)";
        newP.style.fontSize = "20px";
        newP.style.lineHeight= "30px";
        newP.style.top = "110px";
        newP.style.height = "90px";
        newP.style.justifyContent = "center";
        newP.style.alignItems = "center";
        newP.style.display = "flex";
    
        daT.push(newT);
        daI.push(newI);
        daD.push(newD);
        daA.push(newA);
        daP.push(newP);
        Events.push(null);
        prog.push(0);
        newD.appendChild(newT);
        newD.appendChild(newP);
        newA.appendChild(newD);
        newA.appendChild(newI);
        content.appendChild(newA);
        sumH += 220;
    }
    footer.style.position = "absolute";
    footer.style.top = sumH + 70 + "px";
    footer.style.left = "50%";
    footer.style.transform = "translateX(-50%)";

    intro = setInterval(fadeIn,20);
}

var times = 0;
var first = 0;
function fadeIn(){
    var num = parseInt(times/5) + 1;
    if(num > daA.length){num = daA.length;}
    for(var i = first; i < num; i++){
        daA[i].style.opacity = parseFloat(daA[i].style.opacity) + 0.05;
        var tar = 20 + 220 * i;
        var k = parseFloat(daD[i].style.top);
        var y = k + (tar - k) * 0.1;
        daD[i].style.top = y + "px";
        daI[i].style.top = y + "px";
        if(parseFloat(daD[i].style.top) < tar + 5){
            daD[i].style.top = tar + "px";
            daI[i].style.top = tar + "px";
            daA[i].style.opacity = 1;
            daA[i].addEventListener("mouseover",function(event) {
                var dex = daA.indexOf(event.target);
                if(dex == -1){dex = daT.indexOf(event.target);}
                if(dex == -1){dex = daD.indexOf(event.target);}
                if(dex == -1){dex = daI.indexOf(event.target);}
                if(dex == -1){dex = daP.indexOf(event.target);}
                if(dex != -1){
                    clearInterval(Events[dex]);
                    Events[dex] = setInterval(function(){
                        prog[dex] += 0.1;
                        var r = data[dex]["color"][0] + (data[dex]["scolor"][0] - data[dex]["color"][0]) * prog[dex];
                        var g = data[dex]["color"][1] + (data[dex]["scolor"][1] - data[dex]["color"][1]) * prog[dex];
                        var b = data[dex]["color"][2] + (data[dex]["scolor"][2] - data[dex]["color"][2]) * prog[dex];
                        daD[dex].style.backgroundColor = "rgba("+r+","+g+","+b+",1)";;
                        if(prog[dex] >= 1){
                            prog[dex] = 1;
                            daD[dex].style.backgroundColor = "rgba("+data[dex]["scolor"][0]+","+data[dex]["scolor"][1]+","+data[dex]["scolor"][2]+",1)";;
                            clearInterval(Events[dex]);
                        }
                    },20);
                }
            });
            daA[i].addEventListener("mouseout",function(event) {
                var dex = daA.indexOf(event.target);
                if(dex == -1){dex = daT.indexOf(event.target);}
                if(dex == -1){dex = daD.indexOf(event.target);}
                if(dex == -1){dex = daI.indexOf(event.target);}
                if(dex == -1){dex = daP.indexOf(event.target);}
                if(dex != -1){
                    clearInterval(Events[dex]);
                    Events[dex] = setInterval(function(){
                        prog[dex] -= 0.1;
                        var r = data[dex]["color"][0] + (data[dex]["scolor"][0] - data[dex]["color"][0]) * prog[dex];
                        var g = data[dex]["color"][1] + (data[dex]["scolor"][1] - data[dex]["color"][1]) * prog[dex];
                        var b = data[dex]["color"][2] + (data[dex]["scolor"][2] - data[dex]["color"][2]) * prog[dex];
                        daD[dex].style.backgroundColor = "rgba("+r+","+g+","+b+",1)";;
                        if(prog[dex] <= 0){
                            prog[dex] = 0;
                            daD[dex].style.backgroundColor = "rgba("+data[dex]["color"][0]+","+data[dex]["color"][1]+","+data[dex]["color"][2]+",1)";;
                            clearInterval(Events[dex]);
                        }
                    },20);
                }
            });
            first = i + 1;
        }
    }
    times += 1;
    if(parseFloat(daD[daD.length-1].style.top) < tar + 5){clearInterval(intro);}
}