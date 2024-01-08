document.get

const randomColor = function colorCode(){
    const hex = "0123456789ABCDEF";
    let hash= "#";
    for(let i=0;i<6;i++){
    hash+=hex[Math.floor(Math.random()*16)];
    }
  return hash;
};


let interval;
const changeColor =function startColor(){
    if(!interval){
  interval= setInterval(bgcolor,1000)
    }
    function bgcolor(){document.body.style.backgroundColor=randomColor()}
}

const stopColor=function stop(){
     clearInterval(interval);
     interval=null;
}

 document.getElementById("start").addEventListener('click', changeColor);
 document.getElementById("stop").addEventListener('click', stopColor)
