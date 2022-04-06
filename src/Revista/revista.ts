import {Observable} from '../Interface/observable';
import {Observer} from '../Interface/observable';

/**
 * Clase revista que será observada por la clase suscriptor
 */
export class Revista implements Observable {
  private observers: Observer[] = [];
  constructor(private numeroRevista: number[], private nombreRevista:string) {
  }
  /**
   * Método que devuelve el número de revista indicado en
   * el índice en concreto
   * @param index controla el número de revista a devolver
   * @returns number
   */
  getNumeroRevista(index:number): number {
    return this.numeroRevista[index];
  }
  /**
 * Getter del nombre de la revista
 * @returns string
 */
  getNombreRevista(): string {
    return this.nombreRevista;
  }
  /**
   * Método que añade un nuevo número a la revista
   * @param numero Numero a añadir a la revista
   */
  addNewNumero(numero: number):void {
    this.numeroRevista.push(numero);
    this.notify();
  }
  /**
   * Método que añade un nuevo observador a la revista
   * @param observer
   */
  subscribe(observer: Observer) {
    if (this.observers.includes(observer)) {
      throw new Error('The observer had already been subscribed');
    } else {
      this.observers.push(observer);
    }
  }
  /**
   * Método que elimina un observador de la revista
   * @param observer
   */
  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
      this.observers.splice(index, 1);
    }
  }
  /**
   * Método que notifica cuando un cambio es realizado
   */
  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }
}