const roles = [
    {
        id: 1,
        rol: "Desaarrollador BS JR"
    }
]

class Experiencia{
    constructor(){

    }
    findAll(){
        return new Promise(async (resolve,reject)=>{
            resolve(true);
        });
    }
    findOrCreate(object){
        return new Promise(async (resolve,reject)=>{
            resolve(true);
        });
    }
}

class Rol{
    constructor(){

    }

    findAll(object= null){
        return new Promise(async (resolve,reject)=>{
            resolve(roles);
        });
    }
}

const experiencia = new Experiencia();
const rol = new Rol();

module.exports = { experiencia , rol };