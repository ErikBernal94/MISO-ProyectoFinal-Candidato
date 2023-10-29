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

const schemaBuscar = Joi.object({
    
    roles: Joi.array().required(),
    paises: Joi.array().required(),
    habilidadesBlandas: Joi.array().required(),
    habilidadesTecnicas: Joi.array().required(),
    

});

const schemaPostExp = Joi.object({
    id_candidato: Joi.number().integer().min(0).required(),
    experiencia: Joi.object().required(),
});

const schemaPostInfoAcademica = Joi.object({
    id_candidato: Joi.number().integer().min(0).required(),
    informacionAcademica: Joi.object().required(),
});

//  router get  candidato
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

router.post('/buscar', async function(req, res) {

    const { error } = schemaBuscar.validate(req.body)
    if (error) {
        return res.status(400).json(
            {error: error.details[0].message}
        )
      }
    const { paises, roles, habilidadesBlandas, habilidadesTecnicas } = req.body
    var result = await logicaCandidato.obtenerPorCaracteristicas(roles, paises, habilidadesBlandas, habilidadesTecnicas);
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

router.post('/experiencia', async function(req, res) {
    try {
        const { error } = schemaPostExp.validate(req.body)
        if (error) {
            return res.status(400).json(
                {error: error.details[0].message}
            )
        }
        const {id_candidato, experiencia } = req.body
        var result = await logicaCandidato.agregarExperiencia(id_candidato, experiencia);
        if(!result){
            res.status(400).send();    
        }
        res.status(200).send(result);    
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/infoAcademica', async function(req, res) {
    try {
        const { error } = schemaPostInfoAcademica.validate(req.body)
        if (error) {
            return res.status(400).json(
                {error: error.details[0].message}
            )
        }
        const {id_candidato, informacionAcademica } = req.body
        var result = await logicaCandidato.agregarInformacionAcademica(id_candidato, informacionAcademica);
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


