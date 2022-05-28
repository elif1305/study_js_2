//* =====================================================
//*                     DOM SELECTORS
//* ======================================================

console.log('***** SELECTORS *****');


// window => document    window ekrandaki ana sayfadir, document bizim html sayfamiz. buradan elemnetlere erisiyoruz.
//window.document
//document.(id)  ile html icindeki elementlere,taglere vs erisiyoruz.

//nodelist array ozelliklerini kullanmaay izin veriyor.

//*-------------------
//*   GETELEMENTBYID()
//*-------------------

//? Example 1

// document.getElementById('header');
const header = document.getElementById('header');
console.log(header);

//ornek style degistirme;
header.style.color = "red";  // js de css isimleri camel case dir !

//? Example 2

const button = document.getElementById('btn');
btn.style.backgroundColor = "black";
btn.style.color = "yellow";

//*-------------------
//*   GETELEMENTBYTAGNAME()
//*-------------------

// html collection cevirir.

const img = document.getElementsByTagName('img');
console.log(img);

img[0].style.border = "solid";
img[0].style.borderColor = "red";
img[0].style.transform = 'rotate(-5deg)';


//*-------------------
//*   GETELEMENTBYCLASSNAME()
//*-------------------

const par = document.getElementsByClassName('par');

// par[0].style.textContent = "DOM manipulasyonu";
// par[0].innerText = 'DOM manipulasyonu';
// par[0].innerHTML = "dom manipulasyonu";
// par[0].innerHTML = "<a href='www.google.com'>GOOGLE</a>";
par[0].innerHTML += "<a href='www.google.com'>GOOGLE</a>";    // silmeden uzerine eklemek icin 


//*-------------------
//*   QUERYSELECTOR()
//*-------------------

// 1 element secer
//nodelist dondurur
//array gibi kullanialbir

document.querySelector('title').textContent = 'js-DOM';

const myPars = document.querySelectorAll("p");

console.log(myPars);

myPars.forEach((p) => console.log(p.innerText));       // bosluklari almaz
myPars.forEach((p) => console.log(p.textContent));       // bosluklari da alir
myPars.forEach((p) => console.log(p.innerHTML));       // kodla birlikte cevirir

//! HTML Collection dan array a cevirmek yontemleri 
//? 1.yontem : array.from
const myPars1 = document.getElementsByClassName('par');

console.log(myPars);   // html collections cevirri, html col. larda array ozelliklerini kullanamayiz . bu nedenle array e ceviriyoruz.
const myParsArray = Array.from(myPars1);  // array e cevirmek
console.log(myParsArray);

myParsArray.forEach((p) => console.log(p.innerText));


//? 2.yontem : spread/rest
[...myPars1].forEach((p)=> console.log(p.innerText));


//*----------------
//*NOT:
// bestpractise de en cok getelementbyid cok kullanilir
// kullanim kolayligindan dolayi queryselector son zamanlarda cok kullanliyor.

//! queryselectir ile css vari secim yapmak mumkundur. ONEMLI BIR OZELLIKTIR.
//! css selectorlarinin hepsini kullanmak mumkun . 
console.log(document.querySelector("section p a")); 
//*----------------

