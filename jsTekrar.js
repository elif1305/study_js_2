//! LESSON 1

// -> ENVIRONMENT

// Generally there are 3-4 distinct phases;
// 1- development  ( BIZIM CALISACAGIMIZ YER)
// 2-testing
// 3-staging(could be combined with testing)
// 4-production   ( canliya cikmasi, urun haline getirilmesi)

// -> JS NEDIR?

// dili icat eden: brendan eich (10 gunde)
// JS is highlevel , cross-platform
// high-level : bellek yonetimi hususlari ile ugrasilmiyor, programlamayi kolaylasitiriyor
// cross-platform : her ortamda her browserda calisir, telefonda bilgisayarda , tablette
// object orianted : 
// dynamism saglar
// object orianted computer programming language
// ilk adi mocha
// js is used to create client-side dynamic pages
// its also one of the core technologies of the web, along with HTML and CSS .

// NOT : JS IS VERY CASE SENSITIVE !!  

// What is Javascript?
// ➤ JavaScript is a high-level, cross-platform, object-oriented computer programming language.

// JavaScript was developed by Brendan Eich, a developer at Netscape, in 1995. 
// It is a scripting language executed by browsers, and used with HTML to develop responsive webpages.

// ➤ JavaScript is the most commonly used to create client-side dynamic pages.

// ➤ Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that 
// has a special program called the JavaScript engine.


// -> ECMAScript 2015 (ES6)

// Standart kurallardir.
// ECMA( European Computer Mnufacturers Association) nin olusturudugu standartlardir.
// is a scripting language specification intended to standardize JS.
// JS icin es6 kirilma noktasidir.
// <head> e de ekleneblir.
// NOT : body nin en sonuna eklenmesi tavsiye edilir.(kapatma body taginin hemen ustune.)

// ECMAScript 2015 (ES6)
// ➤ ECMAScript (ES) is a scripting language specification intended to standardize JavaScript.

// ➤ ECMAScript 2015, which is also known as ECMAScript 6 and ES6, 
// is the sixth edition of the ECMAScript Language Specification standard.

// ➤ ES6 provides a new set of features and fixes to JavaScript.

// ★ We’re going to dive into what' difference between ES6 and predecessors.

// 🎗️ Commonly Asked Questions:
// How do I get JavaScript?
// Where can I download JavaScript?
// Is JavaScript Free?

// You don't have to get or download JavaScript.
// JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone.
// Free to use for everyone.

// -> JSON 

// JS OBJECT NOTATION : bir datayi js imsi tarif ettigimiz dosyaya denir.
// internette cok kullanilan bir formattir. veri aksiinda kolaylik saglar.
// sunucu ile frontend backend arasinda haberlesme json ile daha kolay oluyor.

// -> console u acma yontemleri:
// 1.yontem : F12
// 2. yontem : Browserda saga tikla, inspect
// 3. yontem : ctrl +  shift + i

// -> prompt
// kullanican veri almak icin

// -> confirm
// yes no sorusu icin, veya herhangi bi soru icin

// -> Comments
// single line:  //
// multi line : /*  */

// Interaction
// There are different ways to "display" data in JavaScript.

// ➤ console.log().

// console.log() will be your best friend on front-end programming.

// ➤ document.write().

// ➤ window.alert().

// ➤ window.prompt().

// ➤ window.confirm().

// ======================
//   VARIABLES
// ======================

// What is a Variable?
// In computer programming, a variable , either known or unknown, 
// a container for storing data with a given name.

// var, let, const
// rakamla baslamaz,
// const ile tekrar atama yapilamaz
// let ile yapilabilir
// ES6 ile const ve let geldi. ( var in kullanimi artik tavsiye edilmiyor.)

// NOT : casesensitive unutma!
// ⚠️ Warning ! :
// JavaScript is case sensitive. This means that the variables myNumber, 
// mynumber or MYNUMBER are not same variables. 
// All of them are different variables.


// -> Naming rules:
// can use : letters, digits, underscores, dolarsign
// numbers are not allowed as the first character
// first character must be: a letter, an underscore. a dola sign
// must not contain : spaces, math or logical operators
// reserced words can not be used.

// Naming Rules
// The general rules for defining names for variables:

// ➤ Names can composed of letters, digits, underscores, and dollar signs.
// ➤ Numbers are not allowed as the first character.
// ➤ The first character must be;
//    ●a letter
//    ●an underscore ( _ )
//    ●a dollar sign ($)

// ➤ JavaScript names must not contain spaces, mathematical or logical operators.

// ➤ Reserved words cannot be used as names

// Naming Conventions
// ➤The camel case naming convention is widely used in JavaScript.
//  Following that, we'll take a more in-depth look at some of the other conventions.
// ➤PascalCase
// also known as UpperCamelCase or StudlyCase ; is a naming convention in which 
// the first letter of each word in a compound word is capitalized.
// ➤ SCREAMING_SNAKE_CASE
// also known as MACRO_CASE, CONSTANT_CASE; refers to the style of writing 
// in which each space is replaced by an underscore (_) character, 
// and the first letter of each word written in Uppercase.
// ➤ kebab-case
// Similar to snake case, above, except hyphens (-) rather than 
// underscores (_) are used to replace spaces. It is commonly used in CSS.
// ➤ snake_case
// refers to the style of writing in which each space is replaced 
// by an underscore ( _ ) character, and the first letter of each word written in lowercase.
// It is a commonly used for variable and subroutine names, and for filenames in python.


// -> Scope
// Global scope
// Function scope
// Block scope


// -> STACK and HEAP

// Verileri 2 alanda tutar.

// Stack and Heap
// JavaScript doesn’t store all these things at the same place. 
//What JavaScript does instead is it uses two places. These places are stack and memory heap.

// The Stack
// ➤ The stack is a place that JavaScript uses to store only static data. 
// This includes primitive data types values. For example, numbers, strings, booleans, 
// undefined and null. These static data also include references. 
// These references point to objects and functions you’ve created.

// ➤ These data have one thing in common. The size of these data is 
// fixed and JavaScript knows this size at compile time. This also means that 
// JavaScript knows how much memory it should allocate, and allocates that amount.

// There is one important thing about static data and memory. 
//There is a limit to how large these primitive values can be. This is also true for the stack itself.

// The Heap
// ➤ The second place where JavaScript can store data is memory heap. 
// Which data are stored in memory heap? While the stack is a place where JavaScript stores static data, 
// memory heap is a place where JavaScript stores objects and functions. 
// So, remember, when you create with primitives, you are working with static data. 
// JavaScript stores these static data in the stack.


//! LESSON 2

// ===================
//   DATA TYPES
// ====================

// ➤ JavaScript variables can hold numerous data types, such as numbers, strings, booleans, and more.

// ➤ To find the type of a JavaScript variable, we can use the JavaScript typeof operator.

// ➤ Primitive Data Types:

// ● undefined : typeof aValue === "undefined"

// ● null : typeof aValue === "object" (*)

// ● Number : typeof aValue === "number"

// ● String : typeof aValue === "string"

// ● Boolean : typeof aValue === "boolean"

// ● BigInt : typeof aValue === "bigint"

// ● Symbol : typeof aValue === "symbol"

// let aValue;
// console.log("1. " + typeof aValue);
// aValue = null; // beware: null is a value, not a reference
// console.log("2. " + typeof aValue);
// aValue = 42;
// console.log("3. " + typeof aValue);
// aValue = "Clarway";
// aValue = 'Clarway';
// aValue = `Clarway`;
// 👆 3 ways to define a string
// console.log("4. " + typeof aValue);
// aValue = true;
// console.log("5. " + typeof aValue);
// aValue = 1234567890123456789012345678901234567890n;
// console.log("6. " + typeof aValue);
// aValue = Symbol("Clarway");
// console.log("7. " + typeof aValue);
// aValue = { firstName: "John", lastName: "Doe" };
// console.log("8. " + typeof aValue);

// 1. undefined  : tanimlanmis ama deger atamasi yapilmamis demek, hata degildir, veri tipidir.. 
// ( is not defined : bir hatadir, hic tanimlanmadi demek.)
// 2. object
// 3. number
// 4. string
// 5. boolean
// 6. bigint
// 7. symbol
// 8. object

// INTERVIEW :

// console.log(a);
// var a = 3;

// => undefined verir.

// var ile tanimlandiginda bu tanimlar en uste cikar.
// a degeri tanimlanmis ama degeri clg den sonra verildigi icin undefined verir.

// console.log(a);
// let a = 3;

// console.log(a);
// const a = 3;

// => hata verir cunku let ve const ile tanimlanan degerler (var gibi) en uste cikmaz.


// NOT : PROMPTAN ALINAN DEGERLER BIZE HER ZAMAN STRING DONDURUR. !!


// -> NULL

// Primitive data tipi olarak gecer fakat tipine baktigimizda object doner. (js hatasidir)


// -> NUBMBER
// 3.14
// 1300
// 1_000_000

// NOT : isNaN ile number olup olmadigini kontrol edilir.

// NOT : console.log(015 + 025);
// basina 0 koydugumuzda 7lik(octal) sisteme geciyor.
// cevap  34 cikar.

// let num1 = 015;
// let num2 = 025;
// let result = num1 + num2;
// console.log(`result is ${result}`); // result is 34
// num1 = 15;
// num2 = 025;
// console.log(`result is ${result}`);// result is 36
// num1 = 015;
// num2 = 25;
// console.log(`result is ${result}`);// result is 38
// num1 = 15;
// num2 = 25;
// console.log(`result is ${result}`);// result is 40 isn't it weird?
// let numOctal = 0o1234567;

// Hexadecimal;

// let myNumber = 0x5AD;
// console.log(myNumber);
// myNumber equals to 1453 in decimal

// -> STRING

// escape karakter \ 
// kendisinden sonrakini islevsiz yapar.

// -> BOOLEANS
// true, false

// true degerler;
// Boolean("Hello World");
// Boolean(5);
// Boolean(-5);
// Boolean("false");
// Boolean('0');
// Boolean(3.14 + 8);   //All of these values return true

// false degerler,
// 1- bos string '', ""
// 2- 0 degeri
// 3- -0 degeri
// 4- null
// 5- undefined (ornek :  let s; )

// Boolean("");
// Boolean(0);
// Boolean(-0);
// Boolean(null);
// let x;
// Boolean(x);   //All of these values return false


// ===
// OBJECTS
// ===

// js de hersey objedir.
// degerleri heapte tutulur.
// birden fazla veri bir arada tutulablir.

// ➤ Objects in JavaScript, just as in many other programming languages, 
// can be compared to objects in real life. 
// The concept of objects in JavaScript can be understood with real life, tangible objects.

// const myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969;

// myCar['make'] = 'Ford';
// myCar.model = "Mustang";
// myCar.color = 'Red';
// console.log(myCar.color); //Red 


// -> Operators
// Assignment Operators
// Arithmetic Operators
// Comparison Operators
// Logical Operators
// Other Operators


// NaN == NaN  FALSE
// null == null TRUE

// 🎗️ Note:
// The following values are always falsy:
// false
// 0 (zero)
// -0 (minus zero)
// 0n (BigInt zero)
// '', "", `` (empty string)
// null
// undefined
// NaN
// Everything else is truthy:

// '0' (a string containing a single zero)
// 'false' (a string containing the text “false”)
// [] (an empty array)
// {} (an empty object)
// function(){} (an “empty” function)

// null + 3

// = 3 tur

// string ve integer in toplami stringtir.


//! LESSON 3

// =============
// CONDITIONAL STATEMENT
// =============

// 1- IF

// 2- IF ELSE

// // const chest = prompt('beden olcunuzu girin?');

// // const size = +prompt('Enter your chest size');
// // if (size < 32) {
// //   console.log('Wrong Size');
// // } else if (size < 35) {
// //   console.log('XS');
// // } else if (size < 38) {
// //   console.log('S');
// // } else if (size < 41) {
// //   console.log('M');
// // } else if (size < 44) {
// //   console.log('L');
// // } else if (size < 47) {
// //   console.log('XL');
// // } else if (size < 50) {
// //   console.log('XXL');
// // } else {
// //   console.log('Wrong Size');
// // }

// ornek 2

// // Write a JavaScript program that accept three integers and display the greatest.

// // n1 is the greatest among n2 and n3
// // 8 is the g     among 3 and 5
// // const n1 = prompt('Enter a number:');
// // const n2 = prompt('Enter a number:');
// // const n3 = prompt('Enter a number:');

// // if (n1 > n2 && n1 > n3) {
// //   console.log(`${n1} is the greatest among ${n2} and ${n3}`);
// // } else if (n2 > n1 && n2 > n3) {
// //   console.log(`${n2} is the greatest among ${n1} and ${n3}`);
// // } else console.log(`${n3} is the greatest among ${n2} and ${n1}`);

// 3- TERNARY

// NOT: nasted kullanimi tavsiye edilmez.

// CONDITION ? TRUE : FALSE

// CONDITION 
//  ? CODE TO EXECUTE IF TRUE
//  : CODE TO EXECUTE IF FALSE

// ORNEK 1:

// program to check pass or fail
// let grade = prompt('Enter your score :');
// check the condition
// let result = grade >= 50 ? 'pass' : 'fail';
// console.log(`You ${result} the exam.`);

// ORNEK 2:

// const age = 18;
// let result;
// if (age >= 18) {
//  result = 'You are eligible to vote.';
//  } else {
//  result = 'You are not eligible to vote yet.';
//  }

// result = age >= 18 
// ? 'You are eligible to vote.' : 'You are not eligible to vote yet';
// console.log(result);


// ORNEK 3
// NASTED OLARAK DENEME !
// if (n1 > 0) {
//   console.log(`${n1} is positive`);
// } else if (n1 < 0) {
//   console.log(`${n1} is negative`);
// } else {
//   console.log(`the number is  0`);
// }

// const n1 = 0;
// const result = n1 >= 0 ? (n1 == 0 ? 'zero' : `${n1} is positive`) : 'negative';
// console.log(result);
// ! evde denemeyiniz !!

// 4- SWITCH CASE

// pazartesi salı çarşamba perşembe in class
// cuma team work
// cumartesi inclass + workshop
// pazar self study
// default yanlış gün girildi.

// const day = prompt('enter a day: ').toLowerCase();

// switch (day) {
//   case 'monday':
//   case 'tuesday':
//   case 'wednesday':
//   case 'thursday':
//     console.log(`Inclass`);
//     break;
//   case 'friday':
//     console.log(`Teamwork`);
//     break;
//   case 'saturday':
//     console.log(`Inclass and workshop`);
//     break;
//   case 'sunday':
//     console.log(`Self study.`);
//     break;
//   default:
//     console.log(`${day} is not a day.`);


// ORNEK 2

// // output day count of a month of given year 2020 02 => 29
// // 2022 02 => 28

// //leap year
// let year = 2020;
// let month = 1;
// let dayCount;
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     dayCount = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     dayCount = 30;
//     break;
//   case 2:
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) dayCount = 29;
//     else dayCount = 28;
//     break;
//   default:
//     dayCount = -1; // invalid month
// }

// console.log(dayCount); // 29

//! lESSON 4

console.log('****** LOOPS *******');

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************
// Math.floor() =>aşağıya yuvarlar
// Math.ceil() =>sürekli yukarıya yuvarlar
// Math.round() => değerine göre yuvarlar.
// Math.trunc() => kesirli sayının tam kısmı alır.

// for dongusunun icine girilmesi icin kosulun dogru olmasi gerekir.
// adedi belli ise , sayisi belli olanlarda for kullanimi daha uygundur.


// for (let i = 1; i <= 10; i++) {
//   const randomSayi = Math.floor(Math.random() * 100 + 1);
//   console.log(randomSayi);
// }

// console.log('Program bitti');

// //? Ornek: 1 den n kadar sayıları toplayan kodu yazınız.

// const n = prompt('n sayisini girinz:');
// let toplam = 0;
// for (let i = 1; i <= n; i++) {
//   toplam += i;
// }

// console.log('Toplam:', toplam);

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

//******************** WHILE ******************


// let i = 1;
// while (i <= 5) {
//   console.log('Merhaba-', i);
//   i++;
// }

// console.log('Bitti');



// let not = prompt('Lutfen notunuzu giriniz (0-100):')

// while(not<0 || not>100){
//   console.log('Girdigniz not 0-100 arasinda olmalidir.');
//   not = prompt('Lutfen notunuzu giriniz (0-100):')
// }
//  console.log("girdiginiz not", not);


//********** DO-WHILE **********/

// let i = 1:

// do{
//   console.log('merhaba-', i)
//   i++
// } while('i <= 5')


// let not = 

// do{
//   not = prompt('Lutfen notunuzu giriniz (0-100):')

// }while(not<0 || not>100){
  
// }
//  console.log("girdiginiz not", not);

/*
1. hak = 5
2. rastgele sayi tut(0-100)
3. kullanican tahmini al
4. hak = hak -1
5. eger tahmin esit ise restgele sayiya, print(tebrikler)
 eger tahmin esit degil ise restgele sayiya,
          egertahmin < rastgele sayida print(arttir)
          eger tahmin > rastgele sayi print(azalt)
6.  eger hak > 0 ise kullanicidan tahmin al
  degilse print(uzgunum oyun bitti) 
 */


  // let hak = 5

  // const rastgeleSayi = Math.floor(Math.random()*100 +1)

  // do{
  //   const tahmin = prompt("lutfen 0-100 arasinda bir sayi giriniz")
  //   hak -= 1;
  //   if (tahmin === rastgeleSayi){  /*buraya === konuldugu icin promtu number yapmamiz gerekiyor. cuku promtan gelen deger stringtir. === bu tipininde degerinin de esitolmasi demektir. bunu yapmazsak sonucu yanlis buluruz. */
  //     console.log(`tebrikler ${5-hak} denemede bildiniz`);
  //     break;
  //   }else{
  //     console.log(`dikkat ${hak} hakkiniz kaldi`);
  //     if(tahmin< rastgeleSayi){
  //       console.log("arttir");
  //     }else{
  //       console.log("azalt");
  //     }
  //   }
  // } while(hak > 0)



    //  console.log(isNaN("Hello")) 
    //  console.log(isNaN(345)  ) 
    //  console.log( isNaN('1')  )
    //  console.log( isNaN(true) )
    //  console.log( isNaN(false))
    //   console.log(  isNaN(undefined) )

    //! LESSON 5

    


//! 1.YONTEM //
// 1- fonksiyonun declarasyonu
// 2- invoking (cagirma)

yazdir()  // invoke  , declerationdan oncede yazilsa calisir, hata vermez.buna hoisting denir.

// parametra almamis bir sey dondurmemis.bir sey dondurmeyen fonksiyonlara bu fonksiyonlara (void function) denir.
function yazdir(){  // decleration
    console.log("Merhaba");
}

yazdir()  // invoke

console.log(typeof yazdir); // tipi function

//************************************************************ 

//* ornek 2 : PARAMETRIK FONKSIYON //

// function sayHi(name,surname = 'noname')  //default parametre , bu eger surname verilmezse default olarak noname yaz demek.
function sayHi(name,surname = ''){ 
    console.log(`Hello ${name} ${surname}`);
}

sayHi("Ella", "Bella")
sayHi("Jhonson")
sayHi("Love")

//************************************************************ 

//* ornek 3 : PARAMETRELI, DONUS DEGERLI
 
// OUTPUT : calculateAge(2001, "Ella"),Ella is 21 years old.


function calculateAge(year, name){
    const result = new Date().getFullYear() - year      // new Date().getFullYear()  guncel yili almasi icin
    console.log(`${name} is ${result} years old.`);
}

calculateAge(2001, "Ella")


// OUTPUT : calculateWorkingYear(1980, "Pawel") . Pawel has been working 42 years.

// function calculateWorkingYear(year, name){
//     const resulttwo = new Date().getFullYear() - year
//     console.log(`${name} has been working ${resulttwo} years.`);
// }

// calculateWorkingYear(1980, "Pawel")


// OUTPUT : tekcift(5), 5 tektir
   //       tekcift(2), 5 cifttir

// function tekcift(number){
//    return number % 2 === 0  ?  `${number} cifttir.` : `${number} tektir`                    // ternary , ? = ise , if 
// }

// console.log(tekcift(5));                // return ile dondurerek daha sonrada cagirabliriz.


// function tekcift(number){
//     number % 2 === 0  ?  `${number} cifttir.` : `${number} tektir`                    // ternary , ? = ise , if 
//  }
 
// tekcift(5);

//! 2.YONTEM : FUNCTION EXPRESSION //

// 1. Yontemden tek farki bir degiskene ataniyor olmasi.
// bu yontemde once tanimlama yani decleration yapilmali.


//* Ornek 1

// OUTPUT : tekcift(5), 5 tektir
//          tekcift(2), 5 cifttir

// console.log(tekcift(5));  //Uncaught ReferenceError: Cannot access 'tekcift' before initialization at 2-funtionExpression.js:12:13   = yani once tanimlama yap sonra cagir diyor.

const tekcift = function(number){  // mumkunse const kullanmaya gayret et, asagida tekcift=5 dediginde hata vermesin diye
    return number % 2 === 0  ?  `${number} cifttir.` : `${number} tektir`                    // ternary , ? = ise , if 
 }
 
 console.log(tekcift(5));  
 
 
 //* Ornek 2 : 3 sayinin en buyugunu bulun
 
 
 const buyukBul = function(x,y,z= -Number.MAX_VALUE){  // EN BUYUK SAYIYI BULMAK ICIN, NEGATIFNI BULMAK ICIN DE BASINA - KOYDUK.
     let enBuyuk;
     if(x>=y && x>=z){
         enBuyuk = x;
     }else if(y>=z && y>=x){
         enBuyuk = y;
     }else if (z>=y && z>=x){
         enBuyuk = z
     }else{
         enBuyuk = x;
     }
     return enBuyuk
 }
 
 console.log("En buyuk sayi:", buyukBul(1,2,3));
 console.log("En buyuk sayi:", buyukBul(8,5,6));
 console.log("En buyuk sayi:", buyukBul(9,9,3));
 console.log("En buyuk sayi:", buyukBul(8,9,9));
 console.log("En buyuk sayi:", buyukBul(8,9)); // burada hata vermesin diye , default deger veririz
 console.log("En buyuk sayi:", buyukBul(8,-9));
 console.log("En buyuk sayi:", buyukBul(-8,-9));  // const buyukBul = function(x,y,z=0) burada hata vere bu nedenle degistirdik
 
 
 //*ORNEK 3
 //function icinde function ornegi
 
 const hesapla = function (islem, s1, s2) {
     let sonuc;
     if (islem == "+") {
       sonuc = topla(s1, s2);
     } else if (islem == "-") {
       sonuc = cikar(s1, s2);
     } else if (islem == "*") {
       sonuc = carp(s1, s2);
     } else if (islem == "/") {
       sonuc = bol(s1, s2);
     }
     return sonuc;
   };
   const topla = function (s1, s2) {
     return s1 + s2;
   };
   const cikar = function (s1, s2) {
     return s1 - s2;
   };
   const carp = function (s1, s2) {
     return s1 * s2;
   };
   const bol = function (s1, s2) {
     return s1 / s2;
   };
 
 console.log(hesapla("+", 7, 5));

 //! 3.YONTEM : ARROW FUNCTION

//ozellikle tek satirlik islemlerde cok kullanilir
// otomatik return yapar (suslu parantez kullanilmadiysa)
// suslu kullandipimiz zaman return gerekir.

//* ornek 1

// const topla = (x, y) => x + y;  // otomatik return yapar ,
// // const usAl = (t, u) => t**u;



// const usAl = (t, u) => {   // suslu kullandipimiz icin return gerekir
// return t**u;
// }

// console.log(topla(7,7));
// console.log(usAl(2,4));

// const menu = () =>console.log("==============");  // asagidaki clg ler menu fonksiyinuna dahil degildr.burada anlatilmak istenen birden fazla iifade varsa suslu icine alinmasi grekir.

// console.log("js cok kolaymis");
// console.log("===============");

// menu()

//* ornek 2

// const tekMi = (n) => n % 2 == 1 ? 'TEKTIR' : 'CIFTTIR'  
const tekMi = (n) => n % 2  ? 'TEKTIR' : 'CIFTTIR'     // tek bir ifade ,suslu paranteze gerek yok yani return e de gerek yoktur. ayrica ? den once == 1 yazmasaksa false gorecegi icin cevirir. (undefined, null, NaN, 0, "" => false degerlerdir.)

console.log(tekMi(3));


//*ornek 3

const r = prompt('yaricapi giriniz');
const h = prompt('yukseklik giriniz');

const hacimHesapla = (r,h) => Math.PI * r * h * r ;

console.log('silindirin hacmi:', hacimHesapla(r,h).toFixed(3));  // tofixed(3) virgulden sonra 3 basamak al demek
console.log('silindirin hacmi:', Math.trunc(hacimHesapla(r,h), 2));

//! LESSON 6

// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log('******* STRING METHODS ********');

// gelen bilgiler default string kabul edilir. bu nedenle cok onemlidir. html ilk ciktigi yillarda html de sadece veri olarak textler verdi daha sonrasinda resim,video vs eklnedir. bu nedenle webin temeli stringe dayanir.

//! Klasik yontem ile string tanimlanirsa bu string primitive degiskendir.
//genelde kullanialn yontemdir. daha hizlidir.
// bu yontem ile de yanina nokta konulunca metodlari kullanilablr. js tasarimcilari tarafindan gelistirien object wrapper lar ile yanina nokta koyarak 1. yontem ilede erisim yapabbliyoruz.

const str1 = "Hello "
const str2 = "Love "
const str3 = "hope"

console.log(typeof str1);

const str4 = str1 + str2  // string concat
console.log(str4);

// str4. normalde boyle primitive veri tiplerini yanina nokta (.) kondugu zaman yanina metodlar cikmaz. fakat js de bu metodlara erisim vardir.
// Normalde primitive veri tiplerinin property veya metodu olmaz.
// Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
// Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
// primitive string ile kullanılabilir hale gelir.
// Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

console.log(str4.concat(str3));


//!Non-pirimitive string tanimlama
const str5 = new String("Non-primitive string")   // buradaki string bir objedir.

console.log(str5, typeof str5);

//? ek bilgi icin : https://developer.mozilla.org/en-US/docs/Glossary/Primitive
//? Ek Açıklama için: https://javascript.info/primitives-methods


//* ----------------------------------------------------------
//*  concat() - immutable (orjinallik bozulmaz)
//* ----------------------------------------------------------

const s1 = "hello";
const s2 = " world";
const s3 = s1.concat(s2);
console.log(s3);

console.log(s3.concat('how are you', s2, 'hi'))
console.log(s2, s3);
//* ----------------------------------------------------------
//* charAt() : string icerisindeki herhangi bir elemanin degerini getirir.
//* ----------------------------------------------------------

console.log(s3.charAt()); // default 0 kabul eder. eger rakam belirtilmezse.
console.log(s3.charAt(4));
console.log(s3.charAt(3));
console.log(s3.charAt(8));

console.log(s3.charAt(s3.length - 1));  // "d" .    length bir property dir.


//* ----------------------------------------------------------
//* includes() - case senstivi
//* ----------------------------------------------------------

const word = 'To be or not to be, that is the questions';

console.log(word.includes('to be')); //! true
console.log(word.includes('that')); //! false
console.log(word.includes('')); //! true : bos string, null karakter. true kabul eder cunku derleyiceler kaydederken her bir karakterden sonra null (/) koyar. bu nedenle her bir char dan sonra null karakteri oldugu icin true cikar. 

// surdan sonrasinda var mi demek icin :
console.log(word.includes('to be', 10)) // true
console.log(word.includes('to be', 14)) // false


//* ----------------------------------------------------------
//* indexOf() , lastIndexOf() - case senstive: su degere sahip olan index i ver , indexi veren property
//* ----------------------------------------------------------

const tobeIndex = word.indexOf('or');
console.log(tobeIndex);
console.log(word.indexOf('be'));  // 3. Ilk nerde gorduguni verir
console.log(word.lastIndexOf('be'));  // 16.  son nerde gordugunu verir
console.log(word.lastIndexOf('BE'));  // -1  olmadigi zaman -1 dondurur. bir fonksyion negatif bir deger donduruyorsa aranana yok demekir.The reason it returns -1 instead of “false” is that a needle at the beginning of the string would be at position 0, which is equivalent to false in Javascript. So returning -1 ensures that you know there is not actually a match.

//* ----------------------------------------------------------
//* startsWith() -  , endsWith()  - case senstive
//* ----------------------------------------------------------


const word2 = 'Salina salina gel !'

console.log(word2.startsWith('sa')); // false cunku s buyuk harf olmali, 
console.log(word2.startsWith('Sa')) // EN BASINA BAKAR (0. ELEMENTE)
console.log(word2.startsWith('sa', 7)) // 7den sonra bak dedigimiz icin true cevirir
console.log(word2.endsWith('!')); // true 


//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith)  - immutable
//* ----------------------------------------------------------

// const read = " read and read thats bad"
// console.log(read.replace('bad', 'good'));

// console.log(read);

let read = " read and read thats bad"
console.log(read.replace('bad', 'good'));

console.log(read); // immutable yapiyi bozmak icin yeniden atama yapmak gerekir.

//detayli degistirme alternatifi icin regex kullanilablir.

console.log(read.replace(/READ/i, 'write'));


//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated) (kaldiriliyor , kullanma)
//* ----------------------------------------------------------

const veysel = 'Uzun ince bir yoldayim yuruyorum gunduz gece..'

const sliced = veysel.slice(33) // tek sayi yazilirsa bundan o sayidan baslar sonuna kadar gider.
console.log(sliced, typeof sliced);

console.log(veysel.slice(17, 30)); // dayim yuruyor 30u dahil etmez
console.log(veysel.slice(-10)); // duz gece..  tersten baslar .
console.log(veysel.slice(-23, -19)); // yuru

// tersten yazdirmak icin ; .split().reverse()

console.log(veysel.substring(17, 30)); //  negatif index substring ile kullanilmaz


//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------

const tarkan = "Gel gunduzle gece olalim";
const splited = tarkan.split(" ")  // bosluklara gore ayirdi ve listeye(array e) cevirdi.

console.log(splited, typeof splited) ; // object yani nesne. js de her seyi bir obje olarak dusunebliriz.

const gece = splited[2]  // indexleme ile deger okunablir.
console.log(gece);

const chars = tarkan.split("") // null karakterlerine gore harfleri ayirarak bir char dizisi(liste, array) olusturdu.
console.log(chars)

const copyTarkan = tarkan.split();
console.log(copyTarkan); // string i array haline getirdi. tek elemanli.    = ['Gel gunduzle gece olalim']

//* HOMEWORK
// uzun linki kisa linke cevir.

// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE

//* ----------------------------------------------------------
//* trim();  bastaki ve sondaki bosluklari kaldirir.
//* ----------------------------------------------------------

const sOrtac = '   olene kadar asik olamazsin    '

console.log(sOrtac);
console.log(sOrtac.length);

console.log(sOrtac.trim());
console.log(sOrtac.trim().length);

// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

console.log('***** ARRAYS ******');

//* Dizi Tanımlama
//* ---------------------------------------------------------

// primitive degiskenler normalde stack te tutulur, diziler bellekte , referansi stackte tutulurken icindekiler heap te tutulur. ornek ; names stackte icindeki john , jack vs heap te tutulur. const ile de olsa icine eleman ekleyip degistirebliriz. ama diziyi tamamen degistirmeye izin verilmez.  peki neden hepsi stacte veya heapte tutulmamis? cunku  stack in kapasitesi sinirlidir.  hizli calisir ama kapasitesi sinirlidir. stackin calisma mantigi son giren ilk cikar. 

//! 1. yontem (Array literal) -  tercih edilen yontem
const names = ['john', 'jack', 'james', 'janet']
console.log(names);
console.log(names.length); // 4


//! 2. yontem (object constructor) 

const diller =  new Array('Python', 'Java', 'C++', 'JS');

console.log(diller);

const numbers = new Array(3,2,1);
console.log(numbers);

const sayilar = new Array(10); //bellekte 10 elemanli bir yer ayiriyor.
console.log(sayilar);

//* Diziden veri okuma - yazma
//* ---------------------------------------------------------


// okuma
const java = diller[1]
console.log(java);

//yazma

names[2] = 'ella';
console.log(names);


// hata const keywords ile tanimlanmis bir diziyi tamamiyle bir atama yapilamaz.

// names = ['can', 'ali']  //Uncaught TypeError: Assignment to constant variable.


const yaslar = [22, 18, 15]

const kisiler=['ahmet', 'mehmet', 'ali', yaslar]
console.log(kisiler);

console.log(kisiler[3][2]);

//---

const sonYas = kisiler[3][2]++ ; // bu degerini bi arttir demek, + sonda olursa ayri basta olurda ayri anlami vardir.arti sonda olursa once kullan sonra attir demek , basta olursa once arttir sonra kullan demek
console.log(sonYas, kisiler);


//? DIZIYI DEGISTIREN (MUTETOR) METODLAR
//?-------------------------


//* pop sonelemani siler ve sildigi elemani dondurur
const cars = ['BMW', 'Porche', 'Nercedes', ' Fiat']

const deleted = cars.pop()
console.log(cars, 'Silinen:', deleted);

//* push dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur. 
const n = cars.push('volve');
console.log(cars, n); 


//* unshift dizinin 0. indexine eleman ekler ve dizinin son eleman sayisini dondurur
const boyut = cars.unshift('Audi');
console.log(boyut, cars);

//* shift dizinin 0.indeks elemanini siler ve silinen elamani dondurur
const silinen = cars.shift();
console.log(silinen, cars);


//* dizinin tamamini ters siraya cevirir.
console.log(cars.reverse());


//* sort siralama yapar, alfabetik olarak siralar

console.log(cars.sort()); // buyuk kucuk harf, sayilr olursa siralama karisir, dogru olmaz.

const rakamlar = [3,5,1,10,55]

console.log(rakamlar.sort());

cars.splice(1, 0, 'vosvos'); // araya ekler. 1. indekse vosvos ekler, eleman sayisi bir artar
console.log(cars);

cars.splice(2, 1, 'anadol'); // 2. indextekini degistirir. eleman sayisi artmaz .
console.log(cars);

//! LESSON 7

//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log('******* LOOPS IN ARRAYS ******');

// react ta cok kullanilan bir konudur.ONEMLI!

const islemler = [-3000, 4500, -2200, -6000, 9000]             
let yatirma = 0;
let cekme = 0;
const islemlerToplami = () => {               // 3.yontem (arrow) ile function yazma 
    for(let i=0; i<islemler.length(); i++){           // burada = kullanirsak eleman sayisini 1 artrimis oluruz o nedenle kullanmadik
        if(islemler[i]>=0){
            yatirma += islemler[i]
        }else{
            cekme += islemler[i]
        }
    }    
    return `Toplam Yatirma: ${yatirma}, Toplam Cekme: ${-cekme}`            // cekmenin onune - konmasinin nedeni sonucu pozitif olarak almak icin. x-1 de yazilablirdi.                  
}


console.log(islemlerToplami());



//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrncileri aramamızı sağlayacak ve aranılan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//*  fonksiyonu yazınız. Eğer aranılan isimde bir ogrenci yok ise
//* fonksiyon aranılan ogrenci bulunamdı dondurulmelidir.
//*--------------------------------------------------------


const ogrenciler = [
    "ahmet",
    "mehmet",
    "ismet",
    "saffet",
    "ahmet",
    "nur",
    "can",
    "nur",
    "mehmet",
    "cem",
  ];


  const ogrenciBul = function(isim){           // 2.yontem ile fonction yazmak
    let sayac = 0
    for (i in ogrenciler){
        if(ogrenciler[i]===isim){
            sayac++;                        // bu ornekte ++, =+ veya += ucude olurdu, cunku sonrasinda sayac degiskenini kullanmayacagiz
        }
    }
    if (sayac === 0){
        return `${isim} bulunamadi`;
    }else{
        return `${isim}, ${sayac} adet bulundu.`;
    }
  }

  let ogrIsim = prompt('Ogrenci adini giriniz:').toLowerCase()    // kullanici buyuk harf girsede kucuk yapmak icin tolowercase fonk. yazildi
  console.log(ogrenciBul(ogrIsim));




//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.



  const ogrenciBulForOf = function(name){          // name,isim veya baska bise yazilmasinin onemi yok , cunku referansi gidiyor
    let sayac = 0
    for (let ogrenci of ogrenciler){
        if(ogrenci === isim){                       // name,isim veya baska bise yazilmasinin onemi yok , cunku referansi gidiyor
            sayac++;                          // ogrenci === isim ? sayac++ : null ; ternary  
        }                                      //  ogrenci === isim && sayac++ ;  shortcut- circuit yontemi  && = kosul dogru ise ifadeyi calistirir
    }                                            // ogrenci === isim || sayac++ ;  shortcut- circuit yontemi  || = kosul yanlis ise ifadeyi calistirir
    
    //  return sayac ? `${isim}, ${sayac} adet bulundu`: `${isim} bulunamadi `;    // sayac varsa : `${isim}, ${sayac} adet bulundu` bunu dondurur
    //  return !sayac ? `${isim} bulunamadi`: `${isim}, ${sayac} adet bulundu.`;   // sayacin basindaki unlem olumsuzluk icin yani sayac yoksa : `${isim} bulunamadi` bunu dondur demek.
    //  return sayac ===0 ? `${isim} bulunamadi`: `${isim}, ${sayac} adet bulundu.`;   // bi ustteki unlemli hali , yada === 0 yazarakta ayni seyi yazabliriz.


    if (sayac === 0){
        return `${isim} bulunamadi`;                   // name,isim veya baska bise yazilmasinin onemi yok , cunku referansi gidiyor
    }else{
        return `${isim}, ${sayac} adet bulundu.`;                 // name,isim veya baska bise yazilmasinin onemi yok , cunku referansi gidiyor
    }
  }

  let name = prompt('Ogrenci adini giriniz:').toLowerCase()    // kullanici buyuk harf girsede kucuk yapmak icin tolowercase fonk. yazildi
  console.log(ogrenciBulForOf(name));   // name veya baska bise yazilmasinin onemi yok , cunku referansi gidiyor

  //! yukardaki ornekle catismaz cunku yukarisi ayri bir alan olarak dusnuyor. tanımladığımız değerler fonksiyonun içinde geçerli diğer yazdığımız hiç bir kod satırını etkilemiyor.

  // false degerler ; 0,Nan, false, undefined,null, ''


//* ======================================================
//*                   FOREACH METHOD
//* ======================================================



// foreach icine parametre olarak fonskiyon alablir.

console.log('****** ITERATION **********');
//*Dizideki herbir fiyati konsola bastiriniz.

const fiyatlar = [100, 250, 50, 89];

fiyatlar.forEach(yazdir) 


function yazdir(value){          // value yerine ne istersek yazabliriz. x,y,z,i....
    console.log(value);
}

console.log('*********************');


fiyatlar.forEach((value)=> console.log(value));  // yukaridakinin kisa hali , arrow function kullanilarak

//** Fiyatlar dizisindekilerin toplamini yazdirniz */

let toplam = 0
fiyatlar.forEach((fiyat)=> (toplam += fiyat ));
console.log('Toplam;', toplam );


//! not ; foreach metodu void bir metottur.Yani herhagi bir deger dondurmez.


//* Ornek ********************/

let toplam1 = 0;
fiyatlar.forEach((deger, indis, dizi) =>{                  // (value,index,array) bu sira onemlidir.value zorunludur. digereri istege bagli.
    toplam1 += deger
    console.log(`${indis}. iterasyon toplami; ${toplam1}`); 
    dizi[indis] = deger + 10;    // dizi yi gormek icin yazildi. 
})                    


//*-------------- ÖDEV 1------------------
//* fiyatlar dizisinde her bir fiyata %10 zam yapalım.

//? NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

fiyatlar.forEach((fiyat, indis, dizi) => {
  dizi[indis] = Math.round(fiyat * 1.1);
});
console.log('**** ODEV1 *****');
console.log(fiyatlar);


//* ======================================================
//*                       MAP METHOD
//* ======================================================

//KAC ELEMAN GIILIRSE O KADAR ELEMAN DONDURRU.
// orjinal dizinin kopyasiin alip modifiye eder.
// return eden bir fonksiyondur.

//*-------------- ÖRNEK -------------------
//* isimler dizisin içerisindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const isimler = [
    'Ahmet',
    'mehmet',
    'ismet',
    'SAFFET',
    'Can',
    'Canan',
    'Cavidan',
  ];
  
  console.log(isimler);
  console.log(isimler.map((isim) => isim.toLocaleUpperCase()));
  
  const kucukIsimler = isimler.map((isim) => isim.toLowerCase());
  console.log(kucukIsimler);

  //*-------------- ÖRNEK -------------------
  const buyukIsimler = isimler.map((isim,i, dizi)=>{
      dizi[i] = isim.toLocaleLowerCase();  // orjinal diziyi degsitirdik.
      return isim.toLocaleUpperCase(); // burada orjinal diziyi buyukharfle yazdik
  }) ;
  console.log(buyukIsimler);


    //* chaining - pipeline
    //*-------------- ÖRNEK -------------------
    // isimler dizinin her br elemanin ilk harfinin buyuk yapip sonra yazdir

    // isimler.map().forEach()    // bu sekilde arka arkaya yazilablir 

  // tum isimleri buyuk harfe cevirip konsola yaziniz.
  isimler
  .map((isim)=> isim.toLocaleUpperCase())
  .forEach((name)=> console.log(name));

  //*map() metodudn sonra eger foreach() gibibir terminal (consumer)islemi kullanilirsa yazilan ifade bir dizi donrudmemis olur. yani foreach kullandiktan sonra map kullanmak istenirse olmaz. cunku foreach kapatir.


//* ======================================================
//*                       FILTER METHOD
//* ======================================================
// dondurulen dizi sayisi degisir.

    // ahmet olanlarisecip buyuk harfe cevirip konsola yaziniz.
  isimler
  .filter((x) => x === "ahmet")
  .map((x) => x.toLocaleUpperCase())
  .forEach((x) => console.log(x));     // bunlarin yeride degisik olablir.

  //* Fiyatlar arryindaki fiyati 250 tl den az olanlari ayri bir diziye saklayin.

  const kucuk250 = fiyatlar.filter((f)=> f < 250)
  console.log(kucuk250);

  //!ÖDEV2:fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.
console.log('**** ODEV2 *****');
fiyatlar.filter((f) => f > 90).forEach((f) => console.log(f));

//! ÖDEV3: fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.
console.log('**** ODEV3 *****');
fiyatlar
  .filter((f) => f < 110)
  .map((f) => Math.round(f * 1.1))
  .forEach((f) => console.log(f));

  //! ÖDEV4: maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.
console.log('**** ODEV4 *****');
const maaslar = [3000, 5000, 4000, 6000, 6500];

const zamliMaaslar = maaslar.filter((m) => m < 4000).map((m) => m * 1.5);
console.log(zamliMaaslar);

//! ÖDEV5:Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.
console.log('**** ODEV5 *****');
maaslar.filter((m) => m > 4000).forEach((m) => console.log(m));

//! ÖDEV6: Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.
console.log('**** ODEV6 *****');
//? REDUCE ILE
const toplamMaas = maaslar.reduce((x, y) => x + y, 0);
console.log(toplamMaas);

//? FOREACH ILE
let toplamMaas1 = 0;
maaslar.forEach((maas) => (toplamMaas1 += maas));
console.log(toplamMaas1);

//* ======================================================
//*                       REDUCE METHOD
//* ======================================================

//* maas toplamini bulunuz.
const toplamMaas = maaslar.reduce((t, m) => t + m, 0);  // buradaki 0 => toplamMaas in baslangic degerini gosterir. oraya 0 yazilmasa da onemli degildir.
console.log('TOPLAM MAAS:', toplamMaas);

//* maasi ortalamanin altinda olanlara %20 zam yapalim.

// ! lesson 7

//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sıralı bellek bölgeleridir. Dolayısıyla bu bölgelere indeksleme ile erişebiliriz.
//? Ancak daha karmaşık veri yapısı (unstructured)ihtiyaçalrımız için Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapısı kullanılır.
//? Herhangi bir veriyi erişmemk için property (key) adı kullanılır.

console.log("******* Objects *********");

// objelere erismek icin (key.value)seklinde erisiyoruz.
// arraylerde indisleme ile erisiyorduk.

//! 3 farkli yontem ile object olusturulablir.

//* -----------------------
//* 1- object() classindan new operatoru ile
//* -----------------------

const araclar = new Object();
araclar.marka = "BMW";
araclar.motor = 1.3;
araclar.model = 2022;

console.log(araclar);
console.log(araclar.motor);  // . notasyonu bize 1.3  u verir
console.log(araclar['model']); //  square bracket notasyonu ,  2022 degerini getirir

//* ---------------------------------------------------------
//* 2- object constructor'ı kullanarak (OOP ile ayrıntılandırılacak)
//* ---------------------------------------------------------

//* Object constructor
function Personel(id, ad, maas) {           // ilk harfi bestpractise olarak buyuk yazilir
    this.perId = id;                        // buradki this aslinda Personel demek, yani Personel objectinin id sine id parametresi ile girilen degeri ata
    this.perAdi = ad;
    this.perMaas = maas;
    console.log(this); //! Personel objesine bağlanmıştır (binded)
  }
  
  const ahmet = new Personel(101, "Ahmet", 75000);
  const canan = new Personel(102, "Canan", 85000);
  console.log(ahmet, canan);
  console.log(canan.perMaas);
  console.log(ahmet.perAdi);
  console.log(this); //! window objesine bağlanmıştır


  //* ---------------------------------------------------------
//* 3- object literal (en cok tercih edilen yontem)
//* ---------------------------------------------------------

const calisan = {
    ad : "Ella",
    soyad : "jhonson",
    yas : 30,
    is : "developer",
    diller : ['c', 'c+', 'python', 'js'],
    maas : 120000,
}

console.log(calisan);
console.log(calisan.yas);
console.log(calisan.diller);
console.log(calisan.diller[3]);
//! console.log(calisan[1]); // boyle bise olamaz, bu bir dizi degil , ve klasik indisleme ile erisim olmaz. objenin elemanlari direk olarak indisleme erisim olamaz.

calisan.konum = 'italy'  // objeye key : value ekleme. 
calisan.email = 'ella@gmail.com',
calisan['dogum'] = 1992,
console.log(calisan)

const isci = calisan;  // referans aktarimi, iksiide ayni belllek adresini gosteriyor.
isci.maas = 50000;
console.log(isci, calisan);  // ikisinin maasi 50000 olur.



  //* ========================================================
//*                    Object metodlari
//* =========================================================


//? metod : OBJELERE, CLASSLARA AIT OLAN FONKSIYONLARA DENIR.

const kisi = {
    ad : 'can',
    soyad : 'canan',
    dogum : 1999,
    meslek : 'developer',
    ehliyet: 'var',
    yasHesapla : function() {
        return new Date().getFullYear() - this.dogum ;   // burada sadece dogum yazarsa hata verir, dogum bi degisken degil , key yani property , bu hata verir, o yuzden ya this.dogum ya da kisi.dogum yazilmali
    },
    ozet : function() {  // burada arrow funtion kullanmak uygun degil. kullanma.  interview da cikmis bir soru. aciklamasi asagida.
        return `${this.ad}, ${this.yasHesapla()} yasindadir.`
    }
   
}

console.log("YAS", kisi.yasHesapla()); 
console.log('BILGI:', kisi.ozet());



//! NOT: arrow fonksiyonları farklı amaç için geliştirilmiş fonksiyonlarıdır
//! ve lexical context'e sahiptirler. Dolayısıyla, bir arrow fonk. içerisinde
//! this kelimesi kullanılrsak beklenmeyen sonuclar alabiliriz.
//! Çünkü, arrow içerisindeki this kelimesi global scope'u gösterir. (window nesnesini) gösterir.
//! Bunu engellemek için object fonskyionlarını tanımlamak için normal fonksiyon  yöntemlerini kullanmak gerekir.
//? sonuc ; arrow functionlari object ler icinde kullanma !!
//? arrow functionlar this erisimine acik degildir. yani bir arrow function icinde this kullanirsan bu this i fonksiyon icinde olarak algilamaz global algilar(window) bu nedenle hata verir.



  //* ========================================================
//*                    Object iterarions
//* =========================================================


//? Nasted objects
// const kisiler = {
//     ahmet : {
//     ad : "ahmet",
//     soyad : "jhonson",
//     yas : 30,
//     is : "developer",
//     diller : ['c', 'c+', 'python', 'js'],
//     maas : 120000,
// },
// mehmet : {
//     ad : "mehmet",
//     soyad : "jhonson",
//     yas : 30,
//     is : "developer",
//     diller : ['c', 'c+', 'python', 'js'],
//     maas : 120000,
// } 
// }
// console.log(kisiler);
// console.log(kisiler.ahmet.is);

// bu yontem cokta kullanisli degil, cunku belki de bu objenin icinde 1000 kisi olacak. erisim zor olacak.

//! arraya cevirip indisleme ile erisim yapilablir : JSON FORMATI  JSON=JS OBJECT NOTAION
//* su anda internet ortaminda neredeyse butun verilerin alimi bu formattta yapiiyor.
//*  json = dizi icersindeki objeler

const kisiler = [
    {
      name: 'Ahmet',
      surname: 'Can',
      job: 'developer',
      age: 30,
    },
    {
      name: 'Mehmet',
      surname: 'Baki',
      job: 'tester',
      age: 35,
    },
    {
      name: 'Nur',
      surname: 'Ersan',
      job: 'team lead',
      age: 40,
    },
    {
      name: 'Merve',
      surname: 'Veli',
      job: 'developer',
      age: 26,
    },
  
    {
      name: 'Ruzgar',
      surname: 'Kuzey',
      job: 'tester',
      age: 24,
    },
  ];

  console.log(kisiler);
  console.log(kisiler[4]);

  //* ornek1; kisiler icerisindeki joblari tek tek yazdirniz.

  // kisiler burada artik dizidir.
  kisiler.forEach((kisi) => console.log(kisi.job));

  //*ornek2; yaslari bir arttirarak yeni bir diziye atayin

  const yaslar = kisiler.map((kisi) => kisi.age +1 );

  console.log(yaslar);

  
//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu name key'i olarak saklayan, aynı zamanda age degerlerini 5
//* arttırarak age key'ine saklayan ve oluşan diziyi döndüren kodu yazınız.

const kisilerFullIsim = kisiler.map((kisi) => ({
    fullname : kisi.name.toUpperCase() + ' ' + kisi.surname.toUpperCase(),
    age : kisi.age + 5
} ));

console.log(kisilerFullIsim);

//!! arrow funtionda tek ifade varsa () kullanılır ve kendi return eder, object return edeceksek { } kullanmalıyız. ama { } olunca da return manuel yazılarak yapılabilir. değilse ({}) şeklinde de yazılabilir.

//* ornek 4; yasi(age) 33 den kucuk olan kisilerin adlarini (name) listeleyiniz.

//* Ornek5: 33 yasindan kücüklerin isimlerini diziye saklayiniz.

//* Ornek6: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak
//* yeni diziye saklayiniz.

//* Ornek7: kisilerin ortalama yasini hesaplayiniz.

const ortYas = kisiler.reduce((t, kisi) => t + kisi.age, 0) / kisiler.lenght;  // burada baslangic degeri olarak 0 verilmezse hata verir. bu nedenle genel olarak baslangic degeri verilmesi daha iyi olacaktir.

console.log(ortYas);

//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================
console.log('****** NEW OPERATORS *******');
const car = {
  name: 'BMW',
  model: 1990,
  engine: 1.6,
};

//* 1.YONTEM (Classical)
console.log(car.model);
console.log(car['name']);


//* 2.YONTEM (Destructuring)

const {name, model, engine} = car;
console.log(name, model, engine);    // const icerisinde yazilanlar ile ayni olmasi gerekir

// //* EXAMPLE: NESTED
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

const {car1, car2} = cars;
console.log(car1, car2);

const {name : c1Name, model : c1Model} = car1;   // hem car1 in hemde car2 nin icinde ayni key ler(name, model) oldugu icin sistem isim degistirmemize izin veriyor. 
console.log(c1Name, c1Model);

const {name: c2Name, model : c2Model} = car2;  // yukaridaki sebepten dolayi buradada ayni sekilde. yani bu => car2 den gelen name i c2Name olarak kayfet demek.
console.log(c2Name, c2Model);



const kisiler = [
  {
    name: 'Ahmet',
    surname: 'Can',
    job: 'developer',
    age: 30,
  },
  {
    name: 'Mehmet',
    surname: 'Baki',
    job: 'tester',
    age: 35,
  },
  {
    name: 'Nur',
    surname: 'Ersan',
    job: 'team lead',
    age: 40,
  },
];

kisiler.forEach( (kisi) => {
  console.log('***************');
  console.log("name:", kisi.name);
  console.log("surname:", kisi.surname);
  console.log("job:", kisi.job);
  console.log("age:", kisi['age']);
  console.log('***************');
} )

// aynisi destructring ile;


kisiler.forEach( (kisi) => {
  console.log('***************');
  const {name,job,surname,age} = kisi;    // destructring
  console.log("surname:", surname);
  console.log("job:", job);
  console.log("age:", age);
  console.log('***************');
} )




//* function
function getInfo() {
  return {
    id: 101,
    name5: "Apple",
    price: 20000,
  };
}
const { id, name5, price } = getInfo();
console.log(id, price);

//* ======================================================
//* NEW GENERAITON OPERATOR: DESTRUCTRING (ARRAY) , cok kullanilmaz
//* ======================================================

const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

/*classical method*/

const name1 = names[0];
const namw2 = names[1];

const [person1, person2, , person4] = names ;  // virgul koyularak bosluk yaptik boylece saffeti aldi.
console.log(person1, person2, person4);

//* ======================================================
//* NEW GENERAITON OPERATOR: spread or rest (..)
//* ======================================================

//* REST: (Arrays)
const vehicles = ["bmw", "reno", "mercedes", "ferrari", "anadol"];

const [vec1, vec2, ...restVehicles] = vehicles;  // vec1 = bmw vec2= reno  ... = geri kalani restVehicles altinda baska array a ata demek

//! restin sonda olmasi gerkiyor, ortaya alamiyoruz
//! alis sirasi onemli

console.log(vec1, vec2);
console.log(restVehicles);


//* REST: (objects)

const personel = {
  pName: "john",
  surname: "smith",
  job: "dev",
  age: 30
};

//!obj oldugu icin alis sirasi onemli degildir.
const {pName, job, ...surnameAge} = personel;
console.log(pName, job, surnameAge);


//* REST(Function Arguments)
const topla = (x, y) => {
  return x + y;
};

//? hata vermez fakat sadece 2 argümanı toplar
console.log(topla(1, 2, 3, 4, 5, 6));

const hepsiniTopla = (...sayilar) => {
  let toplam = 0;
  console.log(sayilar)  //? [1,2,3,4,5,6]
  sayilar.forEach((sayi) => (toplam += sayi));
  return toplam
}

console.log(hepsiniTopla(1, 2, 3, 4, 5, 6)); 

//? ------------------------------------------------------
//?  SPREAD
//? ------------------------------------------------------

//! dizileri birbirine eklemek icin kullanilan guzl bir yontemdir.

const araclar = ['Ucak', 'Helikopter', 'Bisiklet'];
const otomobiller = ['Tir', 'Otobus', 'Araba', 'SUV'];

const tumAraclar = [...araclar, ...otomobiller];
console.log(tumAraclar);

//* Example
const meyveler = ['cherry', 'pear', 'apricot', 'raisin'];
const turunclar = ['mandarin', ...meyveler, 'lime', 'orange'];
console.log(turunclar);

//* Ornek (String spread)
let str = 'Hello FS';
console.log([...str]);
console.log(Array.from(str));

//* Ornek (max)
console.log(Math.max(1, 3, 9, 5));
const rakamlar = [1, 3, 9, 5];
console.log('MAX:', Math.max(...rakamlar));







