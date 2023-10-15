var db = require ("../db/db.js")

class Data{
    constructor()
    {
    }

    insert(tabla, columnas, valores){
        return new Promise((resolve)=>{
            var indexes = columnas.map((col, i) => `$${i+1}`)
            var query = `INSERT INTO ${tabla} (${columnas.join(',')}) VALUES (${indexes.join(',')}) RETURNING *`;
            db.query(query, [valores], (error, result) =>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            });
        });
    }

    update(tabla, columnasSet, valoresSet, columnasWhere, valoresWhere){
        return new Promise((resolve)=>{
            var querySet = columnasSet.map((col, i) => `${col} = $${i+1}`)
            var queryWhere = columnasWhere.map((col, i) => `${col} = $${columnasSet.length + i + 2}`)
            var query = `UPDATE ${tabla} SET ${querySet.join(',')} WHERE ${queryWhere.join(' ')}`;
            db.query(query, [valoresSet, valoresWhere], (error, result) =>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            });
        });
    }


    select(tabla, columnasWhere, valoresWhere){
        return new Promise((resolve)=>{
            var queryWhere = columnasWhere.map((col, i) => `${col} = $${i+1}`);
            var query = `SELECT * FROM ${tabla} WHERE ${queryWhere.join(' ')}`;
            db.query(query, [valoresWhere], (error, result) =>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            });
        });
    }

    
}

const data = new Data()
module.exports = data