import Book from './modules/book.js';
import spa from './modules/spa.js';
import checkls from './modules/checklocalstorage.js';
import { DateTime } from './modules/luxon.js';

const awesomeBooks = document.getElementById('awesomeBooks');

const library = new Book(awesomeBooks);

document.querySelector('form').onsubmit = (e) => {
  e.preventDefault();
  const error = document.getElementById('error');
  const { title, author } = e.target;
  if (title.value.length < 3 || author.value.length < 3) {
    error.innerHTML = 'input field should contain minimum of three characters!';
    setTimeout(() => {
      error.innerHTML = '';
    }, 3000);
  } else {
    error.innerHTML = '';
    library.add({
      id: Date.now().toString(),
      title: title.value,
      author: author.value,
    });
    e.target.title.value = '';
    e.target.author.value = '';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  checkls(library);
  library.books.forEach((book) => library.render(book));
  spa();
});

setInterval(() => {
  const time = DateTime.now().toFormat("LLLL dd'th' tt");
  const date = document.querySelector('.date');
  date.innerHTML = time;
}, 1000);
