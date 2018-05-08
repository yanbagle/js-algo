function combineFetchers (fetchers) {
	return function (pattern, cb) {
		let results = [];
		fetchers.forEach((fetcher) => {
			fetcher(pattern, function (result) {
				results.concat(result);
			});
		});
		// when done, cb(results);
	}
}