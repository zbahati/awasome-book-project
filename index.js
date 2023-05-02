let myBooks = JSON.parse(localStorage.getItem('myBooks')) || [];
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addBtn = document.getElementById('add');
const bookList = document.getElementById('bookList');

function display() {
  bookList.innerHTML = '';
  myBooks.forEach((book) => {
    const bookDiv = document.createElement('li');
    const hr = document.createElement('hr');
    bookDiv.innerHTML = `Title: ${book.title} <br> Author: ${book.author} <br>`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    function removeBook(book) {
      myBooks = myBooks.filter((b) => b !== book);
      localStorage.setItem('myBooks', JSON.stringify(myBooks));
      display();
    }

    removeBtn.addEventListener('click', () => {
      removeBook(book);
    });
    bookDiv.append(removeBtn, hr);
    bookList.appendChild(bookDiv);
  });
}

function addBook(title, author) {
  myBooks.push({ title, author });
  localStorage.setItem('myBooks', JSON.stringify(myBooks));
  display();
}

addBtn.addEventListener('click', () => {
  const title = titleInput.value;
  const author = authorInput.value;
  if (title && author) {
    addBook(title, author);
    titleInput.value = '';
    authorInput.value = '';
  }
});

display();