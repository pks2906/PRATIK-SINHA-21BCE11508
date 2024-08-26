'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');
  const { toast } = useToast();
  const router = useRouter();

  const handleStartGame = () => {
    if (roomId && username) {
      router.push(`/game/${roomId}/${username}`);
    } else {
      console.log("erroeee")
      toast({
        title: "Error",
        description: "Please enter both Room ID and Username.",
      });
    }
  };

  return (
    <main className="h-fit flex flex-col space-y-6 items-center justify-center py-24">
      <div className="font-semibold text-4xl">Welcome!</div>
      <Input
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e: any) => setRoomId(e.target.value)}
        className="max-w-xs"
      />
      <Input
        placeholder="Enter Username"
        value={username}
        onChange={(e: any) => setUsername(e.target.value)}
        className="max-w-xs"
      />
      <Button onClick={handleStartGame}>
        Start Game
      </Button>
    </main>
  );
}