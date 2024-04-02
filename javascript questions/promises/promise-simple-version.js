// no chaining, no multiple promises
class Promise {
  constructor(handler) {
    this.status = "pending";
    this.value = null;
    this.onFullFilledCb = null;
    this.onRejectCb = null;

    const resolve = (value) => {
      if (this.status === "pending") {
        this.value = value;
        this.status = "fullfilled";
        this.onFullFilledCb(value); // execute the then cb
      }
    };

    const reject = (value) => {
      if (this.status === "pending") {
        this.value = value;
        this.status = "rejected";
        this.onRejectCb(value); // execute the then cb
      }
    };

    try {
      handler(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFullFilled, onReject) {
    if (this.status === "pending") {
      this.onFullFilledCb = onFullFilled;
      this.onRejectCb = onReject;
    }
    if (this.status === "fullfilled") {
      onFullFilled(this.value);
    }
    if (this.status === "rejected") {
      onReject(this.value);
    }
  }
}

// testing code
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("resolved!"), 1000);
});
p3.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

// ' resolved!'
