//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================
console.log('****** NEW OPERATORS *******');
const car = {
  name: 'BMW',
  model: 1990,
  engine: 1.6,
};

//* 1.YONTEM (Classical)
console.log(car.model);
console.log(car['name']);


//* 2.YONTEM (Destructuring)

const {name, model, engine} = car;
console.log(name, model, engine);    // const icerisinde yazilanlar ile ayni olmasi gerekir

// //* EXAMPLE: NESTED
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

const {car1, car2} = cars;
console.log(car1, car2);

const {name : c1Name, model : c1Model} = car1;   // hem car1 in hemde car2 nin icinde ayni key ler(name, model) oldugu icin sistem isim degistirmemize izin veriyor. 
console.log(c1Name, c1Model);

const {name: c2Name, model : c2Model} = car2;  // yukaridaki sebepten dolayi buradada ayni sekilde. yani bu => car2 den gelen name i c2Name olarak kayfet demek.
console.log(c2Name, c2Model);



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
];

kisiler.forEach( (kisi) => {
  console.log('***************');
  console.log("name:", kisi.name);
  console.log("surname:", kisi.surname);
  console.log("job:", kisi.job);
  console.log("age:", kisi['age']);
  console.log('***************');
} )

// aynisi destructring ile;


kisiler.forEach( (kisi) => {
  console.log('***************');
  const {name,job,surname,age} = kisi;    // destructring
  console.log("surname:", surname);
  console.log("job:", job);
  console.log("age:", age);
  console.log('***************');
} )




//* function
function getInfo() {
  return {
    id: 101,
    name5: "Apple",
    price: 20000,
  };
}
const { id, name5, price } = getInfo();
console.log(id, price);

//* ======================================================
//* NEW GENERAITON OPERATOR: DESTRUCTRING (ARRAY) , cok kullanilmaz
//* ======================================================

const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

/*classical method*/

const name1 = names[0];
const namw2 = names[1];

const [person1, person2, , person4] = names ;  // virgul koyularak bosluk yaptik boylece saffeti aldi.
console.log(person1, person2, person4);

//* ======================================================
//* NEW GENERAITON OPERATOR: spread or rest (..)
//* ======================================================

//* REST: (Arrays)
const vehicles = ["bmw", "reno", "mercedes", "ferrari", "anadol"];

const [vec1, vec2, ...restVehicles] = vehicles;  // vec1 = bmw vec2= reno  ... = geri kalani restVehicles altinda baska array a ata demek

//! restin sonda olmasi gerkiyor, ortaya alamiyoruz
//! alis sirasi onemli

console.log(vec1, vec2);
console.log(restVehicles);


//* REST: (objects)

const personel = {
  pName: "john",
  surname: "smith",
  job: "dev",
  age: 30
};

//!obj oldugu icin alis sirasi onemli degildir.
const {pName, job, ...surnameAge} = personel;
console.log(pName, job, surnameAge);


//* REST(Function Arguments)
const topla = (x, y) => {
  return x + y;
};

//? hata vermez fakat sadece 2 argümanı toplar
console.log(topla(1, 2, 3, 4, 5, 6));

const hepsiniTopla = (...sayilar) => {
  let toplam = 0;
  console.log(sayilar)  //? [1,2,3,4,5,6]
  sayilar.forEach((sayi) => (toplam += sayi));
  return toplam
}

console.log(hepsiniTopla(1, 2, 3, 4, 5, 6)); 

//? ------------------------------------------------------
//?  SPREAD
//? ------------------------------------------------------

//! dizileri birbirine eklemek icin kullanilan guzl bir yontemdir.

const araclar = ['Ucak', 'Helikopter', 'Bisiklet'];
const otomobiller = ['Tir', 'Otobus', 'Araba', 'SUV'];

const tumAraclar = [...araclar, ...otomobiller];
console.log(tumAraclar);

//* Example
const meyveler = ['cherry', 'pear', 'apricot', 'raisin'];
const turunclar = ['mandarin', ...meyveler, 'lime', 'orange'];
console.log(turunclar);

//* Ornek (String spread)
let str = 'Hello FS';
console.log([...str]);
console.log(Array.from(str));

//* Ornek (max)
console.log(Math.max(1, 3, 9, 5));
const rakamlar = [1, 3, 9, 5];
console.log('MAX:', Math.max(...rakamlar));


