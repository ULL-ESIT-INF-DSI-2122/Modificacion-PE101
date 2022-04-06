/**
 * Interface Observer que implementa el método update
 */
export interface Observer {
  /**
   * Método que actualiza el observador
   * @param observable
   */
    update(observable: Observable): string;
  }

/**
   * Interface Observable que implementa los métodos subscribe, unsubscribe y notify
   * Define el comportamiento de lo observado
   */
export interface Observable {
  /**
   * Método que añade un nuevo observador
   * @param observer
   */
    subscribe(observer: Observer): void;
    /**
     * Método que elimina un observador
     * @param observer
     */
    unsubscribe(observer: Observer): void;
    /**
     * Método que notifica los cambios
     */
    notify(): void;
  }