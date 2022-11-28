const librarySelector = document.querySelector('.library');
const pCreation = document.createElement('p');

uniqueID = 0;

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
    bookTitle.textContent = `${bookName}`;
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

    button = document.querySelectorAll('.remove');
    button.forEach((remove) => {
      remove.addEventListener(
        'click',
        function (e) {
          console.log(e.target.id);
        },
        false
      );
    });
    // button.forEachaddEventListener('click', () => {
    //   console.log('test');
    // });
  }
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
