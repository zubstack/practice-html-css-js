import createGame from './Game';
import './style.css';

// (() => {
//   const title = document.createElement('h2');
//   const p = document.createElement('p');
//   const body = document.querySelector('body');
//   title.innerText = 'Videogame';
//   p.innerText = 'Beatiful game of ships';
//   body.append(title);
//   body.append(p);
// })();

const Game = createGame();
console.log('Game.player', Game.player);
Game.render('aliad_board');
Game.render('enemy_board');
Game.setClickListeners('enemy_board', 'aliad_board');
