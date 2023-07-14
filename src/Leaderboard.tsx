import React from "react";
import { Player } from "./types/Player";
import PlayerItem from "./PlayerItem";

type Props = {
  players: Player[];
};

const Leaderboard: React.FC<Props> = ({ players }) => (
  <table className="table">
    <tbody>
      {players.map((player, index) => (
        <PlayerItem key={index} player={player} />
      ))}
    </tbody>
  </table>
);

export default Leaderboard;
