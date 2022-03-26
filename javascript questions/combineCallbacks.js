function combineFetchers (fetchers) {
	return function (pattern, cb) {
		let results = [];
		let count = 0;
		fetchers.forEach((fetcher) => {
			fetcher(pattern, function (result) {
				results.concat(result);
				count++;
				if (fetchers.length === count) {
					cb(results);
				}
			});
		});
	}
}

const combined = combineFetchers([]); // array of functions 
combined('pattern', function (results) {
	// callback function 
	// do something with results
});