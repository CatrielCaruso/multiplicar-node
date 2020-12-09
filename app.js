const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');




//let base = 'abc';
// let data = '';


// for (let i = 1; i <= 10; i++) {

//     data += `${base}*${i} = ${base * i}\n`;


// }



// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base} a sido creado!`);
// });

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));

//console.log(process.argv);

// let arvg2 = process.argv;
// let parametro = arvg[2];
// let base = parametro.split('=')[1]

// console.log('Limite', argv.limite);
// console.log(arvg2);


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));

// console.log(process.argv);


let comando = argv._[0];

switch (comando) {


    case 'listar':


        console.log('Listar');

        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('Crear');

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));



        break;

    default:

        console.log('Comando no reconocido!!');



}