import React from 'react';

interface MoveButtonsProps {
  characterType: string;
  onMove: (direction: string) => void;
}

const MoveButtons: React.FC<MoveButtonsProps> = ({ characterType, onMove }) => {
  const getMoves = (type: string) => {
    switch (type) {
      case 'Pawn':
      case 'Hero1':
        return ['L', 'R', 'F', 'B'];
      case 'Hero2':
        return ['FL', 'FR', 'BL', 'BR'];
      default:
        return [];
    }
  };

  return (
    <div className="absolute top-full left-0 flex flex-wrap mt-1 z-10">
      {getMoves(characterType).map((move) => (
        <button
          key={move}
          onClick={() => onMove(move)}
          className="m-1 px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {move}
        </button>
      ))}
    </div>
  );
};

export default MoveButtons;