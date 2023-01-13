
const { getMulti } = require('./helpers/multiplicar.js')
const argv = require ('./config/yargs.js');
const colors = require ('colors/safe');

console.clear();



// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5] = arg3.split('=');

console.log(argv);

console.log('base: yargs', argv.b);

//const base = 5;

getMulti (argv.b, argv.l, argv.h)
    .then (nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))



