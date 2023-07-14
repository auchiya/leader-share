import React from "react";
import { Player } from "./types/Player";
import PlayerItem from "./PlayerItem";
import { Link } from "react-router-dom";

type Props = {
  players: Player[];
};

const Leaderboard: React.FC<Props> = ({ players }) => (
  <table className="table">
    <tbody>
      {players.map((player, index) => (
        <Link to="/profile"> 
          <PlayerItem key={index} player={player} />
        </Link>
      ))}
    </tbody>
  </table>
);

export default Leaderboard;
