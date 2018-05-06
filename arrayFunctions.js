function MyArray (arr) {
	this.myArray = arr;
}

MyArray.prototype._find = function (func) {
	for (let ele of this.myArray) {
		if (func(ele)) {
			return ele;
		}
	}
};

MyArray.prototype._filter = function (func) {
	let filtered = [];
	for (let ele of this.myArray) {
		if (func(ele)) {
			filtered.push(ele);
		}
	}
	return filtered;
};

MyArray.prototype._forEach = function (func) {
	for (let i = 0; i < this.myArray.length; i++) {
		func(this.myArray[i], i);
	}
};

MyArray.prototype._reduce = function (func, startingValue = this.myArray[0]) {
    let accumulator = startingValue;
    let currentIndex = 0;
    let array = this.myArray;
    for (let ele of this.myArray) {
        accumulator = func(accumulator, ele, currentIndex, array);
        currentIndex++;
    }
    return accumulator;
};

const newArr = new MyArray([1,2,3,4,5]);
const found = newArr._find((ele) => {
	return ele === 5;
});
// console.log(found);

newArr._forEach((ele, index) => {
	// console.log(index + ' ' + ele);
});

let avg = newArr._reduce((accum, curr, index, array) => {
    accum += curr;
    if (index === array.length - 1) {
        return accum / array.length;
    }
    return accum;
}, 0);

console.log(avg);