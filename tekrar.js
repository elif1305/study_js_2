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