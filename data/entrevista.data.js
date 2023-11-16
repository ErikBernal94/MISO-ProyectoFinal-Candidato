const { entrevista, entrevista_usuario } = require("../db/entrevista.model");
const usuario = require("../db/usuario.model");

class EntrevistaData{
    constructor(){

    }

    obtener(idUsuario){
        return new Promise(async (resolve,reject)=>{
            let resultados = await entrevista_usuario.findAll({where: {id_usuario: idUsuario}});
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
              const dataResultados = resultados.map((e) => {
                return e.dataValues;
              })
              let dataResponse = [];
              entrevistaDB.forEach(element => {
                if(element.usuarios[0].id_tipo_usuario !== 2){
                    const resultado = dataResultados.find(x => x.id_entrevista == element.id);
                    element.dataValues.resultado = resultado.resultados;
                    
                }
                dataResponse.push({
                    ...element.dataValues                    
                })
              });
            resolve(dataResponse);
        });
    }
}

const entrevistaData = new EntrevistaData();

module.exports = entrevistaData;