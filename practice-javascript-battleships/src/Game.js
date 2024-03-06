import Player from './Player';

// export default class Game {
//   constructor() {
//     this.player = this.createPlayer('zubstack');
//     this.bot = this.createPlayer('bot');
//   }

//   createPlayer(name) {
//     return new Player(
//       [
//         ['J0'],
//         ['G3'],
//         ['E1'],
//         ['A1'],
//         ['E5', 'E6'],
//         ['I5', 'I6'],
//         ['C3', 'C4'],
//         ['F9', 'G9', 'H9'],
//         ['A9', 'A8', 'A7'],
//         ['C9', 'C8', 'C7', 'C6'],
//       ],
//       name
//     );
//   }
// }

export default function createGame() {
  const player = createPlayer('zubstack');
  const bot = createPlayer('bot');

  function createPlayer(name) {
    return new Player(
      [
        ['J0'],
        ['G3'],
        ['E1'],
        ['A1'],
        ['E5', 'E6'],
        ['I5', 'I6'],
        ['C3', 'C4'],
        ['F9', 'G9', 'H9'],
        ['A9', 'A8', 'A7'],
        ['C9', 'C8', 'C7', 'C6'],
      ],
      name
    );
  }

  function render(id) {
    const gameboardContainer = document.getElementById(id);
    gameboardContainer.classList.add('grid__container');
    for (let index = 0; index < 100; index++) {
      let div = document.createElement('div');
      setCoordenade(div, index);
      gameboardContainer.append(div);
    }

    function setCoordenade(node, index) {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
      const len = Math.floor(index / 10);
      const foo = index - 10 * len;
      node.dataset.position = `${letters[len]}${foo}`;
      node.innerText = `${letters[len]}${foo}`;
    }
  }

  function setClickListeners(enemyBoardId, aliadBoardId) {
    const enemyBoard = document.getElementById(enemyBoardId);
    const aliadBoard = document.getElementById(aliadBoardId);

    enemyBoard.classList.add('--active');
    aliadBoard.classList.add('--disactive');

    enemyBoard.addEventListener('mousedown', (event) => {
      changeState(enemyBoard, aliadBoard);
      handleClick(event),
        setTimeout(() => {
          changeState(aliadBoard, enemyBoard);
        }, 2000);
    });

    function changeState(activeBoard, inactiveBoard) {
      activeBoard.classList.remove('--active');
      activeBoard.classList.add('--disactive');
      inactiveBoard.classList.remove('--disactive');
      inactiveBoard.classList.add('--active');
    }
  }

  function handleClick(event) {
    const { target } = event;
    const { position } = target.dataset;
    //If this position has been attacked, you can't attack there twice.
    if (bot.gameboard.attackedPositions.includes(position)) return;
    //If you hit a ship
    if (bot.gameboard.shipPositions.includes(position)) {
      target.style.backgroundColor = 'red';
      console.log('Hit');
    } else {
      //If you miss the shot
      target.style.backgroundColor = 'yellow';
    }
    bot.gameboard.receiveAttack(position);
  }
  return { player, render, setClickListeners };
}
