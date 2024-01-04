const express = require('express');
const router = express.Router();
const summaryController = require('../controllers/summaryController');

router.get('/', summaryController.getSummaries);
router.get('/create', summaryController.createSummaryForm);
router.post('/create', summaryController.createSummary);

module.exports = router;
