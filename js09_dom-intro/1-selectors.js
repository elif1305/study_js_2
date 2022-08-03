//* =====================================================
//*                     DOM SELECTORS
//* ======================================================

// DOM
// ➤ The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.

// ➤ The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

// ➤ A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.

// ➤ The DOM represents an HTML or XML document as a hierarchy of nodes. Any node has relationships to other nodes in the DOM tree. The relationships are the same as the one described in a traditional family tree.

// ➤ For example, <body> is a child node of the <html> node, and <html> is the parent of the <body> node.

// The <body> node is the sibling of the <head> node because they share the same immediate parent, which is the <html> element.

// An HTML or XML document can be represented as a tree of nodes, like a traditional family tree.
// Each markup can be represented as a node with a specific node type.
// Element is a specific type of node with the node type Node.ELEMENT_NODE.
// In the DOM tree, a node has relationships with other nodes.

// In a node tree, the top node is called the root.
// Every node, except the root, has exactly one parent node.
// A node can have any number of children.
// A leaf is a node with no children.
// Siblings are nodes with the same parent

console.log('***** SELECTORS *****');


// window => document    window ekrandaki ana sayfadir, document bizim html sayfamiz. buradan elemnetlere erisiyoruz.
//window.document
//document.(id)  ile html icindeki elementlere,taglere vs erisiyoruz.

//nodelist array ozelliklerini kullanmaay izin veriyor.

// Accessing DOM
// ➤ We have some methods to access the elements inside html document. These methods belong to Element object of the DOM

// getElement... methods -> these methods belong to document object of the DOM
// documentgetElementById()
// getElementsByClassName()
// getElementsByName()
// getElementsByTagName()

//*-------------------
//*   GETELEMENTBYID()
//*-------------------

// her zaman bir tane dondurur . id ler uniquedir.
// en hizli calisan metoddur. cok kullanilr.

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
par[0].innerHTML += "<a href='www.google.com'>GOOGLE</a>";    //! silmeden uzerine eklemek icin 


//*-------------------
//*   QUERYSELECTOR()
//*-------------------

// 1 element secer, ilk gordugunu alir.
//nodelist(dizi gibi dusunebliriz.) dondurur
//array gibi kullanialbir, butun yontemlerin kullanimina izin verir.
// 3tur secim yapilabilir.
// 1- # ile id 
// 2- . ile class
// 3- bos kalirsa tag name gore secer

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
// daha kisadir

[...myPars1].forEach((p)=> console.log(p.innerText));


//*----------------
//*NOT:
// bestpractise de en cok getelementbyid cok kullanilir
// kullanim kolayligindan dolayi queryselector son zamanlarda cok kullanliyor.

//! queryselectir ile css vari secim yapmak mumkundur. ONEMLI BIR OZELLIKTIR.
//! css selectorlarinin hepsini kullanmak mumkun . 
console.log(document.querySelector("section p a")); 
//*----------------

