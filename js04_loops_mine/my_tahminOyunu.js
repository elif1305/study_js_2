//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

// suedo code
// 1. hak = 5
// 2. rastgele sayi tut(0-100)
// 3. kullanican tahmini al
// 4. hak = hak -1
// 5. eger tahmin esit ise restgele sayiya, print(tebrikler)
// eger tahmin esit degil ise restgele sayiya,
//           eger tahmin < rastgele sayi, print(arttir)
//           eger tahmin > rastgele sayi, print(azalt)
// 6.  eger hak > 0 ise kullanicidan tahmin al
//   degilse print(uzgunum oyun bitti)

console.log('OYUN')

let devam;
do{
    let hak = 5

    const rastgeleSayi = Math.floor(Math.random()* 100 + 1 )            // BURADA MATH FLOOR TABANA YUVARLAMAK ICIN , MATH.RANDOM 0 ILE 99 ARASINDA SAYI URETMEK ICIN,100 E CEKMEK ICIN X100 YAPIYORUZ,TABANA YUVARLADIIMIZ ICINDE +1 YAPIYORUZ.(+1 YAZMAZSAK MAKSIMIUM 99 YAPAR)
    
    console.log(rastgeleSayi);   // tuttugu sayiyi gormek icin 
    
    do{
    const tahmin = Number(prompt("Lutfen 0 ile 100 arasinda bir sayi giriniz:"));
    hak -= 1;
    if(tahmin === rastgeleSayi){  // === yapildigi icin ustteki promptu number yapmamiz gerekiyor. cunku promttan alinan deger default olarak stringtir. === icin tipinin de esit olmasi gerekir.
        console.log(`tebrikler ${5-hak} denemede bildiniz.`);
        break; // sart gerceklestiginde donguden cik
    } else{
        console.log(`Dikkat ${hak} hakkiniz kaldi`);
        if (tahmin < rastgeleSayi){
            console.log("ARTTIR");
        }else{
            console.log("AZALT");
        }
    }
    } while(hak > 0)  // while true oldugu surece do ya gidecek 
    
    
    if(hak === 0){
    console.log("Uzgunuz oyunu kaybettiniz..");
    }
    
    // const devam = prompt("Yeniden oynamak ister misinin e/h ?") // while kosulundaki degisken while in disi kabul ediliyor.bu neden le devam i yukarda global scope ta tanimlayacagiz
    devam = prompt("Yeniden oynamak ister misinin e/h ?")
} while(devam == "e" || devam == "E");  

console.log("Yine bekleriz");


