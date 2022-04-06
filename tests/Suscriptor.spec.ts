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
  it('update => to not throw', () =>{
    expect(Juan.update(Hola)).to.not.throw;
  });
});