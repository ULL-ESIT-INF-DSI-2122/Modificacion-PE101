import {Revista} from '../src/Revista/revista';
import {Suscriptor} from '../src/Revista/suscriptor';
import 'mocha';
import {expect} from 'chai';

const Hola = new Revista([12345, 2345, 354], 'Hola');
const Juan = new Suscriptor('Juan', 'JuanHdez_');

describe('Suscriptor tests: ', () => {
  it('GetNombre => Juan', () =>{
    expect(Juan.getNombre()).to.be.equal('Juan');
  });
  it('getNombreUsuario() => JuanHdez_', () =>{
    expect(Juan.getUsuario()).to.be.equal('JuanHdez_');
  });
  Hola.addNewNumero(124);
  it('update => to not throw', () =>{
    expect(Juan.update(Hola)).to.be.equal('Soy un suscriptor llamado Juan con el usuario JuanHdez_ y he observado que se ha añadido un nuevo número a la revista Hola');
  });
});