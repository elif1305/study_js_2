//* ======================================================
//*                     TODO APP
//* ======================================================
//? Selectors
const btn = document.getElementById('todo-button');
const todoInput = document.getElementById('todo-input');
const todoUl = document.getElementById('todo-ul');

let todos = JSON.parse(localStorage.getItem('todos')) || [];  // soldaki yoksa sagdakini aktar demek. eger && olsaydı soldaki varsa sagdakini aktar demek.

renderSavedTodos();

//! eger localde sakli veri varsa okuyup ekrana yazdırması icin fonksiyon
function renderSavedTodos() {
  todos.forEach((todo) => {
    createListElement(todo);
  });
}

function createListElement(todo) {
  //? her bir todo objesini destructure yaptık
  const { id, content, isDone } = todo;
  todoUl.innerHTML += `
     <li id=${id} class=${isDone ? 'checked' : ''} >  
      <i class="fa fa-check"></i>
      <p>${content}</p>
      <i class="fa fa-trash"></i>
    </li>`;
}
 // isdone varsa checked i gonder, class=${isDone && 'checked'} da yazilabiir.

//? Baslangicta input aktif olsun
window.onload = function () {
  todoInput.focus();
};

//? Add Buton Event'inin tanimanmasi
btn.addEventListener('click', () => {
  if (!todoInput.value) {
    alert('Please enter your todo');
  } else {
    const todoObject = {
      id: new Date().getTime(),
      isDone: false,
      content: todoInput.value,
    };

    //! Yeni olsuturulan todo'yu diziye sakla
    todos.push(todoObject);

    //! todos dizisinin son halini localStorage'e sakla
    localStorage.setItem('todos', JSON.stringify(todos));    //! todos object halinde oldugu icin strınge cevırıp storage a gonderıyoruz. cunku storage ta object saklayamayız .

    createListElement(todoObject);
    todoInput.value = '';
  }
});

//? Klavyeden enter tusuna basilmasi ile add butonunun click fonksiyonunun cagrilmasi
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    btn.click();
  }
});

//? delete ve ok butonları için event tanimlamasi
todoUl.addEventListener('click', (e) => {
  const id = e.target.parentElement.getAttribute('id');
  //!Event, sil butonlarının birisinden geldi ise
  if (e.target.classList.contains('fa-trash')) {
    //? Dizinin ilgili elementini sildi
    todos = todos.filter((todo) => todo.id != id);

    //?todos dizisinin son halini localStorage'e sakla
    localStorage.setItem('todos', JSON.stringify(todos));

    //?DOM'daki ilgili li elementini sil
    e.target.parentElement.remove();
  }

  //!Event, silme veya ok butonlarından geldi ise
  if (e.target.classList.contains('fa-check')) {
    // todos dizisindeki ilgili elementin isDone kismini güncelle
    todos.map((todo, index) => {
      if (todo.id == id) {             // ilk gele id number , localden okudugu string, bu nedenle === yapmiyoruz.
        todos[index].isDone = !todos[index].isDone;
      }
    });

    //?todos dizisinin son halini localStorage'e sakla
    localStorage.setItem('todos', JSON.stringify(todos));

    //? ilgili li elementinde checked adinda bir class varsa bunu sil (DOM)
    if (e.target.parentElement.classList.contains('checked')) {
      e.target.parentElement.classList.remove('checked');
    } else {
      //? ilgili li elementinde checked adinda bir class yoksa ekle
      e.target.parentElement.classList.add('checked');
    }
  }
});
