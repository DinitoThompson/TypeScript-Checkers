import { useEffect, useState } from "react";
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
  [
    [0, 1],
    [0, 3],
    [0, 5],
    [0, 7],
  ],
  [
    [1, 0],
    [1, 2],
    [1, 4],
    [1, 6],
  ],
  [
    [2, 1],
    [2, 3],
    [2, 5],
    [2, 7],
  ],
];
const START_POSITIONS_BLACK = [
  [
    [5, 0],
    [5, 2],
    [5, 4],
    [5, 6],
  ],
  [
    [6, 1],
    [6, 3],
    [6, 5],
    [6, 7],
  ],
  [
    [7, 0],
    [7, 2],
    [7, 4],
    [7, 6],
  ],
];

const VALID_MOVE_POSITIONS = [
  [
    [0, 1],
    [0, 3],
    [0, 5],
    [0, 7],
  ],
  [
    [1, 0],
    [1, 2],
    [1, 4],
    [1, 6],
  ],
  [
    [2, 0],
    [2, 2],
    [2, 4],
    [2, 6],
  ],
  [
    [3, 1],
    [3, 3],
    [3, 5],
    [3, 7],
  ],
  [
    [4, 0],
    [4, 2],
    [4, 4],
    [4, 6],
  ],
  [
    [5, 0],
    [5, 2],
    [5, 4],
    [5, 6],
  ],
  [
    [6, 1],
    [6, 3],
    [6, 5],
    [6, 7],
  ],
  [
    [7, 0],
    [7, 2],
    [7, 4],
    [7, 6],
  ],
];

const buttonStyle = `border-white border-solid border-[3px] p-3 rounded-full text-white font-bold text-xl uppercase tracking-wide hover:scale-105 duration-300`;

const piece =
  "w-[40px] h-[40px] rounded-full shadow-lg hover:cursor-pointer hover:scale-105 duration-300";
const white_piece = `bg-white ${piece}`;
const black_piece = `bg-gray-800 ${piece}`;

function Board() {
  const [boardState, setBoardState] = useState(CHECKERS_BOARD);
  const [currentPlayer, setCurrentPlayer] = useState("W");
  const [active, setActive] = useState(false);

  const [currentPosition, setCurrentPosition] = useState<number[]>([0, 0]);

  const playerMovement = (parentIndex: number, childIndex: number) => {
    setCurrentPosition([parentIndex, childIndex]);
    togglePlayer();
  };

  const movePlayer = (initialPosition: number[], nextPosition: number[]) => {};

  const togglePlayer = () => {
    if (currentPlayer === "W") setCurrentPlayer("B");
    else setCurrentPlayer("W");
  };

  const placeInitialPieces = (childValue: string) => {
    if (childValue === "W") return `${white_piece}`;
    else if (childValue === `B`) return `${black_piece}`;
    else return ``;
  };

  const resetBoard = () => {
    setBoardState(CHECKERS_BOARD);
  };

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col space-y-8 justify-center items-center">
      {/* Header Section */}
      <div className="flex items-end space-x-9 w-auto">
        <h1 className="text-3xl uppercase text-white tracking-widest font-bold">
          Checkers Game :{" "}
          <span className="tracking-wide font-light text-red-500">
            Red Board
          </span>
        </h1>
        <p className="text-xl tracking-widest font-bold">
          Tile Position: {currentPosition[0]} , {currentPosition[1]}
        </p>
      </div>
      {/* Board Section */}
      <div className="flex space-x-8 justify-center items-center">
        <div>
          <p className="text-xl text-white font-bold">
            Current Player:{" "}
            <span>{currentPlayer === "W" ? "White" : "Black"}</span>
          </p>
        </div>
        <div className="border-black border-[10px] rounded-lg">
          {/* Parent Row */}
          {boardState.map((parent_value, parentIndex) => (
            <div key={parentIndex} className="flex flex-row">
              {/* Child Tile */}
              {parent_value.map((childValue, childIndex) => (
                <Tile
                  key={childIndex}
                  parentIndex={parentIndex}
                  childIndex={childIndex}
                  childValue={childValue}
                  playerPiece={placeInitialPieces(childValue)}
                  onClick={() => playerMovement(parentIndex, childIndex)}
                />
              ))}
            </div>
          ))}
        </div>
        <div>
          <p className="text-xl text-white font-bold">
            Next Player:{" "}
            <span>{currentPlayer === "W" ? "Black" : "White"}</span>
          </p>
        </div>
      </div>
      {/* Footer Section */}
      <div className="flex space-x-8">
        <button className={`${buttonStyle}`}>Start Game</button>
        <button className={`${buttonStyle}`} onClick={resetBoard}>
          Reset Game
        </button>
        <button className={`${buttonStyle}`}>Restart Game</button>
      </div>
    </div>
  );
}

export default Board;
