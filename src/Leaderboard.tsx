import React from "react";
import { Player } from "./types/Player";
import PlayerItem from "./PlayerItem";
import styled from "styled-components";


type Props = {
  players: Player[];
};

const Leaderboard: React.FC<Props> = ({ players }) => (
  <table className="table">
    <tbody>
      {players.map((player, index) => (
        <PlayerItem key={index} position={index + 1} player={player} />
      ))}
    </tbody>
  </table>
);

export default Leaderboard;
