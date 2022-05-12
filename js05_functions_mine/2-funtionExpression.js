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