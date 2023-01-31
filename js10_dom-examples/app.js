console.log('**** app.js *******');


const dilInput = document.querySelector(".diller");
const silBtn = document.getElementById("sil");
const ekleBtn = document.getElementById("ekle");
const dilSection = document.querySelector("#dil-section");

const ul = document.createElement('ul');  // tirnak icinde gosterdigin elementi ekler , fakat su an nereye akleyecegi belli degil
dilSection.appendChild(ul);   // buradaki ul , yukardaki const ile olusturudugumuz ul .

//! not : duruma gore css dosyasi bootstrapi ezsin diye , css linkini bootstrap linkinin altina bagliyoruz.

//* SELECTORS
//******************************************* */

console.log(dilSection.children[0]);  // dilsection in 0. childrenini verir
console.log(dilSection.parentNode);  // dilsection in parentini verir
console.log(dilSection.parentNode.parentNode);  // dilsection in parentinin parentini verir

// baska bir elementten baska bir elemente erisme:

// ul den h1 e erisme ornegi ;

//? closest() : ilk buldugu, en yakin parenti bulur
const h1 = ul.closest(".container").firstElementChild;  // closest : yakinlarina bak demek. burada yazilan kodun tanimi : ul nin yakinlarina bak , ve classi container olani bul.
// const h1 = ul.closest(".container").firstChild ;  //! (firstChild) bu bize icindeki yaziyi verir
console.log(h1);

// h1 i yakaladik, rengini kirmizi yapalim.
h1.style.color = "red";

//*ornek
// closest() ile buton secme

buttons = ul.closest(".container").querySelectorAll(".btn");  // container classi icerisindeki btn classina ait olan elementleri arar.
console.log(buttons);

//******************************************* */


ekleBtn.onclick = function(){
    // bos basildiginde alert vermesi icin
    if (!dilInput.value){
        alert("Lutfen bir dil giriniz");
    }else{
        ul.innerHTML +=` <li>${dilInput.value}</li> `;   // +=   => uzerine geleni eklesin diye
        dilInput.value = "";   // Ekledikten sonra placholderi temizlesin diye
        javascriptKontrol();  // aciklamasi asagida
    }
}


//*  javascript yazildiginde rengi kirmizi yapmasi icin fonksiyon yazdik:
const javascriptKontrol = () => {
    document.querySelectorAll("ul li").forEach((dil) => {
        const kucukHarf = dil.textContent.toLocaleLowerCase();  // her bir li nin icerisindekileri kucuk harfe cevir
        if(kucukHarf === "javascript"){
            // dil.className = "red";  // classname atamasi  , css ten rengi red yapabliriz, veya direk buradan red olarakta verebliriz.
            dil.setAttribute('class', 'red');  //? alternatif yontem
        }
    })
}

//? not: classname ile class verilirse varolan classi siler yenisini yazar
//? classlist ile class verilirse seilmeden ekleme yapar


//* SIL BUTONU 
silBtn.onclick = function(){
    ul.childElementCount > 0  // silinecek bise kalmadiginde demek
    ? ul.removeChild(ul.lastElementChild)
    : alert('Silinecek dil kalmadi')
}

//* ENTER A BASILDIGINDA DA EKLEME YAPMASI ICIN :
// dilInput.addEventListener('OLAYIYAZ', (E) =>{NEOLACAGINI YAZ } // ana syntax
dilInput.addEventListener('keydown', (e) =>{  // KEYDOWN : tusa basildiginda demek
    if(e.code === "Enter"){
        ekleBtn.onclick();      // yukarida yazdigimiz eklebtn nin click  fonksiyonunu cagir demek (41.satirdaki)
    }
    // if(e.keycode === "13"){     // keykode ile enter a basilinca eklmesi icin
    //     ekleBtn.onclick();     
    // }
    if(e.code === "Delete"){
        silBtn.onclick();   
    }
})

//* SAYFA ACILINCA INPUT A FOCUS OLMASI ICIN

window.onload = () => {   // window yuklendiginde
    javascriptKontrol(); // sayfa yuklenir yuklanmeez bu fonksyionu kontrol et (onceden yazilmislari yukledigimizde o yazilanlari da kontrol etmesi icin)ve
    dilInput.focus();  // inputa focuslan
}
