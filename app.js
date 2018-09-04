const argv  = require('./config/yargs').argv;
var colors = require('colors');
const porHacer  = require('./por-hacer/por-hacer');

// console.log(argv);

let comando = argv._[0];

switch(comando){
   
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);       
    break;

    case 'listar':

        let listado = porHacer.getListado(argv.filtrar);

        console.log('==========Por hacer============='.green);
        for (let tarea of listado) {
            console.log(tarea.desc);
            console.log('Estado: ',tarea.completado);
            console.log('================================'.green);
        }

    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizado);
    break;

    case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);
    break;

    default:
        console.log('Comando no reconocido');
    break;

}