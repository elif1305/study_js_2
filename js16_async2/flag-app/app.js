//*=========================================================
//*                     FLAG-APP
//*=========================================================

// https://restcountries.com/

const fetchCountry = async (name) => {  //! step 1
  const url = `https://restcountries.com/v3.1/name/${name}`;
  try {
    const res = await fetch(url); //! step 2
    if (!res.ok) {
      renderError(`Something went wrong:${res.status}`);
      throw new Error();
    }
    const data = await res.json(); //! step 3
    renderCountry(data[0]);                      // cekilen veri array olarak geldigi icin , icindeki objeye erismk icin 0. elemanini aliyoruz.
  } catch (error) {
    console.log(error);
  }
};

const renderError = (err) => {
  const countriesDiv = document.querySelector('.countries');
  countriesDiv.innerHTML = `
     <h1 class="text-danger">${err}</h1>
     <img src="./img/404.png" alt="" />
    `;
};

const renderCountry = (country) => {
  console.log(country);
  const countriesDiv = document.querySelector('.countries');

  //!destr
  const {
    capital,
    name: { common },     // burada common i da desct. yaptik.(desc yaptigimiz bir degerin icinde bir desc daha yapabliriz) ama name.common olarakta yazabliriz.
    region,
    flags: { svg },
    languages,
    currencies,
  } = country;

  // console.log(capital, common, region, svg);
  // console.log(Object.values(languages));
  // console.log(Object.values(currencies)[0].name);
  // console.log(Object.values(currencies)[0].symbol);

//! not : array icerisinde yine bir obje oldugu icin her bir ulkede bu key farkli olacak bu nedenle object values ile erisebiliriz.   OBJETCT.VALUES(): VALUES LARI ALMAK ICIN, OBJECT.KEYS() : KEYLERI ALMAK ICIN

  countriesDiv.innerHTML += `

  <div class="card shadow-lg" style="width: 18rem;">
    <img src="${svg}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${common}</h5>
      <p class="card-text">${region}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> <i class="fas fa-lg fa-landmark"></i> ${capital}</li>
      <li class="list-group-item"> <i class="fas fa-lg fa-comments"></i> ${Object.values(        //OBJETCT.VALUES(): VALUES LARI ALMAK ICIN,
        languages
      )}</li>

      <li class="list-group-item"> <i class="fas fa-lg fa-money-bill-wave"></i> ${
        Object.values(currencies)[0].name                  // currencies in 0 elemani bize obj dondurdugu icin 0. elemanini aliyoruz.
      }, ${Object.values(currencies)[0].symbol} </li>

    </ul>
  </div>

  `;
};

fetchCountry('turkey');
fetchCountry('usa');
fetchCountry('belgium');
fetchCountry('south africa');
