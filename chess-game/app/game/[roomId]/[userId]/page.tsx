"use client"

import GameBoard from '@/components/game/Chessboard';
import GameStatus from '@/components/gamestatus';
import { toast } from '@/components/ui/use-toast';
import { GameState } from '@/types';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const Home: React.FC = () => {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [history , setHistory] = useState<string[]> ([]);
  const params = useParams();

  useEffect(() => {
    socket.on('gameState', (newGameState: GameState) => {
      setGameState(newGameState);
    });
    
    socket.on('info', (message:any)=>{
        console.log(message);
        toast({
          title: "Info",
          description: message
        })
    })

    socket.on('history', (message: any)=>{
      console.log(message);
      setHistory(message);
    })

    return () => {
      socket.off('gameState');
    };
  }, []);

  useEffect(()=>{
    // console.log(params.)
    socket.emit('joinGame', {
      "playerId": params.userId as string,
      "roomId": params.roomId as string
    });
  },[params.userId, params.roomId])

  const handleMove = (characterId: string, direction: string) => {
    const userId = params.userId as string;
    socket.emit('move', { playerId:  userId, move: `${characterId}:${direction}` });
  };

  if (!gameState) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="px-4 py-8 bg-black w-full h-screen overflow-auto">
      <h1 className="text-3xl text-white font-bold text-center mb-8">Chess-like Game</h1>
      <GameBoard gameState={gameState} playerId={params.userId as string} onMove={handleMove} />
      <div className=' grid grid-cols-2 h-full overflow-auto gap-7 text-white'>
        <div>
          <h1>Move history</h1>
          {history.map((history, index)=>(
            <p key={index}>{history}</p>
          ))}
        </div>
      <GameStatus gameState={gameState} />
      </div>
    </div>
  );
};

export default Home;