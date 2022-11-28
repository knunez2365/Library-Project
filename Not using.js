const librarySelector = document.querySelector('.library');

const bookCreation = document.createElement('div');

myLibrary = [
  ['The fault in our stars', 'John', 300, 'read'],
  ['Dear John', 'Shia Lebea', 230, 'not read'],
];

function Book(bookName, pages, author, bookStatus) {
  this.bookName = bookName;
  this.pages = pages;
  this.author = author;
  this.bookStatus = bookStatus;
}

// for (i = 0; i < myLibrary.length; i += 1) {
//   // get input from boxes
//   bookName = document.querySelector('#bname').value;
//   pages = document.querySelector('#pages').value;
//   author = document.querySelector('#author').value;
//   bookStatus = 'read';
//   // create Div
//   div = document.createElement('div');
//   librarySelector.append(div);
//   div.className = `book one`;
//   bookNew = document.querySelector(`.book.one`);
//   // enter input from boxes
//   bookTitle = document.createElement(`pa`);
//   bookTitle.classList.add('bookName');
//   bookTitle.textContent = `${bookName}`;
//   bookAuthor = document.createElement(`pa`);
//   bookAuthor.classList.add('Author:');
//   bookAuthor.textContent = `${author}`;
//   bookPages = document.createElement(`pa`);
//   bookPages.classList.add('pages:');
//   bookPages.textContent = `${pages}`;
//   bookStatus = document.createElement(`pa`);
//   bookNew.append(bookTitle, bookAuthor, bookPages);
// }

document.querySelector('.Add').addEventListener('click', function () {
  num = 0;
  console.log('test');
  bookName = document.querySelector('#bname').value;
  pages = document.querySelector('#pages').value;
  author = document.querySelector('#author').value;
  bookStatus = 'read';
  // create Div
  div = document.createElement('div');
  librarySelector.append(div);
  div.className = `book ${bookName}`;
  bookNew = document.querySelector(`.book.${bookName}`);
  // enter input from boxes
  bookTitle = document.createElement(`pa`);
  bookTitle.classList.add('bookName');
  bookTitle.textContent = `${bookName}`;
  bookAuthor = document.createElement(`pa`);
  bookAuthor.classList.add('Author:');
  bookAuthor.textContent = `${author}`;
  bookPages = document.createElement(`pa`);
  bookPages.classList.add('pages:');
  bookPages.textContent = `${pages}`;
  bookStatus = document.createElement(`pa`);
  bookNew.append(bookTitle, bookAuthor, bookPages);
  // create and push array
  newBook = [bookName, author, pages, bookStatus];
  myLibrary.push(newBook);

  // clear
  document.querySelector('#bname').value = '';
  document.querySelector('#pages').value = '';
  document.querySelector('#author').value = '';
});

Book.prototype.bookInfo = function () {
  return `${this.bookName} by ${this.author}, ${this.pages} Pages, ${this.bookStatus}`;
};

// function addBook() {
//   for (let index = 0; index < myLibrary.length; index++) {
//     document.createElement('div');
//     librarySelector.append(bookCreation);

//     console.log(`Book number ${index} `);
//   }
//   bookCreation.setAttribute('class', 'book two');
//   bookNew = document.querySelector('.book.two');
//   bookTitle = document.createElement(`pa`);
//   bookTitle.classList.add('bookName');
//   bookTitle.textContent = 'Breathe';
//   bookAuthor = document.createElement(`pa`);
//   bookAuthor.classList.add('Author:');
//   bookAuthor.textContent = 'John Michaels';
//   bookPages = document.createElement(`pa`);
//   bookPages.classList.add('pages:');
//   bookPages.textContent = '450';
//   bookStatus = document.createElement(`pa`);
//   bookNew.append(bookTitle, bookAuthor, bookPages);

//   bookAuthor.bookName = document.querySelector('#bname').value;
//   pages = document.querySelector('#pages').value;
//   author = document.querySelector('#author').value;
//   bookStatus = 'read';
// }

// function transfer() {
//   bookName = document.querySelector('#bname').value;
//   pages = document.querySelector('#pages').value;
//   author = document.querySelector('#author').value;
//   bookStatus = 'read';

//   librarySelector.append(bookCreation);
//   bookCreation.setAttribute('class', 'book two');
//   bookNew = document.querySelector('.book.two');
//   bookTitle = document.createElement(`pa`);
//   bookTitle.classList.add('bookName');
//   bookTitle.textContent = `${bookName}`;
//   bookAuthor = document.createElement(`pa`);
//   bookAuthor.classList.add('Author:');
//   bookAuthor.textContent = `${author}`;
//   bookPages = document.createElement(`pa`);
//   bookPages.classList.add('pages:');
//   bookPages.textContent = `${pages}`;
//   bookStatus = document.createElement(`pa`);
//   bookNew.append(bookTitle, bookAuthor, bookPages);
