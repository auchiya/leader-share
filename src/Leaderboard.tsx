import React from "react";
import { Player } from "./types/Player";
import PlayerItem from "./PlayerItem";
import { Link } from "react-router-dom";
import styled from "styled-components";


type Props = {
  players: Player[];
};

const Leaderboard: React.FC<Props> = ({ players }) => (
  <table className="table">
    <tbody>
      {players.map((player, index) => (
        <Link to="/profile"> 
          <PlayerItem key={index} position={index + 1} player={player} />
        </Link>
      ))}
    </tbody>
  </table>
);

export default Leaderboard;
