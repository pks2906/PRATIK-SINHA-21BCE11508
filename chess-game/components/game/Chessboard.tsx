
  
  // components/GameBoard.tsx
import React, { useState } from 'react';
import { Character, GameState } from '@/types';
import GameCell from '../GameCell/gamecell';
  
  interface GameBoardProps {
    gameState: GameState;
    playerId: string;
    onMove: (characterId: string, direction: string) => void;
  }
  
  const GameBoard: React.FC<GameBoardProps> = ({ gameState, playerId, onMove }) => {
    const[selected, setSelected] = useState<string>("");
    const [selectedCharacter , setSelectedCharacter] = useState<Character | null>(null);

    function setData(cellData: string){
        setSelected(cellData);
    }

    function setChar(charData: Character){
        console.log(charData);
        setSelectedCharacter(charData);
    }
    return (
      <>
      <div className="grid m-auto grid-cols-5 w-fit">
        {[0, 1, 2, 3, 4].map((row) => (
          React.Children.toArray(
            [0, 1, 2, 3, 4].map((col) => (
              <GameCell
              selectedRow={selectedCharacter === null? 10: selectedCharacter.position[0]}
              selectedColumn={selectedCharacter === null? 10: selectedCharacter.position[1]}
                row={row}
                col={col}
                gameState={gameState}
                playerId={playerId}
                onMove={onMove}
                set = {setData}
                setChar = {setChar}
              />
            ))
          )
        ))}
      </div>
      <div className=' mt-10 w-full flex justify-center items-center'>
        <h1 className=' text-white'>Selected: {selected}</h1>
      </div>
      {selectedCharacter!==null && (
        selectedCharacter.type==='Pawn' ? <div className=' mt-10 w-full flex justify-center items-center'>
        <div className='w-20 h-20 border m-0 cursor-pointer border-gray-500 rounded-md flex items-center justify-center' onClick={()=>onMove(selected,"F")}><p className=' text-white'>F</p></div>
        <div className='w-20 h-20 border m-0 cursor-pointer border-gray-500 rounded-md flex items-center justify-center' onClick={()=>onMove(selected,"B")}><p className=' text-white'>B</p></div>
        <div className='w-20 h-20 border m-0 cursor-pointer border-gray-500 rounded-md flex items-center justify-center' onClick={()=>onMove(selected,"L")}><p className=' text-white'>L</p></div>
        <div className='w-20 h-20 border m-0 cursor-pointer border-gray-500 rounded-md flex items-center justify-center' onClick={()=>onMove(selected,"R")}><p className=' text-white'>R</p></div>
      </div> : selectedCharacter.type==='Hero1' ? <div className=' mt-10 w-full flex justify-center items-center'>
        <div className='w-20 h-20 border m-0 cursor-pointer border-gray-500 rounded-md flex items-center justify-center' onClick={()=>onMove(selected,"F")}><p className=' text-white'>F</p></div>
        <div className='w-20 h-20 border m-0 cursor-pointer border-gray-500 rounded-md flex items-center justify-center' onClick={()=>onMove(selected,"B")}><p className=' text-white'>B</p></div>
        <div className='w-20 h-20 border m-0 cursor-pointer border-gray-500 rounded-md flex items-center justify-center' onClick={()=>onMove(selected,"L")}><p className=' text-white'>L</p></div>
        <div className='w-20 h-20 border m-0 cursor-pointer border-gray-500 rounded-md flex items-center justify-center' onClick={()=>onMove(selected,"R")}><p className=' text-white'>R</p></div>
      </div> : <div className=' mt-10 w-full flex justify-center items-center'>
        <div className='w-20 h-20 border m-0 cursor-pointer border-gray-500 rounded-md flex items-center justify-center' onClick={()=>onMove(selected,"FL")}><p className=' text-white'>FL</p></div>
        <div className='w-20 h-20 border m-0 cursor-pointer border-gray-500 rounded-md flex items-center justify-center'onClick={()=>onMove(selected,"BL")}><p className=' text-white'>BL</p></div>
        <div className='w-20 h-20 border m-0 cursor-pointer border-gray-500 rounded-md flex items-center justify-center' onClick={()=>onMove(selected,"BR")}><p className=' text-white'>BR</p></div>
        <div className='w-20 h-20 border m-0 cursor-pointer border-gray-500 rounded-md flex items-center justify-center' onClick={()=>onMove(selected,"FR")}><p className=' text-white'>FR</p></div>
      </div>
      )}
      </>
    );
  };
  
  export default GameBoard;