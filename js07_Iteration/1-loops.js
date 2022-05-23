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
    }
    //  return sayac ? `${isim} bulunamadi`: `${isim}, ${sayac} adet bulundu.`; 
    //  return !sayac ? `${isim}, ${sayac} adet bulundu`: `${isim} bulunamadi `;    // 
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





  