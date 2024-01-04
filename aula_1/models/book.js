// models/bookModel.js
class Book {
    constructor(id, title, author, genre, publicationYear, availability) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.publicationYear = publicationYear;
      this.availability = availability;
    }
  }
  
  module.exports = Book; 