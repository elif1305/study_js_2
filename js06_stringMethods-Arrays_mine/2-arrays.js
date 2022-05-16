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