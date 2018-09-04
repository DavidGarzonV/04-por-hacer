const fs  = require('fs');

let listadoPorHacer = [];

const guardarDb = () =>
{
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {

        if (err) throw new Error('Error al Grabar',err);       
    });    
}


const cargarDb = () =>{
    
    try{
        listadoPorHacer =  require('../db/data.json');
    }catch(err){
        listadoPorHacer = [];
    }

}

const crear = (desc) =>{

    cargarDb();

    let porHacer = {
        desc,
        completado : false
    };

    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

const getListado = () =>{
    cargarDb();
    return listadoPorHacer;
}

const actualizar = (desc,completado = true) =>{
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea =>{
        return tarea.desc === desc;
    });

    if(index >=0){
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    }else{
        return false;
    }
}

const borrar = (desc) =>{
    cargarDb();

    // let index = listadoPorHacer.findIndex(tarea => tarea.desc === desc);
    
    // if(index >=0){
    //     listadoPorHacer.splice(index,1);
    //     guardarDb();
    //     return true;
    // }else{
    //     return false;
    // }

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.desc !== desc);

    if(nuevoListado.length === listadoPorHacer.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDb();
        return true;
    }
    
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}