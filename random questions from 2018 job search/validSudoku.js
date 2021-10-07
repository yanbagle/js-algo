/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	if (!Array.isArray(board) || board.length !== 9 || board[0].length !== 9) {
		return false;
	}

	var numbers = new Array(9).fill(false);

	// check rows
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++)  {
			if (numbers[board[i][j] - 1] !== '.' && numbers[board[i][j] - 1] === false) {
				numbers[board[i][j] - 1] = true;
			} else if (numbers[board[i][j] - 1] === true){
				return false;
			}
		}
		numbers = new Array(9).fill(false);
	}

	// check columns
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++)  {
			if (numbers[board[j][i] - 1] !== '.' && numbers[board[j][i] - 1] === false) {
				numbers[board[j][i] - 1] = true;
			} else if (numbers[board[j][i] - 1] === true){
				return false;
			}
		}
		numbers = new Array(9).fill(false);
	}

	var currRowStart = 0;
	var currColStart = 0;

	var currRowEnd = 3;
	var currColEnd = 3;

	while (currRowEnd < 9 && currColEnd < 9) {
		for (var i = currRowStart; i < currRowEnd; i++) {
			for (var j = currColStart; j < currColEnd; j++) {
				if (numbers[board[i][j] - 1] !== '.' && numbers[board[i][j] - 1] === false) {
					numbers[board[i][j] - 1] = true;
				} else if (numbers[board[i][j] - 1] === true){
					return false;
				}
			}
		}
		numbers = new Array(9).fill(false);
		if (currColEnd < 9) {
			currColStart += 3;
			currColEnd += 3;
		} else {
			currColStart = 0;
			currColEnd = 3;

			currRowStart += 3;
			currRowEnd += 3;
		}

	}

	return true;


};