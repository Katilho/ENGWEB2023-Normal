var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:15030/plantas')
  .then((result) => {
    res.render('index', { title: 'Plantas' , plantas: result.data })
  }).catch((err) => {
    res.render('error', { error: err });
  });
});

router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:15030/plantas/'+ req.params.id)
  .then((result) => {
    res.render('planta', { title: 'Planta '+req.params.id , planta: result.data })
  }).catch((err) => {
    res.render('error', { error: err });
  });
});

//* ID é o nome da especie
router.get('/especies/:id', function(req, res, next) {
  axios.get('http://localhost:15030/plantas?especie='+ req.params.id)
  .then((result) => {
    res.render('especie', { title: 'Espécie '+req.params.id , especies: result.data })
  }).catch((err) => {
    res.render('error', { error: err });
  });
});

module.exports = router;
