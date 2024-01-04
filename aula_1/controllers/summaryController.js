// controllers/summaryController.js
const Summary = require('../models/summary');

const summaries = [];

exports.getSummaries = (req, res) => {
  res.render('summaries', { summaries });
};

exports.createSummaryForm = (req, res) => {
  res.render('createSummary', { borrowedBooks });
};

exports.createSummary = (req, res) => {
  const { bookId, content } = req.body;
  const newSummary = new Summary(bookId, content);
  summaries.push(newSummary);
  res.redirect('/summaries');
};
