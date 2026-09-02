export type EventMap = {
  launch: string;
  shutdown: number;
};

type EventHandlers<T extends EventMap> = {
  [K in keyof T]?: Array<(data: T[K]) => void>;
};

export class SimpleEventEmitter<T extends EventMap> {
  private handlers: EventHandlers<T> = {};

  public on<K extends keyof T>(
    eventName: K,
    callback: (data: T[K]) => void,
  ): void {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }

    this.handlers[eventName]!.push(callback);
  }

  public emit<K extends keyof T>(eventName: K, data: T[K]): void {
    const callbacks = this.handlers[eventName];

    if (callbacks) {
      callbacks.forEach((callback) => callback(data));
    }
  }
}
