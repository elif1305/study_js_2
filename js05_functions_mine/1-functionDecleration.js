


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