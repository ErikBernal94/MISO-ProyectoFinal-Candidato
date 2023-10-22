const habilidadesTecnicasMock = [
    {
        id: 1,
        descripcion: "NodeJs"
    },
    {
        id: 2,
        descripcion: "Angular"
    }
]

class HabilidadesTecnicas{
    constructor(){

    }

    findAll(object = null){
        return new Promise(async (resolve,reject)=>{
            resolve(habilidadesTecnicasMock);
        });
    }
}

const habilidad_tecnica = new HabilidadesTecnicas();

module.exports = { habilidad_tecnica };