const button = document.getElementById('btn');
btn.style.backgroundColor = 'black';
btn.style.fontSize = '5px';

const myImage = document.getElementsByTagName('img');
img[0].style.border = "solid"

par[0].innerHTML += "<dsfsf>"
par[0].innerText = "dom "
par[0].textContent = "dsfj dsfjksf f  "

document.querySelector('#title').textContent = "js dom"

const myPars = document.querySelectorAll('p');

myPars.forEach((p)=> console.log(p.innerText))

const myPars1 = document.getElementsByClassName("par");

//const myParsArray = Array.from(mayPars1);

[...myPars1].forEach((p)=> console.log(p.innerText))

document.querySelector("section p a")

// =======================

document.getElementById('header').onmouseover = function(){
    document.getElementById('header').style.color = "red"
};


const myImage = document.querySelector('img');

myImage.addEventListener("mouseover", ()=>{
    myImage.style.opacity = "0.5"
})


const ul = document.createElement('ul');
dilsention.appendChild(ul);


const h1 = ul.closest(".container").firstElementChild;


ekleBtn.onclick = function(){
    if(!dilInput.value){
        alert("lutfen bir dil giriniz")
    }else{
        ul.innerHTML += `sdfsfa`
        dilInput.value = '';
    }
}

const javascriptKontrol = () => {
    document.querySelectorAll("ul li").forEach((dil)=> {

    })
}
window.onload = () => {
    dilInput.focus()
}



fetch("httpssdfsdffssf")
.then((res)=> {
    if(!res.ok){
        throw new Error(`something went wrong: ${res.status}`)
    }
    return res.json()
})
.then((data)=>updateDom(data))
.catch((err)=> console.log(err))


fetch('url')
.then((res)=>{
    if(!res.ok){
        throw new Error('kkmk')
    }
    return res.json()
    
})


/* 

function isminiYazdir(){

 var isim = "elif"

 var number = 5

}

// var if, switch gibi 

// console.log(number)



var flag = true

if(flag){

let number = 6

// console.log(number)

}else{

var kankam = "huseyin"

}



console.log(number)

 */
 
/*  kankam = "huseyin"
 
 console.log(kankam)
 
 var kankam ; */

// backwward competbility

/* var myArray = [1, 2, 1, 1, 2, 1, 3, 4, 1]

let unique = [...new Set(myArray)];

console.log(unique) */



/* const name = "huseyin"
const gulFamily = {
  name : "lale",
  surname : "gul"
} 
gulerFamily.name = "can"
console.log(gulerFamily)
 // primitive type,: ev
 // reference type : degerini degistirebilirz.: esyalar */