// debounce is basically a set timeout, just need to clear the id
export function debounce(func, wait) {
  let timeoutId = null;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// the key is to check if shouldThrottle is true before executing anything else
export function throttle(func, wait = 0) {
  let shouldThrottle = false;

  return function (...args) {
    if (shouldThrottle) {
      return;
    }

    shouldThrottle = true;
    setTimeout(() => (shouldThrottle = false), wait);

    func.apply(this, args);
  };
}
