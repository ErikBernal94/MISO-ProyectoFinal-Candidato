-- DROP SCHEMA candidato;

CREATE SCHEMA candidato AUTHORIZATION postgres;

-- candidato.candidato definition

-- Drop table

-- DROP TABLE candidato.candidato;

CREATE TABLE candidato.candidato (
	id serial4 NOT NULL,
	edad int4 NULL,
	numero_telefono varchar NULL,
	id_pais int4 NULL,
	id_usuario int4 NOT NULL,
	CONSTRAINT candidato_pk PRIMARY KEY (id)
);


-- candidato.habilidad_blanda_candidato definition

-- Drop table

-- DROP TABLE candidato.habilidad_blanda_candidato;

CREATE TABLE candidato.habilidad_blanda_candidato (
	id serial4 NOT NULL,
	id_candidato int4 NOT NULL,
	id_habilidad_blanda int4 NOT NULL,
	CONSTRAINT habilidadblandacandidato_pk PRIMARY KEY (id)
);


-- candidato.habilidad_tecnica_candidato definition

-- Drop table

-- DROP TABLE candidato.habilidad_tecnica_candidato;

CREATE TABLE candidato.habilidad_tecnica_candidato (
	id serial4 NOT NULL,
	id_habilidad_tecnica int4 NOT NULL,
	id_candidato int4 NOT NULL,
	CONSTRAINT habilidadtecnicacandidato_pk PRIMARY KEY (id)
);


-- candidato.idioma_candidato definition

-- Drop table

-- DROP TABLE candidato.idioma_candidato;

CREATE TABLE candidato.idioma_candidato (
	id serial4 NOT NULL,
	id_candidato int4 NOT NULL,
	id_idioma int4 NOT NULL,
	CONSTRAINT idiomacandidato_pk PRIMARY KEY (id)
);


-- candidato.informacion_academica definition

-- Drop table

-- DROP TABLE candidato.informacion_academica;

CREATE TABLE candidato.informacion_academica (
	id serial4 NOT NULL,
	id_candidato int4 NOT NULL,
	institucion varchar NOT NULL,
	titulo varchar NOT NULL,
	fecha_inicio date NULL,
	fecha_fin date NULL,
	en_curso bool NULL DEFAULT false,
	CONSTRAINT informacionacademica_pk PRIMARY KEY (id)
);


-- candidato.informacion_experiencia definition

-- Drop table

-- DROP TABLE candidato.informacion_experiencia;

CREATE TABLE candidato.informacion_experiencia (
	id serial4 NOT NULL,
	id_candidato int4 NOT NULL,
	nombre_empresa varchar NULL,
	id_rol int4 NULL,
	fecha_inicio date NULL,
	fecha_fin date NULL,
	actual bool NULL,
	descripcion_actividades text NULL,
	CONSTRAINT informacionexperiencia_pk PRIMARY KEY (id)
);

CREATE SCHEMA metadata AUTHORIZATION postgres;

-- metadata.area_negocio definition

-- Drop table

-- DROP TABLE metadata.area_negocio;

CREATE TABLE metadata.area_negocio (
	id serial4 NOT NULL,
	descripcion varchar NOT NULL,
	CONSTRAINT areanegocio_pk PRIMARY KEY (id)
);


-- metadata.habilidad_blanda definition

-- Drop table

-- DROP TABLE metadata.habilidad_blanda;

CREATE TABLE metadata.habilidad_blanda (
	id serial4 NOT NULL,
	descripcion varchar NOT NULL,
	CONSTRAINT habilidadblanda_pk PRIMARY KEY (id)
);


-- metadata.habilidad_tecnica definition

-- Drop table

-- DROP TABLE metadata.habilidad_tecnica;

CREATE TABLE metadata.habilidad_tecnica (
	id serial4 NOT NULL,
	descripcion varchar NOT NULL,
	CONSTRAINT habilidadtecnica_pk PRIMARY KEY (id)
);


-- metadata.idioma definition

-- Drop table

-- DROP TABLE metadata.idioma;

CREATE TABLE metadata.idioma (
	id serial4 NOT NULL,
	idioma varchar NOT NULL,
	CONSTRAINT idioma_pk PRIMARY KEY (id)
);


-- metadata.pais definition

-- Drop table

-- DROP TABLE metadata.pais;

CREATE TABLE metadata.pais (
	id serial4 NOT NULL,
	pais varchar NOT NULL,
	CONSTRAINT pais_pk PRIMARY KEY (id)
);


-- metadata.rol definition

-- Drop table

-- DROP TABLE metadata.rol;

CREATE TABLE metadata.rol (
	id serial4 NOT NULL,
	rol varchar NOT NULL,
	CONSTRAINT rol_pk PRIMARY KEY (id)
);


-- metadata.tipo_empresa definition

-- Drop table

-- DROP TABLE metadata.tipo_empresa;

CREATE TABLE metadata.tipo_empresa (
	id serial4 NOT NULL,
	tipo_empresa varchar NOT NULL,
	CONSTRAINT tipoempresa_pk PRIMARY KEY (id)
);


-- metadata.ciudad definition

-- Drop table

-- DROP TABLE metadata.ciudad;

CREATE TABLE metadata.ciudad (
	id serial4 NOT NULL,
	ciudad varchar NOT NULL,
	id_pais int4 NOT NULL,
	CONSTRAINT ciudad_pk PRIMARY KEY (id),
	CONSTRAINT pais_fk FOREIGN KEY (id_pais) REFERENCES metadata.pais(id)
);

-- candidato.candidato foreign keys

ALTER TABLE candidato.candidato ADD CONSTRAINT paiscandidato_fk FOREIGN KEY (id_pais) REFERENCES metadata.pais(id);
ALTER TABLE candidato.candidato ADD CONSTRAINT usuario_fk FOREIGN KEY (id_usuario) REFERENCES registro.usuarios(id);


-- candidato.habilidad_blanda_candidato foreign keys

ALTER TABLE candidato.habilidad_blanda_candidato ADD CONSTRAINT candidato_fk FOREIGN KEY (id_candidato) REFERENCES candidato.candidato(id);
ALTER TABLE candidato.habilidad_blanda_candidato ADD CONSTRAINT habilidadblanda_fk FOREIGN KEY (id_habilidad_blanda) REFERENCES metadata.habilidad_blanda(id);


-- candidato.habilidad_tecnica_candidato foreign keys

ALTER TABLE candidato.habilidad_tecnica_candidato ADD CONSTRAINT candidato_fk FOREIGN KEY (id_candidato) REFERENCES candidato.candidato(id);
ALTER TABLE candidato.habilidad_tecnica_candidato ADD CONSTRAINT habilidadtecnica_fk FOREIGN KEY (id_habilidad_tecnica) REFERENCES metadata.habilidad_tecnica(id);


-- candidato.idioma_candidato foreign keys

ALTER TABLE candidato.idioma_candidato ADD CONSTRAINT candidato_fk FOREIGN KEY (id_candidato) REFERENCES candidato.candidato(id);
ALTER TABLE candidato.idioma_candidato ADD CONSTRAINT idioma_fk FOREIGN KEY (id_idioma) REFERENCES metadata.idioma(id);


-- candidato.informacion_academica foreign keys

ALTER TABLE candidato.informacion_academica ADD CONSTRAINT candidato_fk FOREIGN KEY (id_candidato) REFERENCES candidato.candidato(id);


-- candidato.informacion_experiencia foreign keys

ALTER TABLE candidato.informacion_experiencia ADD CONSTRAINT candidato_fk FOREIGN KEY (id_candidato) REFERENCES candidato.candidato(id);
ALTER TABLE candidato.informacion_experiencia ADD CONSTRAINT rol_fk FOREIGN KEY (id_rol) REFERENCES metadata.rol(id);

-- DROP SCHEMA metadata;

