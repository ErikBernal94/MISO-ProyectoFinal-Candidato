var logicaCandidato = require ('../logic/candidato.logic');

var express = require('express');

var router = express.Router();

router.get('/info/:correoCandidato', async function(req, res) {

    const { correoCandidato } = req.params
    var result = await logicaCandidato.obtener(correoCandidato);
    if(!result){
        res.status(400).send();    
    }
    res.status(200).send(result);
});

router.post('/', async function(req, res) {
    try {
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
    console.log("Aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    var result = await logicaCandidato.obtenerMetadata();
    if(!result){
        res.status(400).send();    
    }
    res.status(200).send(result);
});

module.exports = router;


