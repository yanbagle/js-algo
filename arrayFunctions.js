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

};

MyArray.prototype._forEach = function (func) {

};

const newArr = new MyArray([1,2,3,4,5]);
const found = newArr._find((ele) => {
	return ele === 5;
});
console.log(found);