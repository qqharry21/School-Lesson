var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/combined', function (req, res, next) {
  res.render('eiserCombined_xx', { title: 'Eiser' });
});

router.get('/featured', function (req, res, next) {
  res.render('eiserFeatured_xx', { title: 'Eiser' });
});

router.get('/new', function (req, res, next) {
  res.render('eiserNew_xx', { title: 'Eiser' });
});

module.exports = router;
