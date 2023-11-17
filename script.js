function isValidSudoku(board) {
    // Function to check if an array of values contains duplicates
    const hasDuplicates = arr => new Set(arr.filter(num => num !== '.')).size !== arr.filter(num => num !== '.').length;
  
    // Check rows and columns
    for (let i = 0; i < 9; i++) {
      if (hasDuplicates(board[i]) || hasDuplicates(board.map(row => row[i]))) {
        return false;
      }
    }
  
    // Check 3 x 3 sub-boxes
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        const subBox = [];
        for (let m = 0; m < 3; m++) {
          for (let n = 0; n < 3; n++) {
            subBox.push(board[i + m][j + n]);
          }
        }
        if (hasDuplicates(subBox)) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  // Example input
  const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ];
  
  // Check if the Sudoku board is valid
  const result = isValidSudoku(board);
  console.log(result);  // Output: true
  