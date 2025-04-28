

const nombre = 'jhon';
const apellido = 'pulido';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido} ${ 1 + 1}`;

console.log(nombreCompleto);


function getSaludo(nombre) {
  return `Hola ${nombre}`
}

const data = 'Ricardo';

console.log(`Este es un saludo: ${getSaludo(data)}`)