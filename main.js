

import Game from "./tictactoe.js";

import GameView from "./gameview.js";


let game = new Game();
let gameView = new GameView(document.getElementById("app"))

console.log(game)
gameView.onTileClick = function (i) {
    game.makeMove(i);
    gameView.update(game);
}

gameView.onRestartClick = function () {
    game = new Game();
    gameView.update(game);
}


gameView.update(game);