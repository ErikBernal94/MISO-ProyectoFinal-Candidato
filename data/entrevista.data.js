const { entrevista } = require("../db/entrevista.model");
const usuario = require("../db/usuario.model");

class EntrevistaData{
    constructor(){

    }

    obtener(idUsuario){
        return new Promise(async (resolve,reject)=>{
            var entrevistaDB = await entrevista.findAll({
                include: [
                    {
                        model: usuario,
                        required: true,
                        attributes: { exclude: ["contrasena"] },
                        through: {
                            attributes: []
                        },
                        where: {
                            id: idUsuario
                        }
                    }
                ]
              });
            resolve(entrevistaDB);
        });
    }
}

const entrevistaData = new EntrevistaData();

module.exports = entrevistaData;