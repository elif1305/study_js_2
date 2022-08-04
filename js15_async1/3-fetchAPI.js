//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

// temel yapisi :
// fetch(adres).then().then().catch()     // default u get tir.
// chaining yapisi/ fetch then e then obur then e o catshe iletiyor.

fetch('https://api.github.com/users')              // veri almak istenilen adresi dogrudan yaziyorsun. fetch in default degeri get tir.
  .then((res) => {                                     // burada ham cevabi aldik, response u yani cevabi yakalar
    //! error handling          BU YAPI ONEMLI HEP KULLANILIYOR
    //! then yapisi geregi sadece response gelmediginde hata verir.(or internet gelmediginde gibi) fakat bunlar disinda hata algilanmiyor. bu nedenle !res.ok yaparak diger hatalarida buluyoruz.yani diger hatalar varsa onlarida yakalamak ve catche gondermek icin bunu yapiyoruz. ONEMLI
    if (!res.ok) {
      throw new Error(`Something went wrong: ${res.status}`);  // res.status ile hatayi da belirtebliriz.
    }
    return res.json();     // ham veriyi kullanmak icin json a ceviriyoruz.
  })                      // arrow func. lar otomatik return eder, fakat eger suslu parantez acuyildiysa return kullanilmalidir.
  .then((data) => updateDom(data))     //  burada genelde 2. then e data yazilr. ham veriyi ayristirmak gibi dusunuleblir
  .catch((err) => console.log(err));

const updateDom = (data) => {
  const userDiv = document.querySelector('.users');
  data.forEach((user) => {
    const { login, avatar_url, html_url } = user;
    userDiv.innerHTML += `
    <h2 class="text-warning">NAME:${login}</h2>
    <img src=${avatar_url} width="50%" alt="" />;
  `;
  });
};


// NOTSUZ HALI ASAGIDA ;


// fetch('https://api.github.com/users')     
//   .then((res) => {                      
//     if (!res.ok) {
//       throw new Error(`Something went wrong: ${res.status}`);
//     }
//     return res.json();   
//   })                    
//   .then((data) => updateDom(data))  
//   .catch((err) => console.log(err));

// const updateDom = (data) => {
//   const userDiv = document.querySelector('.users');
//   data.forEach((user) => {
//     const { login, avatar_url, html_url } = user;
//     userDiv.innerHTML += `
//     <h2 class="text-warning">NAME:${login}</h2>
//     <img src=${avatar_url} width="50%" alt="" />;
//   `;
//   });
// };
