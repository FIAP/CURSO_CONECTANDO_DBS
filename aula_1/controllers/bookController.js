const Book = require('../models/book');

let allBooks = [
  new Book(1, 'Dom Casmurro', 'Machado de Assis', 'Ficção', 1899, true),
  new Book(2, 'Orgulho e Preconceito', 'Jane Austen', 'Romance', 1813, true),
  new Book(3, 'Cem Anos de Solidão', 'Gabriel Garcia Marquez', 'Realismo Mágico', 1967, true),
  new Book(4, 'Quincas Borba', 'Machado de Assis', 'Ficção', 1891, true),
];

let nextBookId = 5; 

exports.getBooks = (req, res) => {
  res.render('books', { allBooks });
};

exports.getBorrowedBooks = (req, res) => {
  const borrowedBooks = allBooks.filter(book => !book.availability);
  res.render('borrowedBooks', { borrowedBooks });
};

exports.showBookDetails = (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = allBooks.find(book => book.id === bookId);
  if (book) {
    res.render('bookDetails', { book });
  } else {
    res.status(404).send('Livro não encontrado.');
  }
};

exports.showAddBookForm = (req, res) => {
  res.render('addBook');
};

exports.addBook = (req, res) => {
  const { title, author, genre, publicationYear } = req.body;
  const newBook = new Book(nextBookId++, title, author, genre, parseInt(publicationYear), true);
  allBooks.push(newBook);
  res.redirect('/books');
};

exports.showEditBookForm = (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = allBooks.find(book => book.id === bookId);
  if (book) {
    res.render('editBook', { book });
  } else {
    res.status(404).send('Livro não encontrado.');
  }
};

exports.editBook = (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author, genre, publicationYear } = req.body;
  const bookToEdit = allBooks.find(book => book.id === bookId);
  if (bookToEdit) {
    bookToEdit.title = title;
    bookToEdit.author = author;
    bookToEdit.genre = genre;
    bookToEdit.publicationYear = parseInt(publicationYear);
    res.redirect('/books');
  } else {
    res.status(404).send('Livro não encontrado.');
  }
};

exports.confirmDeleteBook = (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = allBooks.find(book => book.id === bookId);
  if (book) {
    res.render('confirmDeleteBook', { book });
  } else {
    res.status(404).send('Livro não encontrado.');
  }
};

exports.deleteBook = (req, res) => {
  const bookId = parseInt(req.params.id);
  allBooks = allBooks.filter(book => book.id !== bookId);
  res.redirect('/books');
};
