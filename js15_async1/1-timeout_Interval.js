//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Synchronous : sirali calisan kodlar, cok uzun kodlarda calismasi cok zaman alir.
//? ASynchronous : arka planda calisan kodlar vardir ve code u bloklamayan code lara ASynchronous kodlama denir.
//? single-threaded : birim zamanda bir islem parcacigi calistirabilir.
//? bir isi yurutmek icin alt procesessler olusturuluyor, ve bu processlerinde alt thread leri olusturuluyor.
//? Multithreading For example, while subscribing to a website, clicking the submit button would cause you to wait until the confirmation e-mail is sent to your mailbox if it is not sent on a separate thread.
//? Javascript, bir single-threaded (birim zamanda -1- tane iş parçacığı <<kolumuz bir process ise parmaklarımız thread (iş parçacığı)'dir>> çalıştırıyor. Ancak Java, C++, Python'da multi-threaded aktif hale getirilebiliyor) ve Asenkron Programlama dilidir.
//? CPU birden fazla iş yaparken aslında zamanı küçük dilimlere böldüğünde milisaniye seviyesinde. belli bir zaman aralığında birden fazla iş yapıyormuş gibi geliyor.

//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ---------------------------------------------------------------
// const bekle = (ms) => {
//   //! blocking-code
//   const start = new Date().getTime();
//   while (new Date().getTime() < start + ms) {}
// };

// console.log('hello');
//  alert('ITF'); //! blocking-code
//? console.time('timer');  // ne kadar sure gectigini olcmek icin baslatma fonksiyonu
// bekle(3000);
//? console.timeEnd('timer');  // ne kadar sure gectigini olcmek icin baslatilan fonks. durdurma fonksiyonu
// console.log('FS11');

//* Asenkron (setTimeout)
//* ---------------------------------------------------------------
// //! macro task kuyrugu
// setTimeout(() => {
//   //! non-blocking code
//   console.log('Hello');
// }, 1000);                  //? buradaki surenin bir onemi yok. setTimeout kullanildigi zaman macrotask queue sirasina girer ve microtask queue sirasi bitmeden macroya gecmeyecegi icin sure ne olursa olsun once microtask in bitmesi beklenir sonra macro task a gecilir.


// Examples of macrotasks are setTimeout, setInterval, setImmediate, etc.
// Examples of microtasks are, Promises, processes.nextTick, etc

// //! micro task kuyrugu
// console.log('bonju');
// console.log('Merhaba');

// setTimeout(() => {
//   //! non-blocking code
//   console.log('Dostum naber?');
// }, 500);

//? birden fazla setTimeout oldugunda surelerine gore calisir, sureleri esitse yazilma sirasina gore calisir.

//* Asenkron (setInterval, clearInterval)
//*----------------------------------------------------------

// console.log('Counter Started');
// let counter = 0;

// const sec1 = setInterval(() => {
//   //!non-blocking
//   console.log(++counter);
//   if (counter > 9) {
//     clearInterval(sec1);      // intervali durdurmak icin
//   }
// }, 1000);

// console.log('Counter Finished');

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakta bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log('john:Hi');
  setTimeout(() => {
    console.log('Sarah: Hello');
    setTimeout(() => {
      console.log('John: How Are you?');
      setTimeout(() => {
        console.log('Sarah:Fine and you?');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// callback yontemi sikintili bir yapi oldugu icin bazi cozumler gelistirilmis.

//? COZUMLER:
//?----------------------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)

