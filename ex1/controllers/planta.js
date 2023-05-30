var Planta = require('../models/planta')

// Exemplo de registo
/*
{
    "_id": 20615599,
    "Número de Registo": 9,
    "Código de rua": 1685467,
    "Rua": "Rua Júlio Dinis",
    "Local": "Murches",
    "Freguesia": "Alcabideche",
    "Espécie": "bordo negundo",
    "Nome Científico": "Acer negundo",
    "Origem": "",
    "Data de Plantação": "",
    "Estado": "Adulto",
    "Caldeira": "Sim",
    "Tutor": "Não",
    "Implantação": "Arruamento",
    "Gestor": "DGEV",
    "Data de actualização": "23/07/2021 19:50:55",
    "Número de intervenções": 12
  }
*/

// * `GET /plantas`: devolve uma lista com todos os registos;
module.exports.list = () => {
    return Planta
        .find({})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

// * `GET /plantas/:id`: devolve o registo com identificador `id`;
module.exports.getById = (id) => {
    return Planta.findById(id)
    // return Planta.find({_id: id})
    .then((result) => {
        return result
    }).catch((err) => {
        return err
    });
}

// * `GET /plantas?especie=EEEE`: devolve a lista dos registos correspondentes à espécie `EEEE`;
module.exports.getByEspecie = (esp) => {
    return Planta.find({"Espécie": esp})
    .then((result) => {
        return result
    }).catch((err) => {
        return err
    });
}

// * `GET /plantas?implant=AAA`: devolve a lista dos registos com implantação `AAA`;
module.exports.getByImplantacao = (imp) => {
    return Planta.find({"Implantação": imp})
    .then((result) => {
        return result
    }).catch((err) => {
        return err
    });
}

// * `GET /plantas/freguesias`: devolve a lista de freguesias ordenada alfabeticamente e sem repetições;
module.exports.distinctFreguesias = () => {
    return Planta.distinct("Freguesia")
    .then((result) => {
        return result
    }).catch((err) => {
        return err
    });
}

// * `GET /plantas/especies`: devolve a lista das espécies vegetais ordenada alfabeticamente e sem repetições;
module.exports.distinctEspecies = () => {
    return Planta.distinct("Espécie")
    .then((result) => {
        return result
    }).catch((err) => {
        return err
    });
}

// * `POST /plantas`: acrescenta um registo novo à BD;
module.exports.addPlanta = p => {
    return Planta.create(p)
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

// * `DELETE /plantas/:id`: elimina da BD o registo com o identificador `id`.
module.exports.deletePlanta = id => {
    return Planta.deleteOne({ _id: id })
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}
