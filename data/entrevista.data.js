const { entrevista } = require("../db/entrevista.model");
const usuario = require("../db/usuario.model");

class EntrevistaData{
    constructor(){

    }

    obtener(idUsuario){
        return new Promise(async (resolve,reject)=>{
            let usuarioExiste = await usuario.findAll({where: {id: idUsuario}});
            let excluir = [];
            if (usuarioExiste.length > 0 && usuarioExiste[0].dataValues.id_tipo_usuario === 2){
                excluir = ["resultados"];
            }
            console.log(excluir)
            var entrevistaDB = await entrevista.findAll({
                attributes: { exclude: excluir },
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
              },);
            resolve(entrevistaDB);
        });
    }
}

const entrevistaData = new EntrevistaData();

module.exports = entrevistaData;