
var a = document.querySelector("h1");
var b = document.querySelector("#bulb");
let flag = 0;
a.addEventListener("click",function(){
    if(flag == 0){
        b.style.backgroundColor = "yellow";
        a.innerHTML = "OFF"
        flag++; // 1
    }
    else{
        b.style.backgroundColor = "white";
        a.innerHTML = "ON"
        flag--; // 0
    }
})
