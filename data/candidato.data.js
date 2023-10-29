const { Op } = require("sequelize");
const candidatoModel = require("../db/candidato.model");
const { experiencia, rol } = require("../db/experiencia.model");
const { habilidad_blanda } = require("../db/habilidad_blanda.model");
const { habilidad_tecnica } = require("../db/habilidad_tecnica.model");
const { idioma } = require("../db/idioma.model");
const informacionAcademica = require("../db/info_academica.model");
const { pais } = require("../db/pais.model");
const usuario = require("../db/usuario.model");

class CandidatoData {
    constructor() {

    }

    obtener(correoCandidato) {
        return new Promise(async (resolve, reject) => {
            try {
                var candidato = await candidatoModel.findAll({
                    attributes: { exclude: ["id_usuario"] },
                    include: [
                        {
                            model: usuario,
                            required: true,
                            where: {
                                email: correoCandidato
                            }
                        },
                        {
                            model: pais,
                            required: false,
                            as: 'paisOrigen'
                        },
                        {
                            model: experiencia,
                            required: false,
                            attributes: { exclude: ["id_rol"] },
                            include: {
                                model: rol,
                                required: false
                            }
                        },
                        {
                            model: habilidad_blanda,
                            required: false,
                            through: {
                                attributes: []
                            },
                            as: "habilidadesBlandas"
                        },
                        {
                            model: habilidad_tecnica,
                            required: false,
                            through: {
                                attributes: []
                            },
                            as: 'habilidadesTecnicas'
                        },
                        {
                            model: idioma,
                            required: false,
                            through: {
                                attributes: []
                            }
                        },
                        {
                            model: informacionAcademica,
                            required: false,
                            as: 'informacionAcademica'
                        },

                    ]
                });
                resolve(candidato[0]);
            } catch (error) {
                reject(error);
            }

        });
    }

    async obtenerPorId(idCandidato){
        let candidatoDB = await candidatoModel.findByPk(idCandidato);
        return candidatoDB;
    }

    insertar(candidato, usuario) {
        return new Promise(async (resolve, reject) => {
            try {
                let candidatoDB = await candidatoModel.findOrCreate({ where: { id_usuario: usuario.id }, defaults: candidato });
                candidatoDB = candidatoDB[0];
                for (let exp of candidato.experiencia) {
                    await experiencia.findOrCreate({ where: { nombre_empresa: exp.nombre_empresa, id_rol: exp.id_rol, id_candidato: candidatoDB.id }, defaults: exp });
                }
                let habilidadesBlandasDB = await habilidad_blanda.findAll({ where: { id: { [Op.in]: candidato.habilidadesBlandas } } });
                for (let hb of habilidadesBlandasDB) {
                    await candidatoDB.addHabilidadesBlanda(hb);
                }
                let habilidadesTecnicasDB = await habilidad_tecnica.findAll({ where: { id: { [Op.in]: candidato.habilidadesTecnicas } } });
                for (let ht of habilidadesTecnicasDB) {
                    await candidatoDB.addHabilidadesTecnica(ht);
                }
                let idiomasDB = await idioma.findAll({ where: { id: { [Op.in]: candidato.idiomas } } });
                for (let i of idiomasDB) {
                    await candidatoDB.addIdioma(i);
                }
                for (let info of candidato.informacionAcademica) {
                    await informacionAcademica.findOrCreate({ where: { institucion: info.institucion, titulo: info.titulo, id_candidato: candidatoDB.id }, defaults: info });
                }
                resolve(candidatoDB);
            } catch (error) {
                console.log(error);
                reject(error);
            }

        });
    }

    insertarExperiencia(idCandidato, experienciaIn){
        return new Promise(async (resolve,reject)=>{
            try {
                await experiencia.create({id_candidato: idCandidato, ...experienciaIn});
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

    insertarInformacionAcademica(idCandidato, infoAcademica){
        return new Promise(async (resolve,reject)=>{
            try {
                await informacionAcademica.create({id_candidato: idCandidato, ...infoAcademica});
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

    obtenerMetadata(language) {
        const filter_habilidad = `descripcion${language ? '_' + language : ''}`;
        const filter_rol = `rol${language ? '_' + language : ''}`;
        const filter_pais = `pais${language ? '_' + language : ''}`;
        const filter_lang = `idioma${language ? '_' + language : ''}`;

        return new Promise(async (resolve, reject) => {
            try {
                let habilidadesTecnicas = await habilidad_tecnica.findAll({ attributes: ['id', [filter_habilidad, 'descripcion']] });
                let habilidadesBlandas = await habilidad_blanda.findAll({ attributes: ['id', [filter_habilidad, 'descripcion']] });
                let idiomas = await idioma.findAll({ attributes: ['id', [filter_lang, 'idioma']] });
                let roles = await rol.findAll({ attributes: ['id', [filter_rol, 'rol']] });
                let paises = await pais.findAll({ attributes: ['id', [filter_pais, 'pais']] });
                let metadata = {
                    paises: paises,
                    habilidadesTecnicas: habilidadesTecnicas,
                    habilidadesBlandas: habilidadesBlandas,
                    idiomas: idiomas,
                    roles: roles
                }

                resolve(metadata);
            } catch (error) {
                reject(error);
            }

        })
    }
}

const candidatoData = new CandidatoData();

module.exports = candidatoData;
