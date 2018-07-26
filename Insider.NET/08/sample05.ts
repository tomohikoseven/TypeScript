var board: Array<number> = new Array(10);
var temp, r1, r2: number;
for (var i = 0; i < 10; i++){
    board[i] = i;
}
for (var count = 0; count < 100; count++){
    r1 = Math.floor(Math.random() * 10);
    r2 = Math.floor(Math.random() * 10);
    temp = board[r1];
    board[r1] = board[r2];
    board[r2] = temp;
}
alert(board);