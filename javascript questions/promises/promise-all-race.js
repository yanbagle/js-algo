/* 
Our implementation should take an array of promises 
(though it could contain non-promises like 42), returns a 
single promises that resolves when every promises in the input array resolves, 
rejects immediately when any of them rejects.
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

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
