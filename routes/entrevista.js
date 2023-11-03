var logicaCandidato = require ('../logic/candidato.logic');

var express = require('express');
const Joi = require('joi');
const entrevista = require('../logic/entrevista.logic');

var router = express.Router();

const schemaGet = Joi.object({
    idUsuario: Joi.number().min(1).required()
});

//  router get  candidato
router.get('/:idUsuario', async function(req, res) {

    const { error } = schemaGet.validate(req.params)
    if (error) {
        return res.status(400).json(
            {error: error.details[0].message}
        )
      }
    const { idUsuario } = req.params
    var result = await entrevista.obtener(idUsuario)
    if(!result){
        res.status(400).send();    
    }
    res.status(200).send(result);
});



module.exports = router;


