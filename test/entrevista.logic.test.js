jest.mock("../db/entrevista.model");
const data = require('../data/entrevista.data');
const logic = require("../logic/entrevista.logic")

describe('obtener', () =>{
    it('debería obtener entrevistas correctamente', async ()=>{
        jest.spyOn(data, 'obtener').mockResolvedValue({
            rowCount: 1,
            rows:[{
              proyecto:'proyecto'
            }]
          });
        const result = await logic.obtener(1);

        expect(result.rowCount).toEqual(1);
    });
});