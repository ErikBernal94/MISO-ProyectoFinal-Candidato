const habilidadesBlandasMock = [
    {
        id: 1,
        descripcion: "Comunicacion"
    },
    {
        id: 2,
        descripcion: "Asertividad"
    }
]

class HabilidadBlanda{
    constructor(){

    }

    findAll(object = null){
        return new Promise(async (resolve,reject)=>{
            resolve(habilidadesBlandasMock);
        });
    }
}

const habilidad_blanda = new HabilidadBlanda();

module.exports = { habilidad_blanda };