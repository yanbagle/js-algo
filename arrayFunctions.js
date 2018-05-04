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

const newArr = new MyArray([1,2,3,4,5]);
const found = newArr._find((ele) => {
	return ele === 5;
});
console.log(found);

newArr._forEach((ele, index) => {
	console.log(index + ' ' + ele);
});