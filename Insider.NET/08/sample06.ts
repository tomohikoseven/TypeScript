var board: number[][] = new Array();
for (var i = 0; i < 9; i++){
    board[i] = new Array();
    for (var j = 0; j < 9; j++){
        board[i][j] = i * 9 + (j + 1);
    }
}
alert(board);