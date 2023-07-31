class EventEmitter {
  constructor() {
    this.handlers = {};
  }

  emit(event, payload) {
    if (event in this.handlers) {
      this.handlers[event].forEach((handler) => {
        handler(payload);
      });
    }
  }

  on(event, handler) {
    this.handlers[event] = this.handlers[event] || [];
    this.handlers[event].push(handler);
    return this;
  }

  off(event, handler) {
    if (event in this.handlers) {
      this.handlers[event] = this.handlers[event].filter((h) => h !== handler);
    }
  }
}

export default EventEmitter;
