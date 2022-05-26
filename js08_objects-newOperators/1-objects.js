//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sıralı bellek bölgeleridir. Dolayısıyla bu
//? bölgelere indeksleme ile erişebiliriz.
//? Ancak daha karmaşık veri yapısı (unstructured)ihtiyaçalrımız
//? için Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapısı kullanılır.
//? Herhangi bir veriyi erişmemk için property (key) adı kullanılır.

console.log("******* Objects *********");

// objelere erismek icin (key.value)seklinde erisiyoruz.
// arraylerde indisleme ile erisiyorduk.

//! 3 farkli yontem ile object olusturulablir.

//* -----------------------
//* 1- object() classindan new operatoru ile
//* -----------------------

const araclar = new Object();
araclar.marka = "BMW";
araclar.motor = 1.3;
araclar.model = 2022;

console.log(araclar);
console.log(araclar.motor);  // . notasyonu bize 1.3  u verir
console.log(araclar['model']); //  square bracket notasyonu ,  2022 degerini getirir

//* ---------------------------------------------------------
//* 2- object constructor'ı kullanarak (OOP ile ayrıntılandırılacak)
//* ---------------------------------------------------------

//* Object constructor
function Personel(id, ad, maas) {           // ilk harfi bestpractise olarak buyuk yazilir
    this.perId = id;                        // buradki this aslinda Personel demek, yani Personel objectinin id sine id parametresi ile girilen degeri ata
    this.perAdi = ad;
    this.perMaas = maas;
    console.log(this); //! Personel objesine bağlanmıştır (binded)
  }
  
  const ahmet = new Personel(101, "Ahmet", 75000);
  const canan = new Personel(102, "Canan", 85000);
  console.log(ahmet, canan);
  console.log(canan.perMaas);
  console.log(ahmet.perAdi);
  console.log(this); //! window objesine bağlanmıştır


  //* ---------------------------------------------------------
//* 3- object literal (en cok tercih edilen yontem)
//* ---------------------------------------------------------

const calisan = {
    ad : "Ella",
    soyad : "jhonson",
    yas : 30,
    is : "developer",
    diller : ['c', 'c+', 'python', 'js'],
    maas : 120000,
}

console.log(calisan);
console.log(calisan.yas);
console.log(calisan.diller);
console.log(calisan.diller[3]);
//! console.log(calisan[1]); // boyle bise olamaz, bu bir dizi degil , ve klasik indisleme ile erisim olmaz. objenin elemanlari direk olarak indisleme erisim olamaz.

calisan.konum = 'italy'  // objeye key : value ekleme. 
calisan.email = 'ella@gmail.com',
calisan['dogum'] = 1992,
console.log(calisan)

const isci = calisan;  // referans aktarimi, iksiide ayni belllek adresini gosteriyor.
isci.maas = 50000;
console.log(isci, calisan);  // ikisinin maasi 50000 olur.



  //* ========================================================
//*                    Object metodlari
//* =========================================================


//? metod : OBJELERE, CLASSLARA AIT OLAN FONKSIYONLARA DENIR.

const kisi = {
    ad : 'can',
    soyad : 'canan',
    dogum : 1999,
    meslek : 'developer',
    ehliyet: 'var',
    yasHesapla : function() {
        return new Date().getFullYear() - this.dogum ;   // burada sadece dogum yazarsa hata verir, dogum bi degisken degil , key yani property , bu haat verir, o yuzden ya this.dogum ya da kisi.dogum yazilmali
    },
    ozet : function() {  // burada arrow funtion kullanmak uygun degil. kullanma.  interview da cikmis bir soru. aciklamasi asagida.
        return `${this.ad}, ${this.yasHesapla()} yasindadir.`
    }
   
}

console.log("YAS", kisi.yasHesapla()); 
console.log('BILGI:', kisi.ozet());



//! NOT: arrow fonksiyonları farklı amaç için geliştirilmiş fonksiyonlarıdır
//! ve lexical context'e sahiptirler. Dolayısıyla, bir arrow fonk. içerisinde
//! this kelimesi kullanılrsak beklenmeyen sonuclar alabiliriz.
//! Çünkü, arrow içerisindeki this kelimesi global scope'u gösterir. (window nesnesini) gösterir.
//! Bunu engellemek için object fonskyionlarını tanımlamak için normal fonksiyon  yöntemlerini kullanmak gerekir.
//? sonuc ; arrow functionlari object ler icinde kullanma !!



  //* ========================================================
//*                    Object iterarions
//* =========================================================


//? Nasted objects
// const kisiler = {
//     ahmet : {
//     ad : "ahmet",
//     soyad : "jhonson",
//     yas : 30,
//     is : "developer",
//     diller : ['c', 'c+', 'python', 'js'],
//     maas : 120000,
// },
// mehmet : {
//     ad : "mehmet",
//     soyad : "jhonson",
//     yas : 30,
//     is : "developer",
//     diller : ['c', 'c+', 'python', 'js'],
//     maas : 120000,
// } 
// }
// console.log(kisiler);
// console.log(kisiler.ahmet.is);

// bu yontem cokta kullanisli degil, cunku belki de bu objenin icinde 1000 kisi olacak. erisim zor olacak.

// arraya cevirip indisleme ile erisim yapilablir : JSON FORMATI  JSON=JS OBJECT NOTAION
const kisiler = [
    {
      name: 'Ahmet',
      surname: 'Can',
      job: 'developer',
      age: 30,
    },
    {
      name: 'Mehmet',
      surname: 'Baki',
      job: 'tester',
      age: 35,
    },
    {
      name: 'Nur',
      surname: 'Ersan',
      job: 'team lead',
      age: 40,
    },
    {
      name: 'Merve',
      surname: 'Veli',
      job: 'developer',
      age: 26,
    },
  
    {
      name: 'Ruzgar',
      surname: 'Kuzey',
      job: 'tester',
      age: 24,
    },
  ];

  console.log(kisiler);
  console.log(kisiler[4]);

  //* ornek1; kisiler icerisindeki joblari tek tek yazdirniz.

  // kisiler burada artik dizidir.
  kisiler.forEach((kisi) => console.log(kisi.job));

  //*ornek2; yaslari bir arttirarak yeni bir diziye atayin

  const yaslar = kisiler.map((kisi) => kisi.age +1 );

  console.log(yaslar);

  
//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu name key'i olarak saklayan, aynı zamanda age degerlerini 5
//* arttırarak age key'ine saklayan ve oluşan diziyi döndüren kodu yazınız.

const kisilerFullIsim = kisiler.map((kisi) => ({
    fullname : kisi.name.toUpperCase() + ' ' + kisi.surname.toUpperCase(),
    age : kisi.age + 5
} ));

console.log(kisilerFullIsim);

//!! arrow funtionda tek ifade varsa () kullanılır ve kendi return eder, object return edeceksek { } kullanmalıyız. ama { } olunca da return manuel yazılarak yapılabilir. değilse ({}) şeklinde de yazılabilir.

//* ornek 4; yasi(age) 33 den kucuk olan kisilerin adlarini (name) listeleyiniz.

//* Ornek5: 33 yasindan kücüklerin isimlerini diziye saklayiniz.

//* Ornek6: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak
//* yeni diziye saklayiniz.

//* Ornek7: kisilerin ortalama yasini hesaplayiniz.

const ortYas = kisiler.reduce((t, kisi) => t + kisi.age, 0) / kisiler.lenght;

console.log(ortYas);