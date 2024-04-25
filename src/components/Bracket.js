// Bracket.js
import React, { useState } from 'react';

const Bracket = ({ players, setVsWinner }) => {
  // Generate random matchups (you can implement your own logic)
  const [matchups, setMatchups] = useState([]);

  return (
    <div>
      <div className="bracket">
        {matchups.map((matchup, index) => (
          <div key={index} className="matchup">
            <span onClick={() => setVsWinner(matchup.player1)}>{matchup.player1?.name}</span> vs
            <span onClick={() => setVsWinner(matchup.player2)}> {matchup.player2?.name}</span>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => setMatchups(generateMatchups(players))}>Generate Matchups</button>
      </div>
    </div>
  );
};



// Example function for generating random matchups
function generateMatchups(players) {
  const shuffledPlayers = shuffleArray(players); // Shuffle the player array
  const matchups = [];

  for (let i = 0; i < shuffledPlayers.length; i += 2) {
    const player1 = shuffledPlayers[i];
    const player2 = shuffledPlayers[i + 1];
    matchups.push({ player1, player2 });
  }

  return matchups;
}

// Helper function to shuffle an array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default Bracket;
