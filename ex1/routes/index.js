var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta')

/*
* `GET /plantas`: devolve uma lista com todos os registos;
* `GET /plantas?especie=EEEE`: devolve a lista dos registos correspondentes à espécie `EEEE`;
* `GET /plantas?implant=AAA`: devolve a lista dos registos com implantação `AAA`;

*/

/* GET home page. */
router.get('/plantas', function(req, res, next) {
  if(Object.keys(req.query).length > 0){
    if(req.query.especie){
      Planta.getByEspecie(req.query.especie)
      .then((result) => {
        res.jsonp(result)
      }).catch((err) => {
        res.jsonp(err)
      });
    }
    else if(req.query.implant){
      Planta.getByImplantacao(req.query.implant)
      .then((result) => {
        res.jsonp(result)
      }).catch((err) => {
        res.jsonp(err)
      });
    }
    else{
      res.jsonp({erro: 'Query inválida'})
    }
  }
  else{
    Planta.list()
    .then((result) => {
      res.jsonp(result)
    }).catch((err) => {
      res.jsonp(err)
    });
  }
});

// * `GET /plantas/freguesias`: devolve a lista de freguesias ordenada alfabeticamente e sem repetições;
// * `GET /plantas/especies`: devolve a lista das espécies vegetais ordenada alfabeticamente e sem repetições;
// * `GET /plantas/:id`: devolve o registo com identificador `id`;

router.get('/plantas/freguesias', function(req, res, next) {
  Planta.distinctFreguesias()
  .then((result) => {
    res.jsonp(result)
  }).catch((err) => {
    res.jsonp(err)
  });
})


router.get('/plantas/especies', function(req, res, next) {
  Planta.distinctEspecies()
  .then((result) => {
    res.jsonp(result)
  }).catch((err) => {
    res.jsonp(err)
  });
})

router.get('/plantas/:id', function(req, res, next) {
  Planta.getById(req.params.id)
  .then((result) => {
    res.jsonp(result)
  }).catch((err) => {
    res.jsonp(err)
  });
})



// * `POST /plantas`: acrescenta um registo novo à BD;
// * `DELETE /plantas/:id`: elimina da BD o registo com o identificador `id`.

router.post('/plantas', function(req, res, next) {
  Planta.addPlanta(req.body)
  .then((result) => {
    res.jsonp(result)
  }).catch((err) => {
    res.jsonp(err)
  });
})

router.delete('/plantas/:id', function(req, res, next) {
  Planta.deletePlanta(req.params.id)
  .then((result) => {
    res.jsonp(result)
  }).catch((err) => {
    res.jsonp(err)
  });

})

/*

    {
        "_id": 20615557,
        "Número de Registo": 3,
        "Código de rua": 1685467,
        "Rua": "Rua Júlio Dinis",
        "Local": "Zambujeiro",
        "Freguesia": "Alcabideche",
        "Espécie": "pinheiro manso",
        "Nome Científico": "Pinus pinea",
        "Origem": "",
        "Data de Plantação": "",
        "Estado": "Adulto",
        "Caldeira": "Sim",
        "Tutor": "Sim",
        "Implantação": "Arruamento",
        "Gestor": "DGEV",
        "Data de actualização": "23/07/2021 19:50:54",
        "Número de intervenções": 6
    }

*/

module.exports = router;
