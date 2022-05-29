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
const toplamMaas = maaslar.reduce((t, m) => t + m, 0);
console.log('TOPLAM MAAS:', toplamMaas);

//* maasi ortalamanin altinda olanlara %20 zam yapalim.