var full = location.href;
var tem = {};

if(full.indexOf("?")!= -1){
    var pars = full.split("?")[1];
    var klis = pars.split("&");
    for(var i=0; i < klis.length;i++){
        tem[klis[i].split("=")[0]] = klis[i].split("=")[1];
    }
}

const urlPar = tem;