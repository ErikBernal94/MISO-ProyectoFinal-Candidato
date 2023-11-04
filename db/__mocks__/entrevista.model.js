const entrevistaMock = [{
    id: 1,
    asunto: "Entrevista test",
    fecha: "2021-15-25",
    hora_inicio: "12:00",
    hora_fin: "13:00",
    activa: true
}]


class Entrevista {
    constructor(){

    }

    findAll(object){
        return new Promise(async (resolve,reject)=>{
            resolve(entrevistaMock);
        });
    }
}

const entrevista = new Entrevista();

module.exports =  { entrevista }  ;