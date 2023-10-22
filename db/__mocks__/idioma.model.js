const idiomasMock = [
    {
        id: 1,
        idioma: "Español"
    },
    {
        id: 2,
        idioma: "Ingles"
    }
]

class Idiomas{
    constructor(){

    }

    findAll(object= null){
        return new Promise(async (resolve,reject)=>{
            resolve(idiomasMock);
        });
    }
}

const idioma = new Idiomas();

module.exports ={ idioma };