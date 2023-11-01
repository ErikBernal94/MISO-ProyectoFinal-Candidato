const candidatoData = require ('../data/candidato.data');
const usuarioData = require('../data/usuario.data');

class CandidatoLogic {
    constructor(){

    }

    obtenerMetadata(language){
        return new Promise(async (resolve,reject)=>{
            var candidato = await candidatoData.obtenerMetadata(language);
            resolve(candidato);
        })
    }

    obtener(correo){
        return new Promise(async (resolve,reject)=>{
            try {
                var candidato = await candidatoData.obtener(correo);
                if(!candidato){
                    let usuario = await usuarioData.obtener(correo);
                    candidato = { usuario: usuario };
                }
                resolve(candidato);    
            } catch (error) {
                reject(error);
            }
            
        })
    }

    obtenerPorCaracteristicas(roles,paises,habilidadesBlandas,habilidadesTecnicas){
        return new Promise(async (resolve,reject)=>{
            try {
                var candidatos = await candidatoData.obtenerPorCaracteristicas(roles,paises,habilidadesBlandas,habilidadesTecnicas);
                resolve(candidatos);    
            } catch (error) {
                reject(error);
            }
            
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
                await candidatoData.insertar(candidato, usuariosBD);
                resolve('Informacion de candidato actualizada/insertada');    
            } catch (error) {
                reject(error);
            }
            
        })
    }

    agregarExperiencia(idCandidato, experiencia){
        return new Promise(async (resolve,reject)=>{
            try {
                let candidatoDB = await candidatoData.obtenerPorId(idCandidato);
                if(!candidatoDB) {
                    reject('El usuario no esta registrado');
                    return;
                }
                await candidatoData.insertarExperiencia(idCandidato,experiencia);
                resolve('Informacion de candidato actualizada/insertada');    
            } catch (error) {
                reject(error);
            }
            
        });
    }

    agregarInformacionAcademica(idCandidato, infoAcademica){
        return new Promise(async (resolve,reject)=>{
            try {
                let candidatoDB = await candidatoData.obtenerPorId(idCandidato);
                if(!candidatoDB) {
                    reject('El usuario no esta registrado');
                    return;
                }
                await candidatoData.insertarInformacionAcademica(idCandidato,infoAcademica);
                resolve('Informacion de candidato actualizada/insertada');    
            } catch (error) {
                reject(error);
            }
            
        });
    }

}

const candidato = new CandidatoLogic()

module.exports = candidato