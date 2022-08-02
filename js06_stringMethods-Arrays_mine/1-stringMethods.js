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