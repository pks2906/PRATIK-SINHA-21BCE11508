# Turn-based Chess-like Game with WebSocket Communication

## Overview
This project is a turn-based chess-like game that is played between two players on a 5x5 grid. The game is designed with a server-client architecture utilizing WebSockets for real-time communication. Players control a team of characters with unique movement abilities and compete to outmaneuver their opponent.

## Features
- **Real-time Gameplay**: The game allows two players to compete in real-time using WebSocket communication.
- **Character Types**: Three character types are available: Pawn, Hero1, and Hero2, each with unique movement patterns and abilities.
- **Dynamic Game State**: The server processes moves, updates the game state, and manages turn-taking.
- **Interactive UI**: A web-based user interface displays the game board, characters, and controls, providing an engaging experience.

## Game Rules

### Game Setup
- The game is played between two players on a 5x5 grid.
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

