export interface Character {
    type: 'Pawn' | 'Hero1' | 'Hero2';
    position: [number, number];
  }
  
  export interface Player {
    id: string;
    characters: { [key: string]: Character };
  }
  
  export interface GameState {
    players: { [key: string]: Player };
    currentTurn: string;
    winner: string | null;
  }