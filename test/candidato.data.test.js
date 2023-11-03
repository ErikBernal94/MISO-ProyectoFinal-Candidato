
const data = require('../data/candidato.data');

jest.mock("../db/candidato.model");
jest.mock("../db/experiencia.model");
jest.mock("../db/habilidad_blanda.model");
jest.mock("../db/habilidad_tecnica.model");
jest.mock("../db/idioma.model");
jest.mock("../db/info_academica.model");
jest.mock("../db/pais.model");

const candidatoMock = {
    id: 30,
    edad: 45,
    numero_telefono: "4216200",
    id_pais: 1,
    usuario: {
        id: 10,
        nombre_completo: "Zaray Rey",
        email: "zrey@email.com",
        contrasena: "455464"
    },
    paisOrigen: {
        id: 1,
        pais: "Colombia"
    },
    experiencia: [
        {
            id: 17,
            id_candidato: 30,
            nombre_empresa: "Sophos solutions",
            fecha_inicio: null,
            fecha_fin: null,
            actual: false,
            descripcion_actividades: null,
            Rol: {
                id: 1,
                rol: "Desaarrollador BS JR"
            }
        }
    ],
    habilidadesBlandas: [
        {
            id: 2,
            descripcion: "Asertividad"
        },
        {
            id: 1,
            descripcion: "Comunicacion"
        }
    ],
    habilidadesTecnicas: [
        {
            id: 1,
            descripcion: "NodeJs"
        },
        {
            id: 2,
            descripcion: "Angular"
        }
    ],
    idiomas: [
        {
            id: 1,
            idioma: "Español"
        },
        {
            id: 2,
            idioma: "Ingles"
        }
    ],
    informacionAcademica: [
        {
            id: 13,
            id_candidato: 30,
            institucion: "Universidad de Pamplona",
            titulo: "Ingeniero de sistemas",
            fecha_inicio: null,
            fecha_fin: null,
            en_curso: false
        }
    ]
}

const metadataMock = {
    paises: [
        {
            id: 1,
            pais: "Colombia"
        },
        {
            id: 2,
            pais: "USA"
        }
    ],
    habilidadesTecnicas: [
        {
            id: 1,
            descripcion: "NodeJs"
        },
        {
            id: 2,
            descripcion: "Angular"
        }
    ],
    habilidadesBlandas: [
        {
            id: 1,
            descripcion: "Comunicacion"
        },
        {
            id: 2,
            descripcion: "Asertividad"
        }
    ],
    idiomas: [
        {
            id: 1,
            idioma: "Español"
        },
        {
            id: 2,
            idioma: "Ingles"
        }
    ],
    roles: [
        {
            id: 1,
            rol: "Desaarrollador BS JR"
        }
    ]
}


describe('obtener', () =>{
    it('debería obtener candidato correctamente', async ()=>{
        const correo = "correo@correo.com" 
        const result = await data.obtener(correo);
        expect(result).toEqual(candidatoMock);
    });
});

describe('obtenerMetadata', () =>{
    it('debería obtener metadata correctamente', async ()=>{
        
        const result = await data.obtenerMetadata();
        expect(result).toEqual(metadataMock);
    });
    it('debería obtener metadata correctamente en ingles', async ()=>{
        
        const result = await data.obtenerMetadata('en');
        expect(result).toEqual(metadataMock);
    });
});

describe('obtener por caracteristicas', () =>{
    it('debería obtener candidato correctamente', async ()=>{
        const roles = [1,2]; 
        const paises = [1,2]; 
        const habilidadesBlandas = [1,2]; 
        const habilidadesTecnicas = [1,2]; 
        const result = await data.obtenerPorCaracteristicas(roles, paises, habilidadesBlandas, habilidadesTecnicas);
        expect(result).toEqual([candidatoMock]);
    });
});

describe('obtener por id', () =>{
    it('debería obtener candidato correctamente', async ()=>{
        const idCandidato = 1;
        const result = await data.obtenerPorId(idCandidato);
        expect(result).toEqual([candidatoMock]);
    });
});

describe('insertar', () =>{
    it('debería insertar correctamente', async ()=>{
        const candidato = candidatoMock;
        const usuario = candidatoMock.usuario;
        const result = await data.insertar(candidato, usuario);
        expect(result.candidatoValue).toEqual(candidatoMock);
    });
});