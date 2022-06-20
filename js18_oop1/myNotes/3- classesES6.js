//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//* ======================================================

//? Bir parent class'in degisken ve fonksiyonelliği extends keyword'u ile
//? child class'a gecmektedir.(INHERITANCE)

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar ile bilinir.

//! ANA KALIP OLUSTURMA;

class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
      // this.getTitle = function () {             // hepsine gitmesini istersek buraya yaziyoruz.mantikli birsey degil.
      //   return this.title;
      // };
    }
    //! bu kisimda yazilan fonksiyonlar aslinda prototype alaninda bulunur.
    getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year} `;
    }
  }
  
  
//! COGALTMA ;
  
//? instance
  const book1 = new Book('Kasagi', 'Omer Seyfettin', 1920);
  const book2 = new Book('Sinekli Bakkal', 'H.Edip Adıvar', 1910);
  
  console.log(book1);
  
  
//! ANA KALIPTAN BASKA BIR KALIP URETME ;

class Magazine extends Book {
    constructor(title, author, year, month){
        //! book un constructorr i cagrildi.
        super(title, author, year);   // hem const cagriliyor hemde prototype i inherit olarak aliniyor.
        this.month = month ;
    }
}


//* BOOK KALIBINDAN (ANA KALIPTAN) URETILEN MAGAZIN ANA KALIBINDAN COGALTMA YAPMA;

//* constructor yapici bir fonksiyondur.Yeni bir instance olustururken(new ile) cagrilir. 

const mag1 = new Magazine('Kasagi', 'Omer Seyfettin', 1920, 'Nov');

console.log(mag1);

console.log(mag1.getSummary());