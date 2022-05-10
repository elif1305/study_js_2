console.log('****** LOOPS *******');

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************
// Math.floor() =>aşağıya yuvarlar
// Math.ceil() =>sürekli yukarıya yuvarlar
// Math.round() => değerine göre yuvarlar.
// Math.trunc() => kesirli sayının tam kısmı alır.

for (let i = 1; i <= 10; i++) {
  const randomSayi = Math.floor(Math.random() * 100 + 1);
  console.log(randomSayi);
}

console.log('Program bitti');

//? Ornek: 1 den n kadar sayıları toplayan kodu yazınız.

const n = prompt('n sayisini girinz:');
let toplam = 0;
for (let i = 1; i <= n; i++) {
  toplam += i;
}

console.log('Toplam:', toplam);

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

//******************** WHILE ******************

// let i = 1;
// while (i <= 5) {
//   console.log('Merhaba-', i);
//   i++;
// }

// console.log('Bitti');



// let not = prompt('Lutfen notunuzu giriniz (0-100):')

// while(not<0 || not>100){
//   console.log('Girdigniz not 0-100 arasinda olmalidir.');
//   not = prompt('Lutfen notunuzu giriniz (0-100):')
// }
//  console.log("girdiginiz not", not);


//********** DO-WHILE **********/

// let i = 1:

// do{
//   console.log('merhaba-', i)
//   i++
// } while('i <= 5')


// let not = 

// do{
//   not = prompt('Lutfen notunuzu giriniz (0-100):')

// }while(not<0 || not>100){
  
// }
//  console.log("girdiginiz not", not);

/*
1. hak = 5
2. rastgele sayi tut(0-100)
3. kullanican tahmini al
4. hak = hak -1
5. eger tahmin esit ise restgele sayiya, print(tebrikler)
 eger tahmin esit degil ise restgele sayiya,
          egertahmin < rastgele sayida print(arttir)
          eger tahmin > rastgele sayi print(azalt)
6.  eger hak > 0 ise kullanicidan tahmin al
  degilse print(uzgunum oyun bitti) 
 */


  let hak = 5

  const rastgeleSayi = Math.floor(Math.random()*100 +1)

  do{
    const tahmin = prompt("lutfen 0-100 arasinda bir sayi giriniz")
    hak -= 1;
    if (tahmin === rastgeleSayi){  /*buraya === konuldugu icin promtu number yapmamiz gerekiyor. cuku promtan gelen deger stringtir. === bu tipininde degerinin de esitolmasi demektir. bunu yapmazsak sonucu yanlis buluruz. */
      console.log(`tebrikler ${5-hak} denemede bildiniz`);
      break;
    }else{
      console.log(`dikkat ${hak} hakkiniz kaldi`);
      if(tahmin< rastgeleSayi){
        console.log("arttir");
      }else{
        console.log("azalt");
      }
    }
  } while(hak > 0)