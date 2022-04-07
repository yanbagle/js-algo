const delay = (t, v) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(v);
    }, t);
  });
}

delay.then(() => {
  // do something
});