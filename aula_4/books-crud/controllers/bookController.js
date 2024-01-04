const { Book } = require('../models/book');

exports.getBooks = async (req, res) => {
  try {
    const allBooks = await Book.findAll();
    res.render('books', { allBooks });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
};

exports.getBorrowedBooks = async (req, res) => {
  try {
    const borrowedBooks = await Book.findAll({ where: { availability: false } });
    res.render('borrowedBooks', { borrowedBooks });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
};

exports.showBookDetails = async (req, res) => {
  const bookId = parseInt(req.params.id);
  try {
    const book = await Book.findByPk(bookId);
    if (book) {
      res.render('bookDetails', { book });
    } else {
      res.status(404).send('Livro não encontrado.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
};

exports.showAddBookForm = (req, res) => {
  res.render('addBook');
};

exports.addBook = async (req, res) => {
  const { title, author, genre, publicationYear } = req.body;
  try {
    await Book.create({
      title,
      author,
      genre,
      publicationYear: parseInt(publicationYear),
      availability: true,
    });
    res.redirect('/books');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
};

exports.showEditBookForm = async (req, res) => {
  const bookId = parseInt(req.params.id);
  try {
    const book = await Book.findByPk(bookId);
    if (book) {
      res.render('editBook', { book });
    } else {
      res.status(404).send('Livro não encontrado.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
};

exports.editBook = async (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author, genre, publicationYear } = req.body;
  try {
    const bookToUpdate = await Book.findByPk(bookId);
    if (bookToUpdate) {
      await bookToUpdate.update({
        title,
        author,
        genre,
        publicationYear: parseInt(publicationYear),
      });
      res.redirect('/books');
    } else {
      res.status(404).send('Livro não encontrado.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
};

exports.confirmDeleteBook = async (req, res) => {
  const bookId = parseInt(req.params.id);
  try {
    const book = await Book.findByPk(bookId);
    if (book) {
      res.render('confirmDeleteBook', { book });
    } else {
      res.status(404).send('Livro não encontrado.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
};

exports.deleteBook = async (req, res) => {
  const bookId = parseInt(req.params.id);
  try {
    await Book.destroy({ where: { id: bookId } });
    res.redirect('/books');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
};
