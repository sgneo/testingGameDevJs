export default class LightEvent {
  constructor() {
    this.listeners = [];
  }

  on(name, callback) {
    const listener = {name, callback};

    this.listeners.push(listener);
  }

  fire(name, ...args) {
    this.listeners.forEach(listener => {
      if (listener.name === name) {
        listener.callback(...args);
      }
    });
  }
}
