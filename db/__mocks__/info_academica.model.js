

class InformacionAcademica{
    constructor(){

    }

    findOrCreate(object){
        return new Promise(async (resolve,reject)=>{
            resolve(true);
        });
    }
}

const informacionAcademica = new InformacionAcademica();

module.exports = informacionAcademica;