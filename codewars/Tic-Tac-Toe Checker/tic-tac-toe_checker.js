function isSolved(board) {
    const getWins = makeGetWins(board)
    return getWins(1) ? 1 : getWins(2) ? 2 :  emptySlots(board) ? -1 : 0
  }
  
  const makeGetWins = board => key => 
    [
      horizontalWin(board, key),
      verticalWin(board, key),
      leftDiagWin(board, key),
      rightDiagWin(board, key)
    ].some(_=>Boolean(_))
    
  const emptySlots = board =>
    board.map(x=>x.some(_=>_===0)).some(_=>Boolean(_))
    
  const horizontalWin = (board, key) =>
    board.map(x => x.every(_=>_===key)).some(_=>Boolean(_))
  
  const verticalWin = (board, key) =>
    horizontalWin(rotateBoard(board), key)
    
  const leftDiagWin = (board, key) =>
    [0,1,2].map((winIdx, rowIdx) => board[rowIdx][winIdx] === key).every(_=>Boolean(_)) 
  
  const rightDiagWin = (board, key) =>
    [2,1,0].map((winIdx, rowIdx) => board[rowIdx][winIdx] === key).every(_=>Boolean(_)) 
    
  const rotateBoard = board => 
    Array(board[0].length)
      .fill(null)
      .map((x,idx) => board.map(_ => _[idx])) 