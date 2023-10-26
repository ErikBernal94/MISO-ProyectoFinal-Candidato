var logicaCandidato = require ('../logic/candidato.logic');

var express = require('express');
const Joi = require('joi');

var router = express.Router();

const schemaGet = Joi.object({
    correoCandidato: Joi.string().min(6).max(200).required().email()
});
const schemaPost = Joi.object({
    email: Joi.string().min(6).max(200).required().email(),
    edad: Joi.number().integer().min(0).required(),
    id_pais: Joi.number().integer().min(0).required(),
    numero_telefono: Joi.string().min(6).max(20).required(),
    experiencia: Joi.array().required(),
    informacionAcademica: Joi.array().required(),
    habilidadesBlandas: Joi.array().required(),
    habilidadesTecnicas: Joi.array().required(),
    idiomas: Joi.array().required(),

});



router.get('/info/:correoCandidato', async function(req, res) {

    const { error } = schemaGet.validate(req.params)
    if (error) {
        return res.status(400).json(
            {error: error.details[0].message}
        )
      }
    const { correoCandidato } = req.params
    var result = await logicaCandidato.obtener(correoCandidato);
    if(!result){
        res.status(400).send();    
    }
    res.status(200).send(result);
});

router.post('/', async function(req, res) {
    try {
        const { error } = schemaPost.validate(req.body)
        if (error) {
            return res.status(400).json(
                {error: error.details[0].message}
            )
        }
        const candidatoIn = req.body
        var result = await logicaCandidato.crear(candidatoIn);
        if(!result){
            res.status(400).send();    
        }
        res.status(200).send(result);    
    } catch (error) {
        res.status(500).send(error);
    }
    
});

router.get('/metadata/', async function(req, res) {
    const language = req.query.language;
    const result = await logicaCandidato.obtenerMetadata(language);
    if(!result){
        res.status(400).send();    
    }
    res.status(200).send(result);
});

module.exports = router;


