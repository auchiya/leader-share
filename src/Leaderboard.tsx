import React from "react";
import { Player } from "./types/Player";

type Props = {
  players: Player[];
};

const Leaderboard: React.FC<Props> = ({ players }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {players.map((player, index) => (
        <tr key={index}>
          <td>{player.name}</td>
          <td>{player.score}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Leaderboard;
