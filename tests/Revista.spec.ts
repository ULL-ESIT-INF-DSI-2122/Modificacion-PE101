import {Revista} from '../src/Revista/revista';
import {Suscriptor} from '../src/Revista/suscriptor';
import 'mocha';
import {expect} from 'chai';

const Hola = new Revista([12345, 2345, 354], 'Hola');
const Juan = new Suscriptor('Juan', 'JuanHdez_');

describe('Revista tests: ', () => {
  it('GetNumeroRevista(0) => 12345', () =>{
    expect(Hola.getNumeroRevista(0)).to.be.equal(12345);
  });
  it('getNombreRevista() => Hola', () =>{
    expect(Hola.getNombreRevista()).to.be.equal('Hola');
  });
  it('addNewNumero(7798)', () =>{
    expect(Hola.addNewNumero(189)).to.not.throw;
  });
  it('Suscribe Juan => to not throw', () =>{
    expect(Hola.subscribe(Juan)).to.not.throw;
  });
  it('Suscribe Juan => to throw error (ya está suscrito)', () =>{
    expect(Hola.subscribe(Juan)).to.throw;
  });
  it('Notify Juan => to not throw', () =>{
    expect(Hola.notify()).to.not.throw;
  });
  it('Unsuscribe Juan => to not throw', () =>{
    expect(Hola.unsubscribe(Juan)).to.not.throw;
  });
  it('Unsuscribe Juan => to throw (no está suscrito)', () =>{
    expect(Hola.unsubscribe(Juan)).to.throw;
  });
});