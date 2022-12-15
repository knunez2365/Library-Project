const librarySelector = document.querySelector('.library');
const pCreation = document.createElement('p');

let uniqueID = 0;

let myLibrary = [];

function Book(id, bookName, pages, author) {
  this.id = id;
  this.bookName = bookName;
  this.pages = pages;
  this.author = author;
}

function addBookToLibrary() {
  for (let index = 0; index < 1; index++) {
    // get values from input
    id = uniqueID++;
    bookName = document.querySelector('#bname').value;
    domName = document.querySelector('#bname').value;
    bookName = bookName.split(' ').join('').toLowerCase();
    console.log(bookName);
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    // clear values
    document.querySelector('#bname').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    // add to Dom
    div = document.createElement('div');
    librarySelector.append(div);
    div.className = `book ${bookName}`;
    div.setAttribute('id', `${id}`);
    // add bookName, author, pages
    createdBook = document.querySelector(`.book.${bookName}`);
    bookTitle = document.createElement(`p`);
    bookTitle.classList.add('bookName');
    bookTitle.textContent = `${domName}`;
    bookAuthor = document.createElement(`p`);
    bookAuthor.classList.add('Author:');
    bookAuthor.textContent = `${author}`;
    bookPages = document.createElement(`p`);
    bookPages.classList.add('pages:');
    bookPages.textContent = `${pages}`;
    deleteBook = document.createElement('button');
    deleteBook.classList.add(`remove`);
    deleteBook.textContent = `remove`;
    createdBook.append(bookTitle, bookAuthor, bookPages, deleteBook);
    // push to myLibrary
    bookCreated = new Book(id, bookName, pages, author);
    myLibrary.push(bookCreated);

    buttons = document.querySelectorAll('.remove');

    buttons.forEach((button) => {
      button.addEventListener('click', function () {
        let book = button.parentElement;
        let bookId = parseInt(book.getAttribute('id'));
        console.log(typeof bookId);
        const title = book.querySelector('.bookName').textContent;
        console.log(title);
        console.log(bookId);
        // console.log(myLibrary.find((obj) => obj.id === bookId));

        myLibrary = myLibrary.filter((x) => x.id != bookId);
        console.log(myLibrary);

        this.parentElement.remove();
        // checkBook(id);
        console.log(myLibrary);
        // // console.log('myLibaryID');
        // myLibrary.splice(libIndex, 1);
      });
    });

    // button.forEach((event) => {
    //   event.addEventListener('click', function (e) {
    //     console.log('e.target.id');
    //   });
    // });
    // button.forEach.addEventListener('click', () => {
    //   console.log('test');
    // });
  }
}

const modal = document.querySelector('.modal');
const dialog = document.querySelector('dialog');

const addBook = document.querySelector('.bookAdd');

addBook.addEventListener('click', () => {
  modal.showModal();
});

function onClick(event) {
  if (event.target === dialog) {
    dialog.close();
  }
}

function escClick(event) {
  if (event.key === 'Escape') {
    dialog.close();
  }
}

dialog.addEventListener('keypress', escClick);

dialog.addEventListener('click', onClick);

function checkBook(match) {
  console.log(match === myLibrary.indexOf(0, 0));
  console.log(myLibrary);
}

// bookRemove = function () {
// remove book and container
// let index = myLibrary.findIndex((b) => b.id === Book.id);
// myLibrary.splice(index, 1);

// button.addEventListener(
//   'click',
//   function (e) {
//     alert(e.target.id);
//   },
//   false
// );

// function test() {
//   console.log('test');
// }

// deleteBook.addEventListener('click', function () {
//   document.querySelector(`.book`).remove();
// });

// function remove() {
//   document.querySelector('.book').remove();
// }
