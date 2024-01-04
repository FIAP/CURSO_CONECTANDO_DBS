const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getBooks);
router.get('/borrowed', bookController.getBorrowedBooks);
router.get('/:id', bookController.showBookDetails);
router.get('/add/:param', bookController.showAddBookForm);
router.post('/add', bookController.addBook);
router.get('/edit/:id', bookController.showEditBookForm);
router.post('/edit/:id', bookController.editBook);
router.get('/delete/:id', bookController.confirmDeleteBook);
router.post('/delete/:id', bookController.deleteBook);

module.exports = router;