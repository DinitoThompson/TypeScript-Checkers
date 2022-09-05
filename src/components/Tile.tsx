import { useState } from "react";

type Props = {
  parentIndex: number;
  childIndex: number;
  childValue: string;
  playerPiece?: string;
  onClick: Function;
};

const tile_style = "flex justify-center items-center h-[80px] w-[80px]";

function Tile({
  parentIndex,
  childIndex,
  childValue,
  playerPiece,
  onClick,
}: Props) {
  const square_background = childValue !== "O" ? `bg-red-200` : `bg-red-400`;

  return (
    <div>
      <div
        key={childIndex}
        onClick={() => onClick()}
        className={`${tile_style} ${square_background}`}
      >
        <span className={playerPiece} />
      </div>
    </div>
  );
}
export default Tile;
