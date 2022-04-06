import {Observable} from '../Interface/observable';
import {Observer} from '../Interface/observable';
import {Revista} from './revista';

/**
 * Clase suscriptor que estará observando a la clase revista
 */
export class Suscriptor implements Observer {
  constructor(private nombre: string, private usuario: string) {
  }
  /**
   * Getter del nombre del suscriptor
   * @returns string
   */
  getNombre(): string {
    return this.nombre;
  }
  /**
   * Getter del nombre de usuario
   * @returns string
   */
  getUsuario(): string {
    return this.usuario;
  }
  /**
   * Método que controla los cambios en la revista
   * @param observable
   */
  update(observable: Observable) {
    let i:number = 0;
    if (observable instanceof Revista) {
      console.log(`Soy un suscriptor llamado ${this.nombre}` + ` con el usuario ${this.usuario}` +
                      ` y he observado que se ha añadido el número ${observable.getNumeroRevista(i)} a la revista ${observable.getNombreRevista()}`);
      i++;
    }
  }
}