/* 
Our implementation should take an array of promises 
(though it could contain non-promises like 42), returns a 
single promises that resolves when every promises in the input array resolves, 
rejects immediately when any of them rejects.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
// expected output: Array [3, 42, "foo"]
*/
Promise.all = (promises) => {
  return new Promise((resolve, reject) => {
    const res = [];
    let counter = 0;
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          counter++;
          /*
          When looping, use i to keep the order of promise results same as input 
          because promises could take different time to resolve.
          */
          res[i] = value;
          if (counter === promises.length) {
            resolve(res);
          }
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};

/*
Promise.race settles as long as one of the input promises settles (either resolved or rejected).

Here is MDN’s example on how it is used

-------------------

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
*/

Promise.race = (promises) => {
  return new Promise((resolve, reject) => {
    for (let p of promises) {
      Promise.resolve(p).then(
        (value) => {
          resolve(value);
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};

Promise.resolve = (value) => {
  if (value instanceof Promise) {
    return value;
  }

  return new Promise((resolve) => {
    resolve(value);
  });
};

Promise.reject = (reason) => {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]