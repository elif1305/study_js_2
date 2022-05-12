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