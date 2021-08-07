# React Ultimate Tic Tac Toe  

This project is inspired by [React's Intro Tic Tac Toe tutorial](https://reactjs.org/tutorial/tutorial.html).

The tutorial served as the start code for this project, and I have expanded it to create Ultimate Tic Tac Toe.

Currently, the bare bones and basic fully working version is up. However, I do plan on improving the UI as well
as implementing new features sometime in the future.

## How To Play Ultimate Tic Tac Toe

The rules can be found via Google Search, but I will base my explanation on [this website](https://www.thegamegal.com/2018/09/01/ultimate-tic-tac-toe/).

There is a large tic tac toe grid, and within each square is another smaller tic tac toe board.
The game starts off like normal tic tac toe. However, the location of the next move depends on the previous.
For example, if X starts on the bottom right corner of a smaller tic tac toe board, O has to play on the board in
the bottom right corner of larger tic tac toe board.
If that explanation is not that clear, the website will let you know which board you are supposed to play on, where each
board on the screen is represented by a number from 1-9, in this pattern.

1 2 3
4 5 6
7 8 9

Sometimes, if a board is out of play (after a player wins that larger square), the next player can choose any board to play in.
It would also be indicated by the website.

The game ends if the player gets 3 in a row on the larger grid. In order to win the larger grid, that player must win the
corresponding smaller grid. The website will change from the board into a larger X or O if a player wins that board.

## Conclusion
Thank you for checking out this repo, and I hope you enjoy the game. Please let me know if there are any issues or changes you want to make. 

Randy Huynh