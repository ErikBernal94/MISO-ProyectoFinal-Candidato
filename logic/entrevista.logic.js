const entrevistaData = require('../data/entrevista.data');
const usuarioData = require('../data/usuario.data');

class EntrevistaLogic {
    constructor(){

    }

    obtener(idUsuario){
        return new Promise(async (resolve,reject)=>{
            var candidato = await entrevistaData.obtener(idUsuario);
            resolve(candidato);
        })
    }

}

const entrevista = new EntrevistaLogic()

module.exports = entrevista