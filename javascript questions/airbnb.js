// Goal: Implement the Model structure so that the following block of code runs as intended

function runTest(test) {
  setTimeout(test);
}

class Model {
  constructor(arg) {
    this.table = {};
    this.onChangeCB = null;
    this.onChangeKeys = {};
    for (let key in arg) {
      this.table[key] = arg[key];
    }
  }

  get(key) {
    if (this.table[key] === undefined) {
      return undefined;
    }
    return this.table[key];
  }

  set(key, value) {
    console.log("key", key);
    console.log("value", value);

    const oldValue = this.table[key];
    this.table[key] = value;
    this.onChangeCB(key, oldValue, value);
    if (this.onChangeKeys[key]) {
      this.onChangeKeys[key](key, oldValue, value);
    }
  }

  has(key) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    return this.table.hasOwnProperty(key);
  }

  unset(key) {
    const oldValue = this.table[key];
    delete this.table[key];
    this.onChangeCB(key, oldValue, undefined);
    if (this.onChangeKeys[key]) {
      this.onChangeKeys[key](key, oldValue, undefined);
    }
  }

  on(string, cb) {
    const key = string.split(":")[1];
    if (key) {
      this.onChangeKeys[key] = cb;
    }
    this.onChangeCB = cb;
  }
}

// Part 2 of 2
runTest(() => {
  const person = new Model({ name: "Alice", age: 23 });
  // the on method allows us to add callbacks for events
  // Model emits two events for each change:
  // 'change':              emitted on any change
  // 'change:${attribute}': emitted only when 'attribute' changes
  // here’s a concrete example:

  // called when any attribute changes; note the callback signature
  person.on("change", function (key, oldVal, newVal) {
    console.log("attr", key, "changed from", oldVal, "to", newVal);
  });

  // called only when the "name" attribute changes.
  // note that the signature of this callback is
  // different from the general ’change’ event callback
  person.on("change:name", function (oldVal, newVal) {
    console.log("specifically name changed from", oldVal, "to", newVal);
  });

  //   // multiple handlers for the same event name; school is an attribute here
  //   person.on('change:school', function(oldVal, newVal) {
  //     console.log('first callback');
  //   });
  //   person.on('change:school', function(oldVal, newVal) {
  //     console.log('second callback');
  //   });

  person.set("dogs", 2); // -> attr dogs changed from undefined to 2
  person.set("name", "Bob"); // -> attr name changed from Alice to Bob
  // -> specifically name changed from Alice to Bob
  person.unset("name"); // -> attr name changed from Bob to undefined
  // -> specifically name changed from Bob to undefined
  person.set("school", "UCSD"); // -> attr school changed from undefined to UCSD
  // -> first callback
  // -> second callback
});
