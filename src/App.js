// App.js
import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import PlayerInput from './components/PlayerInput';
import Bracket from './components/Bracket';
import Winner from './components/Winner';

class Player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}
const App = () => {
  const [players, setPlayers] = useState([]);
  const [playingPlayers, setPlayingPlayers] = useState([]);
  const [winner, setWinner] = useState(null);

  const handlePlayerSubmit = (playerName) => {
    const newPlayer = new Player(playerName, Math.round((players.length + 1) / 2));
    setPlayers([...players.map(e => { e.position = Math.round((players.length + 1) / 2); return e }), newPlayer]);
    setPlayingPlayers([...players, newPlayer]);
  };

  const determineWinner = () => {
    const winner = players.find(player => player.position === 1);
    setWinner(winner?.name);
  };


  function setVsWinner(player) {
    if (player)
      player.position -= 1;

    setPlayingPlayers([...players]);

  }

  const generateLists = () => {
    const lists = [];
    var positions = new Set();
    playingPlayers.forEach(player => {
      positions.add(player.position);
    });

    const pos = playingPlayers.reduce((maxPosition, player) => {
      return player.position > maxPosition ? player.position : maxPosition;
    })?.position;
    var next = pos;
    console.log(pos)
    for (let i = positions.size; i > 0; i--) {
      const list = players.filter(player => player.position <= next);
      next--;
      lists.push(list);
    }
    console.log(lists)
    return lists;
  };

  return (
    <div className="app">
      <h1>Tournament Bracket</h1>
      <PlayerInput onSubmit={handlePlayerSubmit} />
      {players?.length > 0 &&
        players.map((player, index) => (
          <ul key={index}>
            <li key={index}>Nome: {player?.name}  -  Posicao: {player?.position}</li>
          </ul>
        ))
      }
      {players.length > 1 && (
        <div>
          <h2>Next Brackets</h2>
          <ul>
            {generateLists().map((list, index) => (
              <li key={index}>
                {list.length > 1 && <Bracket players={list} setVsWinner={setVsWinner} />}
              </li>
            ))}
          </ul>
        </div>
      )}
      {winner && <Winner winner={winner} />}
      <button onClick={determineWinner}>Determine Winner</button>
    </div>
  );
};

export default App;
