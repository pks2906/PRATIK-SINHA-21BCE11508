# Turn-based Chess-like Game with WebSocket Communication

## Overview
This project is a chess like game for two players where each player takes a turn to move a set piece on a board of 5 X 5. The game is based on the server/client architecture with the primary focus on using WebSockets to transmit the data. Each character belongs to a team of players; each character can jump in different ways and the idea is to try and move the character beyond the opponents.


## Features
- **Real-time Gameplay**: The game is designed in such a manner that two players can play against each other in real-time with the help of WebSocket.
- **Character Types**: Three character types are available: Pawn, Hero1, and Hero2, each with unique movement patterns and abilities.
- **Dynamic Game State**: Three character types are available: Pawn, Hero1, and Hero2; they all have different movement along with abilities.
- **Interactive UI**: The game is developed to be played using a graphical user interface on the internet, which makes game board, characters, controls visually attractive.

## Game Rules

### Game Setup
- It is a two player’s game which is played out on a 5×5 game board.
- Each player controls a team of 5 characters, which can include Pawns, Hero1, and Hero2.
- Players arrange their characters on their respective starting rows at the beginning of the game.

### Characters and Movement
- **Pawn**:
  - Moves one block in any direction: Left, Right, Forward, or Backward.
  - Move commands: `L` (Left), `R` (Right), `F` (Forward), `B` (Backward).
- **Hero1**:
  - Moves two blocks straight in any direction.
  - Can kill any opponent's character in its path.
  - Move commands: `L` (Left), `R` (Right), `F` (Forward), `B` (Backward).
- **Hero2**:
  - Moves two blocks diagonally in any direction.
  - Can kill any opponent's character in its path.
  - Move commands: `FL` (Forward-Left), `FR` (Forward-Right), `BL` (Backward-Left), `BR` (Backward-Right).

### Game Flow
- Players deploy all 5 characters on their starting row in any order.
- Character positions are input as a list of character names, placed from left to right.
- Players take turns moving their characters. The game ends when all characters of one player are eliminated.

## Implementation Details

### Backend
The backend is implemented using **NestJS** and handles the game logic, game state management, and WebSocket communication.

- **GameService**:
  - Manages the game state, processes moves, and checks for win conditions.
  - Implements character movement logic, including valid move checks and character elimination.

- **AppController**:
  - Manages WebSocket connections, handles game initialization, and relays game state updates to the clients.
  - Maintains player status and manages room assignments.

**Key Methods**:
- `initializeGame`: Sets up the initial game state, including player character placement.
- `processMove`: Handles player moves, updates the game state, and switches turns.
- `calculateNewPosition`: Calculates the new position of a character based on the move command.
- `isValidMove`: Validates whether a move is within the game boundaries.
- `removeCharacterAtPosition`: Removes a character from the game state if it is captured.
- `checkWinCondition`: Determines if a player has won the game.

### Frontend
The frontend is built using **React** with **TypeScript** and leverages WebSocket communication to interact with the backend.

- **GameBoard Component**:
  - Renders the 5x5 grid and character positions.
  - Updates the UI based on the current game state received from the server.

- **Control Panel**:
  - Provides players with controls to input their moves and view game history.

- **WebSocket Integration**:
  - Establishes a connection with the server and handles game initialization, move submissions, and real-time updates.

### Screenshots
Below are some sample screenshots of the game's user interface:

- **Game Board**:
  ![Screenshot from 2024-08-27 03-43-43](https://github.com/user-attachments/assets/8ab8008d-47b2-47c7-a40c-8d5164151918)


- **Move Input**:
  ![Screenshot from 2024-08-27 03-47-32](https://github.com/user-attachments/assets/c38a7e06-f762-483c-ad47-b50afec91efc)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# PRATIK-SINHA-21BCE11508
