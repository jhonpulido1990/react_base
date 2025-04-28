

const saludar = function(nombre) {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola ${nombre}`
};

const saludar3 = (nombre) => `Hola ${nombre}`

console.log(saludar('pepe'));
console.log(saludar2('gonzalo'));
console.log(saludar3('nacho'));

const getUser = () => ({
  uid: 'ABC1234',
  username: 'EL_PASPI'
});

const user = getUser();

console.log(user);

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre
  })


const usuarioActivo = getUsuarioActivo('Jhon');
console.log(usuarioActivo)
