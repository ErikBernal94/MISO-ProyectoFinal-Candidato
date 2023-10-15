const candidatoData = require ('../data/candidato.data');
const usuarioData = require('../data/usuario.data');

class CandidatoLogic {
    constructor(){

    }

    obtenerMetadata(){
        return new Promise(async (resolve,reject)=>{
            var candidato = await candidatoData.obtenerMetadata();
            resolve(candidato);
        })
    }

    obtener(correo){
        return new Promise(async (resolve,reject)=>{
            var candidato = await candidatoData.obtener(correo);
            resolve(candidato);
        })
    }

    crear(candidato){
        return new Promise(async (resolve,reject)=>{
            try {
                const usuariosBD = await usuarioData.obtener(candidato.email);
                if(!usuariosBD || usuariosBD.length === 0) {
                    reject('El usuario no esta registrado');
                    return;
                }
                console.log(usuariosBD);
                await candidatoData.insertar(candidato, usuariosBD[0]);
                resolve('Informacion de candidato actualizada/insertada');    
            } catch (error) {
                reject(error);
            }
            
        })
    }

}

const candidato = new CandidatoLogic()

module.exports = candidato