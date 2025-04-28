

const persona = {
  nombre: 'tony',
  apellido: 'start',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 533335515,
    lat: 14.3232,
    lng: 34.92333321
  }
};

// console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Perter'

console.log(persona);
console.log(persona2)
