const usuarioMock = [{
    id: 2,
    nombre_completo: "Juan Martinez",
    email: "correo@correo.com",
    contrasena: "123456",
    id_tipo_usuario: 1
}]


class Usuario {
    constructor(){

    }

    findAll(object){
        return new Promise(async (resolve,reject)=>{
            resolve(usuarioMock);
        });
    }
}

const usuario = new Usuario();

module.exports =  usuario ;