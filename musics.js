document.body.onload = init;


const content=document.getElementById("content");
const footer = document.querySelector('footer');


var sumH = 20;
var daS = [];
var daP = [];
var daD = [];
var daT = [];
var daB = [];
var Events = [];
var intro;
var prog = [];
var nowPlaying = -1;
var daMusic = null;
function init(){
    for(var i = 0;i<data.length;i++){
        var newS = document.createElement("div");
        newS.style.opacity = 0;
        var newP = document.createElement("img");
        newP.style.position="absolute";
        newP.style.top = sumH + "px";
        if(i % 2 == 0){newP.style.left = "15%";}
        else{newP.style.left = "calc(85% - 200px)";}
        newP.src = "works/"+data[i]["img"];
        newP.alt = data[i]["name"];
        newP.style.width = "200px";
        newP.style.cursor = "pointer";
        var newD = document.createElement("div");
        newD.style.position="absolute";
        newD.style.top = sumH + "px";
        if(i % 2 == 0){
            newD.style.left = "100%";
            prog.push([0,100]);
        } // 15%+210px
        else{
            newD.style.left = "calc(210px - 70%)";
            prog.push([210,-70]);
        } // 15%
        newD.style.width = "calc(70% - 210px)";
        newD.style.height = "60px";
        newD.style.backgroundColor = "rgba(0,0,0,0.5)";
        var newT = document.createElement("h3");
        newT.textContent = data[i]["name"];
        newT.style.margin = "0";
        newT.style.height = "100%";
        newT.style.fontSize = "40px";
        newT.style.display = "flex";
        newT.style.justifyContent = "center";
        newT.style.alignItems = "center";
        newT.style.cursor = "default";
        var newB =  document.createElement("img");
        newB.style.position="absolute";
        newB.style.top = sumH + "px";
        if(i % 2 == 0){newB.style.left = "15%";}
        else{newB.style.left = "calc(85% - 200px)";}
        newB.src = "sites/play.png";
        newB.style.opacity = 0;
        newB.alt = data[i]["name"];
        newB.style.width = "200px";
        newB.style.cursor = "pointer";
        var newL = [];
        if("sc" in data[i]){
            var link = document.createElement("a");
            link.href = data[i]["sc"];
            link.target = "_blank";
            var img = document.createElement("img");
            img.src = "sites/sc.png";
            img.alt = "soundcloud";
            img.style.width = "60px";
            link.appendChild(img);
            newL.push(link);
        }
        if("yt" in data[i]){
            var link = document.createElement("a");
            link.href = data[i]["yt"];
            link.target = "_blank";
            var img = document.createElement("img");
            img.src = "sites/yt.png";
            img.alt = "youtube";
            img.style.width = "60px";
            link.appendChild(img);
            newL.push(link);
        }
        if("download" in data[i]){
            var link = document.createElement("a");
            link.href = data[i]["download"];
            link.target = "_blank";
            var img = document.createElement("img");
            img.src = "sites/download.png";
            img.alt = "download";
            img.style.width = "60px";
            link.appendChild(img);
            newL.push(link);
        }

        var lll = (newL.length * 90 - 30) / 2;
        for(var j=0;j<newL.length;j++){
            newL[j].style.position = "absolute";
            newL[j].style.top = "100px";
            newL[j].style.left = "calc(50% - "+ (lll - 90 * j) + "px)";
            newD.appendChild(newL[j]);
        }
        daS.push(newS);
        daB.push(newB);
        daP.push(newP);
        daD.push(newD);
        daT.push(newT);
        Events.push(null);
        newD.appendChild(newT);
        newS.appendChild(newD);
        newS.appendChild(newP);
        newS.appendChild(newB);
        content.appendChild(newS);
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
    if(num > daS.length){num = daS.length;}
    for(var i = first; i < num; i++){
        daS[i].style.opacity = parseFloat(daS[i].style.opacity) + 0.05;
        if(i % 2 == 0){
            prog[i][0] = prog[i][0] + (210 - prog[i][0]) * 0.1;
        }
        else{
            prog[i][0] = prog[i][0] * 0.9;
        }
        prog[i][1] = prog[i][1] + (15 - prog[i][1]) * 0.1;
        daD[i].style.left = "calc(" + prog[i][0] + "px + " + prog[i][1] + "%)"
        if(Math.abs(prog[i][1] - 15) < 0.1){
            if(i % 2 == 0){daD[i].style.left = "calc(210px + 15%)";}
            else{daD[i].style.left = "15%";}
            daS[i].style.opacity = 1;
            daB[i].addEventListener("mouseover",function(event) {
                var dex = daP.indexOf(event.target);
                if(dex == -1){dex = daB.indexOf(event.target);}
                if(dex != -1){
                    clearInterval(Events[dex]);
                    Events[dex] = setInterval(function(){
                        daB[dex].style.opacity = parseFloat(daB[dex].style.opacity) + 0.05;
                        if(parseFloat(daB[dex].style.opacity) >= 1){clearInterval(Events[dex]);}
                    },20);
                }
            });
            daB[i].addEventListener("mouseout",function(event) {
                var dex = daP.indexOf(event.target);
                if(dex == -1){dex = daB.indexOf(event.target);}
                if(dex != -1){
                    clearInterval(Events[dex]);
                    Events[dex] = setInterval(function(){
                        if(nowPlaying != dex){
                            daB[dex].src = "sites/play.png";
                            daB[dex].style.opacity = parseFloat(daB[dex].style.opacity) - 0.05;
                            if(parseFloat(daB[dex].style.opacity) <= 0){clearInterval(Events[dex]);}
                        }
                    },20);
                }
            });
            daB[i].addEventListener("click",function(event) {
                var dex = daP.indexOf(event.target);
                if(dex == -1){dex = daB.indexOf(event.target);}
                if(dex != -1){
                    if(nowPlaying == dex){
                        daMusic.pause();
                        nowPlaying = -1;
                        daB[dex].src = "sites/play.png";
                    }
                    else{
                        daB[dex].src = "sites/stop.png";
                        nowPlaying = dex;
                        if(daMusic == null){
                            daMusic = document.createElement("audio");
                            content.appendChild(daMusic);
                            daMusic.addEventListener("ended",function(){
                                daB[nowPlaying].src = "sites/play.png";
                                nowPlaying = -1;
                            })
                        }
                        daMusic.src = "works/"+data[dex]["muse"];
                        daMusic.play();
                    }
                }
            });
            first = i+1;
        }
    }
    times += 1;
    if(Math.abs(prog[daS.length-1][1] - 15) < 0.1){clearInterval(intro);}
}