//* ======================================================
//*                        EVENTS
//* ======================================================

console.log('****** EVENTS *******');

// js e dinamizm saglayan islemlerdir.
//DOM sayesinde JavaScript, HTML olayları ile etkileşimi halinde olabilir.
//• Örneğin, kullanıcı bir HTML elemanına tıkladığında (bir olay meydana geldiğinde) bir Javascript kodu çalıştırılabilir.
//• Bir olay meydana geldiğinde bir JS kodu çalıştırmak için ilgili elemanın olay özelliği kullanılır.
//• HTML olayları için bir çok örnek verilebilir.
//• Kullanıcı Fareyi tıkladığında (onclick)
//• Bir web sayfası yüklendiğinde (onload)
//• Fare bir elemanın üzerine geldiğinde (onmouseover)
//• Fare bir elemanın üzerinden ayrıldığında (onmouseout)
//• Bir elemanın içeriği değiştiğinde (onchange)
//• Bir HTML formu gönderildiğinde (onsubmit)
//• Klavyeden bir tuşa basıldığında (onkeyup)

// 4 yontem var, slayttan bak. 1. ve 2. yontem cok kullanimiyor. 3 ve 4 kulalniliyor.

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------


//? METHOD-3 (ONLY JS)

document.getElementById("header").onmouseover = function(){
    document.getElementById("header").style.color = "red"
}


const header = document.getElementById('header');

header.onmouseover = function(){
    header.style.color = "red"
};

header.onmouseout = function(){
    header.style.color = "black";
} 


//? METHOD-4 (ONLY JS - addEventListener())

const myImg = document.querySelector('img');

myImg.addEventListener("mouseover", ()=>{
    myImg.style.transform = "translateY(5px)"
});

myImg.addEventListener("mouseout", ()=>{
    myImg.style.transform = "translateY(-5px)"
});


//* EXAMPLE-2 (button on click )
//* -------------------------------------------------------

const button = document.querySelector("#btn");

// button.addEventListener("click", function(){
//     document.querySelector("body").style.backgroundImage = "linear-gradient(to right,purple, yellow)";
//     button.textContent = "Search";
// })

button.addEventListener("click", function(event){  // burada genelde func. icine e yada event yazilir.
    console.log(event); // console da gormek icin yazdirdik. nereden ne yaptigini gosterir.
    document.querySelector("body").style.backgroundImage = "linear-gradient(to right,purple, yellow)";
    button.textContent = "Search";
})


// event in ayrintilarini gorebliriz. function(event (ya da e) ve clg(event) yazarak ayrintilari console da gorebliriz. yukaridaki ornekteki gibi.