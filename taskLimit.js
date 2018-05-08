function myTask (taskCounter, counter, cb) {
	return function runTask () {
		console.log('running');
		setTimeout(() => {
			console.log(taskCounter);
			cb();
		}, 3000);
	}
}

function taskRunner () {
	const limit = 5;
	let taskQueue = [];
	let counter = 0;
	let taskCounter = 0;
	return function runTask (task) {
		if (counter >= limit) {
			taskQueue.push(task);
		} else {
			counter++;
			taskCounter++;
			let runner = task(taskCounter, counter, () => {
				// done
				counter--;
				if (taskQueue.length) {
					runTask(taskQueue.shift());
				}
			});
			runner();
		}
	}
}

let runner = taskRunner();
runner(myTask);
runner(myTask);
runner(myTask);
runner(myTask);
runner(myTask);
runner(myTask);
runner(myTask);
runner(myTask);