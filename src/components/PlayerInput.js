// PlayerInput.js
import React, { useState } from 'react';

const PlayerInput = ({ onSubmit }) => {
  const [playerName, setPlayerName] = useState('');

  const handleInputChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerName.trim() !== '') {
      onSubmit(playerName);
      setPlayerName('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="player-input">
      <input
        type="text"
        placeholder="Enter player name"
        value={playerName}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSubmit}>Add Player</button>
    </div>
  );
};

export default PlayerInput;
