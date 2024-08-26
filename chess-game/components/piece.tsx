import React from 'react';
import { Character } from '../types';

interface CharacterPieceProps {
  characterId: string;
  character: Character;
  isCurrentPlayer: boolean;
}

const CharacterPiece: React.FC<CharacterPieceProps> = ({ characterId, character, isCurrentPlayer }) => {

  return (
    <div className={`text-2xl ${isCurrentPlayer ? 'text-blue-600' : 'text-red-600'} cursor-pointer`}>
      {characterId}
      <span className="absolute top-0 left-0 text-xs">{characterId}</span>
    </div>
  );
};

export default CharacterPiece;