//* ======================================================
//*                   FOREACH METHOD
//* ======================================================



// foreach icine parametre olarak fonskiyon alablir.

console.log('****** ITERATION **********');
//*Dizideki herbir fiyati konsola bastiriniz.

const fiyatlar = [100, 250, 50, 89];

fiyatlar.forEach(yazdir) 


function yazdir(value){
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


//*-------------- ÖDEV -------------------
//* fiyatlar dizisinde her bir fiyata %10 zam yapalım.



//* ======================================================
//*                       MAP METHOD
//* ======================================================

//KAC ELEMAN GIILIRSE O KADAR ELEMAN DONDURRU.

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
      return isim.toLocaleUpperCase();
  }) ;
  console.log(buyukIsimler);

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


    // ahmet olanlarisecip buyuk harfe cevirip konsola yaziniz.
  isimler
  .filter((x) => x === "ahmet")
  .map((x) => x.toLocaleUpperCase())
  .forEach((x) => console.log(x));     // bunlarin yeride degisik olablir.

  //* Fiyatlar arryindaki fiyati 250 tl den az olanlari ayri bir diziye saklayin.

  const kucuk250 = fiyatlar.filter((f)=> f < 250)
  console.log(kucuk250);