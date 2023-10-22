const paises = [
    {
        id: 1,
        pais: "Colombia"
    },
    {
        id: 2,
        pais: "USA"
    }
]

class Pais{
    constructor(){

    }

    findAll(object= null){
        return new Promise(async (resolve,reject)=>{
            resolve(paises);
        });
    }
}

const pais = new Pais();

module.exports =  { pais };