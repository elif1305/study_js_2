//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

fetch('https://api.github.com/users')              // veri almak istenilen adresi dogrudan yaziyorsun. fetch in default degeri get tir.
  .then((res) => {                                     // burada ham cevabi aldik, response u yani cevabi yakalar
    //! error handling          BU YAPI ONEMLI HEP KULLANILIYOR
    if (!res.ok) {
      throw new Error(`Something went wrong: ${res.status}`);
    }
    return res.json();
  })
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
