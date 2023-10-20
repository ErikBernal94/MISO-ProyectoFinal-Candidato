const usuario = require("../db/usuario.model");

class UsuarioData{
    constructor(){

    }

    obtener(correo){
        return new Promise(async (resolve,reject)=>{
            var usuarioDB = await usuario.findAll({
                where: {
                  email: correo
                }
              });
            resolve(usuarioDB[0]);
        });
    }
}

const usuarioData = new UsuarioData();

module.exports = usuarioData;