import {Revista} from './Revista/revista';
import {Suscriptor} from './Revista/suscriptor';

const Hola = new Revista([12345, 2345, 354], 'Hola');
const Juan = new Suscriptor('Juan', 'JuanHdez_');

console.log(`${Juan.getNombre()} se ha suscrito a la revista ${Hola.getNombreRevista()}`);
try {
  Hola.subscribe(Juan);
} catch (error) {
  console.log(`El usuario ${Juan.getUsuario()} ya está suscrito a la revista`);
}

console.log('Número 7798 añadido');
Hola.addNewNumero(7798);
console.log(`${Juan.getUsuario()} se ha dado de baja de la revista ${Hola.getNombreRevista()}`);