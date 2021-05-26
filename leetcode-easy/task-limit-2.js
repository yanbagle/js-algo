function taskRunner () {
  const limit = 5;
  const taskQueue = [];
  let taskCounter = 0;
  let counter = 0;
  return function runner (task) {
    taskCounter++;
    counter++;
    if (taskCounter <= limit) {
      task()(counter, () => { // cb
        taskCounter--;
        if (taskCounter < limit && taskQueue.length) {
          runner(taskQueue.shift());
        }
      });
    } else {
      taskQueue.push(task);
    }
  }
}

function myTask () {
  return function runTask (counter, cb) {
		console.log('running ' + counter);
		setTimeout(() => {
      console.log(counter + ' done');
      cb();
		}, 5000); // does something after 3 secs
	}
}

let myTaskRunner = taskRunner();
myTaskRunner(myTask);
myTaskRunner(myTask);
myTaskRunner(myTask);
myTaskRunner(myTask);
myTaskRunner(myTask);
myTaskRunner(myTask);
myTaskRunner(myTask);