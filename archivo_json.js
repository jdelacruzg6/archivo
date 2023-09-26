const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const datosPersonas = {
  pedro: {
    nombre: 'Pedro',
    apellido: 'Arias',
    edad: 58,
    salario: 2500,
    activo: true
  },
  juan: {
    nombre: 'Juan',
    apellido: 'Rodriguez',
    edad: 48,
    salario: 3500,
    activo: true
  },
  julio: {
    nombre: 'Julio',
    apellido: 'Fernandez',
    edad: 50,
    salario: 2000,
    activo: true
  },
  roberto: {
    nombre: 'Roberto',
    apellido: 'Lucho',
    edad: 38,
    salario: 1500,
    activo: true
  }
};

rl.question('Introduce un nombre (pedro, juan, julio o roberto): ', (nombre) => {
  const persona = datosPersonas[nombre.toLowerCase()];

  if (persona) {
    console.log('Datos de la persona:');
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Apellido: ${persona.apellido}`);
    console.log(`Edad: ${persona.edad}`);
    console.log(`Salario: ${persona.salario}`);
    console.log(`Activo: ${persona.activo}`);
  } else {
    console.log('Nombre no encontrado en la base de datos.');
  }

  rl.close();
});
