class EventEmitter {
  constructor() {
    this.events = {}; // key = event name, value = callback func
  }

  // each event could contain mutiple callbacks
  subscribe(eventName, callback) {
    this.events[eventName] = this.events[eventName]
      ? [...this.events[eventName], callback]
      : [callback];

    return {
      // deletes last added callback
      release: () => {
        this.events[eventName].pop();
        if (this.subs[eventName].length === 0) {
          delete this.subs[eventName];
        }
      },
    };
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return;
    }
    const cbs = this.events[eventName];
    if (cbs) {
      for (let cb of cbs) {
        cb.apply(null, args);
      }
    }
  }
}
