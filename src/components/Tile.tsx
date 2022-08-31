import { useState } from "react";

type Props = {
  parent_index: number;
  child_index: number;
  child_value: string;
  onClick: Function;
};

interface Piece {
  image: string;
  positionX: number;
  positionY: number;
}

const Pieces: Piece[] = [];

const piece = "w-[30px] h-[30px] rounded-full";

const tile_style =
  "flex justify-center items-center duration-200 h-[80px] w-[80px]";

function Tile({ parent_index, child_index, child_value, onClick }: Props) {
  const [pieceState, setPieceState] = useState("");

  const white_piece = `bg-white ${piece}`;
  const black_piece = `bg-black ${piece}`;
  const square_background =
    child_value !== "O"
      ? `bg-orange-200 hover:cursor-pointer hover:scale-105`
      : `bg-orange-400`;

  return (
    <div>
      <div
        key={child_index}
        onClick={() => onClick()}
        className={`${tile_style} ${square_background}`}
      >
        <div
          className={
            pieceState === "White"
              ? `${white_piece}`
              : pieceState === "Black"
              ? `${black_piece}`
              : ""
          }
        />
        <span
          className={
            child_value === "W"
              ? `${white_piece}`
              : child_value === `B`
              ? `${black_piece}`
              : ``
          }
        />
      </div>
    </div>
  );
}
export default Tile;
