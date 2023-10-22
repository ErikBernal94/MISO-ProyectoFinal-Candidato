jest.mock("../db/usuario.model");
const data = require('../data/usuario.data');
// const data = require('../db/usuario.model');



const usuarioMock = {
    id: 2,
    nombre_completo: "Juan Martinez",
    email: "correo@correo.com",
    contrasena: "123456",
    id_tipo_usuario: 1
}

describe('obtener', () =>{
    it('debería obtener usuario correctamente', async ()=>{
        const correo = "correo@correo.com" 
        const result = await data.obtener(correo);
        expect(result).toEqual(usuarioMock);
    });
});