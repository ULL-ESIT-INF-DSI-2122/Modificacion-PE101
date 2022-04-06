/**
 * Interface Observer que implementa el método update
 */
export interface Observer {
    update(observable: Observable): void;
  }

/**
   * Interface Observable que implementa los métodos subscribe, unsubscribe y notify
   * Define el comportamiento de lo observado
   */
export interface Observable {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
  }