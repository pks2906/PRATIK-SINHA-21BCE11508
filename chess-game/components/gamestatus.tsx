// components/GameStatus.tsx
import React from 'react';
import { GameState } from '../types';

interface GameStatusProps {
  gameState: GameState;
}

const GameStatus: React.FC<GameStatusProps> = ({ gameState }) => {
  return (
    <div className="mt-4 text-center font-bold text-lg text-white">
      {gameState.winner
        ? `Game Over! Winner: ${gameState.winner}`
        : `Current Turn: ${gameState.currentTurn}`}
    </div>
  );
};

export default GameStatus;