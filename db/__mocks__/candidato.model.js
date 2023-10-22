
const candidatoMock = {
    id: 30,
    edad: 45,
    numero_telefono: "4216200",
    id_pais: 1,
    usuario: {
        id: 10,
        nombre_completo: "Zaray Rey",
        email: "zrey@email.com",
        contrasena: "455464"
    },
    paisOrigen: {
        id: 1,
        pais: "Colombia"
    },
    experiencia: [
        {
            id: 17,
            id_candidato: 30,
            nombre_empresa: "Sophos solutions",
            fecha_inicio: null,
            fecha_fin: null,
            actual: false,
            descripcion_actividades: null,
            Rol: {
                id: 1,
                rol: "Desaarrollador BS JR"
            }
        }
    ],
    habilidadesBlandas: [
        {
            id: 2,
            descripcion: "Asertividad"
        },
        {
            id: 1,
            descripcion: "Comunicacion"
        }
    ],
    habilidadesTecnicas: [
        {
            id: 1,
            descripcion: "NodeJs"
        },
        {
            id: 2,
            descripcion: "Angular"
        }
    ],
    idiomas: [
        {
            id: 1,
            idioma: "Español"
        },
        {
            id: 2,
            idioma: "Ingles"
        }
    ],
    informacionAcademica: [
        {
            id: 13,
            id_candidato: 30,
            institucion: "Universidad de Pamplona",
            titulo: "Ingeniero de sistemas",
            fecha_inicio: null,
            fecha_fin: null,
            en_curso: false
        }
    ]
}

class Candidato{
    constructor(candidatoMock= null){

    }

    findAll(object){
        return new Promise(async (resolve,reject)=>{
            resolve([
                candidatoMock
            ]);
        });
    }

    findOrCreate(object){
        return new Promise(async (resolve,reject)=>{
            resolve([
                new Candidato(candidatoMock) 
            ]);
        });
    }

    addHabilidadesBlanda(hb){
        return new Promise(async (resolve,reject)=>{
            resolve(true);
        });
    }

    addHabilidadesTecnica(){
        return new Promise(async (resolve,reject)=>{
            resolve(true);
        });
    }

    addIdioma(){
        return new Promise(async (resolve,reject)=>{
            resolve(true);
        });
    }
}

const candidato = new Candidato();

module.exports = candidato;