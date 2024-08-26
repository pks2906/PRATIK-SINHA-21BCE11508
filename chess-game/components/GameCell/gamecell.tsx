import { GameState, Character } from '@/types';
import React from 'react';
import MoveButtons from '../movebuttons';
import CharacterPiece from '../piece';

interface GameCellProps {
    row: number;
    col: number;
    selectedRow: number;
    selectedColumn: number;
    gameState: GameState;
    playerId: string;
    onMove: (characterId: string, direction: string) => void;
    set: (charaterId: string) => void;
    setChar: (char: Character) => void;
}

const GameCell: React.FC<GameCellProps> = ({ row, col, gameState, playerId, onMove, set, setChar, selectedRow, selectedColumn }) => {
    const getCharacterAtPosition = (): [string, Character] | null => {
        for (const player of Object.values(gameState.players)) {
            for (const [characterId, character] of Object.entries(player.characters)) {
                if (character.position[0] === row && character.position[1] === col) {
                    return [characterId, character];
                }
            }
        }
        return null;
    };

    const cellPlayerId = () : string | null => {
        for (const player of Object.values(gameState.players)) {
            for (const [characterId, character] of Object.entries(player.characters)) {
                if (character.position[0] === row && character.position[1] === col) {
                    return player.id;
                }
            }
        }
        return null;
    }

    const cellId = cellPlayerId();

    const characterData = getCharacterAtPosition();

    const selectPosition = () =>{
        if(characterData && cellId && cellId===playerId){
            set(characterData[0]);
            setChar(characterData[1]);
        }
        
    }

    return (
        <div className="w-20 h-20 border m-0 border-gray-500 rounded-md flex items-center justify-center">
            {characterData && cellId && (
                <>
                    <div onClick={selectPosition} className={`text-2xl ${gameState.players[playerId].characters[characterData[0]] !== undefined ? 'text-blue-600' : 'text-red-600'} ${row===selectedRow && col===selectedColumn ? 'text-blue-600' : 'text-red-600'} cursor-pointer`}>
                        {characterData[0]}
                        <p className=' text-sm'>{cellId}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default GameCell;
