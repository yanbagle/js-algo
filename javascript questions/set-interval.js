const setInterval = (cb, interval) => {
  return setTimeout(() => {
    if (typeof cb === 'function') {
      cb();
      setInterval(cb, interval);
    } else {
      console.log('cb is not a function');
    }
  }, interval);
}

const clearInterval = (id) => {
  clearTimeout(id);
}

