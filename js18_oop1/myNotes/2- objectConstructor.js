//* ======================================================
//*             OOP - Object Constructor (ES5)
//* ======================================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date and Array nesneleri Object.prototype'dan miras almaktadir.


//! ANAYAPI :

function Book(title, author, year){     // fonksiyonun ismi buyuk harfla baslar. bu bir obje demek icin gostergedir.
    this.title = title;                // this bulundugu yerdeki objeyi refere eder, yani book u
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}


//! COGALTMA :

const book1 = new Book('Kasagi', 'omer seyfettin', '1920');
const book2 = new Book('Sinekli Bakkal', 'H.Edip Adivar', '1910');

console.log(book1);
console.log(book2.getSummary());

book1.price = 100;              // yeni gelen property sadece book1 e eklendi. kalibi degistirmedik sadece book1 de degisiklik yaptik.
console.log(book1, book2);




//! YENI PROPERTY EKLEME (Instance a) :

book1.price = 100;              // yeni gelen property sadece book1 e eklendi. kalibi degistirmedik sadece book1 de degisiklik yaptik.
console.log(book1, book2);  // book2 de price property si olmaz.




//! ANA KALIBA YENI PROPERTY EKLEME :

//? Prototype ile ekliyoruz.

Book.prototype.getAge = function () {      // getAge diye bir fonk yazip bunu ana kaliba ekliyoruz.
    return new Date().getFullYear() - this.year ;
};

Book.prototype.type = 'novel'

console.log(book1.getAge());
console.log(book2.getAge());
console.log(Book);


//! PROTOTYPE ERISIMI

//! Prototype, belirli bir Nesne'nin (Object) tum instance'larina kolay bir
//! sekilde metotlar tanimlamaya izin vermektedir.
//! Prototip alaninda bir metot tanimlamanin guzelligi bu metot'un olusan
//! tum instance'lerin belleginde yer kaplamamasi ancak tum instance'larin bu metota
//! ulasabilmesidir.

//* Ornegin Book nesnesinin tum instance'lari getAge() fonksiyonunu miras alabilir.
//* Ancak, getAge() fonksiyonu bellekte sadece tek bir yer kaplamaktadir.

//* Bir nesnenin prototiplerine .prototype ile erisilebilir.
//* Ancak bir instance'in prototiplerine .__proto__ ile erisilmektedir.

//! .prototype ile bir objenin protatip alanini gorebliriz.
console.log(Book.prototype);   

//! turetilmis olan (instance) in proto alanini gormek icin .__proto__ yazmak gerekiyor.
console.log(book1.__proto__);   



//! ANA KALIPTAN BASKA BIR KALIP URETME ;

//*book const.(kalibindan) dan Magazin const.(kalip) uretme: 

function Magazin (title, author, year, month) {          // magazin conts. icerisinde book const. i cagiriyoruz, ortaklari cagiriyoruz ve monthu da biz ekstra ekliyoruz.
    Book.call(this, title, author, year)               // this book u temsil eder , 
    this.month = month ;                          // this Magazini temsil eder
}


//* PROTOTYPE EKLEME;

//! prototypelar dogrudan miras olarak gelmezz. bilincli olara yapilmistir. eger alinsaydi eklene eklene prototype siserdi.
console.log(Magazin.prototype);

Magazin.prototype = Object.create(Book.prototype);   // book un prototype ini al ve magazin in prototypine kopyala.
console.log(Magazin.prototype);


//* BOOK KALIBINDAN (ANA KALIPTAN) URETILEN MAGAZIN ANA KALIBINDAN COGALTMA YAPMA;

//? magazine nesnesinde bir instance olusturulmasi:
const mag1 = new Magazin('Scientific Research', "Einstein", 1985, "September");

console.log(mag1);
console.log(mag1.getAge());