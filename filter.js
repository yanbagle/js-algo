Array.prototype._filter = function (func) {
	for (let i = 0; i < this.length; i++) {
		if (!func(this[i])) {
			this.slice(i, 1);// need to check doc, forgot the params
		}
	}
	return this;
}