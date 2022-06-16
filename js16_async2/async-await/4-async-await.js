//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asyn hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#examples
//?https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
//?https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function


//! await ler ile siraya koyuyoruz.ustteki await once calisir, sirayla asagiya iner.
//* asagidaki ornekte try catch blogu kullandik

let hata = false;
const getUsers = async function () {   //! step 1
  try { //! step 5
    const res = await fetch('https://api.github.com/users');    //! step 2
    if (!res.ok) {    //! step 3
      hata = true;
      // throw new Error(`Something went wrong:${res.status}`);
    }
    const data = await res.json();  //! step 4
    updateDom(data);
  } catch (error) {  //! step 5
    console.log(error);
  } finally {
    hata = false;
  }
};

getUsers();

const updateDom = (data) => {
  const userDiv = document.querySelector('.users');

  if (hata) {
    userDiv.innerHTML = `<h1 class="text-danger">Data can not be fetched</h1>
    <img src="./img/404.png" alt="" />
    `;
  } else {
    data.forEach((user) => {
      //!destr
      const { login, avatar_url, html_url } = user;
      userDiv.innerHTML += `
    <h2 class="text-warning">NAME:${login}</h2>
    <img src=${avatar_url} width="50%" alt="" />
    <h3>HTML_URL:${html_url}</h3>
  `;
    });
  }
};
