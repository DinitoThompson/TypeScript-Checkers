import { useState } from "react";
import Tile from "./Tile";

const CHECKERS_BOARD = [
  ["O", "W", "O", "W", "O", "W", "O", "W"],
  ["W", "O", "W", "O", "W", "O", "W", "O"],
  ["O", "W", "O", "W", "O", "W", "O", "W"],
  ["X", "O", "X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X", "O", "X"],
  ["B", "O", "B", "O", "B", "O", "B", "O"],
  ["O", "B", "O", "B", "O", "B", "O", "B"],
  ["B", "O", "B", "O", "B", "O", "B", "O"],
];

const START_POSITIONS_WHITE = [
  [0, 1],
  [0, 3],
  [0, 5],
  [0, 7],
  [1, 0],
  [1, 2],
  [1, 4],
  [1, 6],
  [2, 1],
  [2, 3],
  [2, 5],
  [2, 7],
];
const START_POSITIONS_BLACK = [
  [5, 0],
  [5, 2],
  [5, 4],
  [5, 6],
  [6, 1],
  [6, 3],
  [6, 5],
  [6, 7],
  [7, 0],
  [7, 2],
  [7, 4],
  [7, 6],
];

const VALID_MOVE_POSITIONS = [
  [0, 1],
  [0, 3],
  [0, 5],
  [0, 7],
  [1, 0],
  [1, 2],
  [1, 4],
  [1, 6],
  [2, 0],
  [2, 2],
  [2, 4],
  [2, 6],
  [3, 1],
  [3, 3],
  [3, 5],
  [3, 7],
  [4, 0],
  [4, 2],
  [4, 4],
  [4, 6],
  [5, 0],
  [5, 2],
  [5, 4],
  [5, 6],
  [6, 1],
  [6, 3],
  [6, 5],
  [6, 7],
  [7, 0],
  [7, 2],
  [7, 4],
  [7, 6],
];

const buttonStyle = `border-white border-solid border-[3px] p-3 rounded-full text-white font-bold text-xl uppercase tracking-wide hover:scale-105 duration-300`;

function Board() {
  const [boardState, setBoardState] = useState(CHECKERS_BOARD);
  const [clickedPosition, setClickPosition] = useState<number[]>([0, 0]);

  const playerMovement = (parent_position: number, child_position: number) => {
    setClickPosition([parent_position, child_position]);
  };
  return (
    <div className="flex flex-col space-y-8 justify-center items-center">
      <div className="flex items-end space-x-9 w-auto">
        <h1 className="text-3xl uppercase text-white tracking-widest font-bold">
          Checkers Game
        </h1>
        <p className="text-xl tracking-widest font-bold">
          Tile Position: {clickedPosition[0]} , {clickedPosition[1]}
        </p>
      </div>
      <div className="flex flex-col">
        {/* Parent Row */}
        {boardState.map((parent_value, parent_index) => (
          <div key={parent_index} className="flex flex-row">
            {/* Child Tile */}
            {parent_value.map((child_value, child_index) => (
              <Tile
                key={child_index}
                parent_index={parent_index}
                child_index={child_index}
                child_value={child_value}
                onClick={() => playerMovement(parent_index, child_index)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex space-x-8">
        <button className={`${buttonStyle}`}>Start Game</button>
        <button className={`${buttonStyle}`}>Reset Game</button>
        <button className={`${buttonStyle}`}>Restart Game</button>
      </div>
    </div>
  );
}

export default Board;
