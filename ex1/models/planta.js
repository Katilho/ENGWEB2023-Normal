const mongoose = require('mongoose')

// https://transform.tools/json-to-mongoose


var plantaSchema = new mongoose.Schema({
    "_id": {
      "type": "Number"
    },
    "Número de Registo": {
      "type": "Number"
    },
    "Código de rua": {
      "type": "Number"
    },
    "Rua": {
      "type": "String"
    },
    "Local": {
      "type": "String"
    },
    "Freguesia": {
      "type": "String"
    },
    "Espécie": {
      "type": "String"
    },
    "Nome Científico": {
      "type": "String"
    },
    "Origem": {
      "type": "String"
    },
    "Data de Plantação": {
      "type": "String"
    },
    "Estado": {
      "type": "String"
    },
    "Caldeira": {
      "type": "String"
    },
    "Tutor": {
      "type": "String"
    },
    "Implantação": {
      "type": "String"
    },
    "Gestor": {
      "type": "String"
    },
    "Data de actualização": {
      "type": "String"
    },
    "Número de intervenções": {
      "type": "Number"
    }
  });

module.exports = mongoose.model('plantas', plantaSchema)