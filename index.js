let inputEl = document.getElementById("input");
let counterEl = document.getElementById("counter");
let resultEl = document.getElementById("result");
let defusekeyEl1 = document.getElementById("defusekey1");
let defusekeyEl3 = document.getElementById("defusekey3");
let imageEl = document.getElementById("image");


let random1 = Math.ceil(Math.random()*100);
let random2 = Math.ceil(Math.random()*100);
let addrandom = random1+random2;
console.log(addrandom);
let keyEl = String(addrandom);


defusekeyEl1.textContent = random1;
defusekeyEl3.textContent = random2;


let bombCounter = 20;

let intervalId = setInterval(function(){
    bombCounter = bombCounter-1;
    counterEl.textContent = bombCounter;

    if(bombCounter===0){
        clearInterval(intervalId);
        imageEl.src = "Explosion-3.png"
        resultEl.textContent = "Booooooooom";
        resultEl.style.color = "red";
    }
},1000);

console.log(bombCounter)

function onChanginput(event){
    if(inputEl.value === addrandom && event.key==="Enter" && bombCounter!== 0){
        clearInterval(intervalId);
        resultEl.textContent = "You have succesfully deduse the bomb";
        resultEl.style.color = "green";
    }
}
console.log(keyEl)



inputEl.addEventListener("keydown",onChanginput)