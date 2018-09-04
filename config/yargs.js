const descripcion = {
        demand: true,
        alias:'d',
        desc: 'Descripcion de la tarea por hacer'  
}

const completado = {   
        alias:'c',
        default: true  
}

const argv = require('yargs')
    .command('crear','Crear un elemento por hacer',{
        descripcion
    })
    .command('actualizar','Actualiza el estado completado de una tarea',{
        descripcion,
        completado
    })
    .command('borrar','Borra una tarea',{
        descripcion
    })    
    .command('listar','Lista las tareas',{
        filtrar : {
            alias:'f',
            desc: 'Define si filtra o no las tareas completadas',
            default: false
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}