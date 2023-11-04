jest.mock("../db/entrevista.model");
const data = require('../data/entrevista.data');

const entrevistaMock = [{
    id: 1,
    asunto: "Entrevista test",
    fecha: "2021-15-25",
    hora_inicio: "12:00",
    hora_fin: "13:00",
    activa: true
}]


describe('obtener', () =>{
    it('debería obtener entrevista correctamente', async ()=>{
        const result = await data.obtener(entrevistaMock[0].id);
        expect(result).toEqual(entrevistaMock);
    });
});