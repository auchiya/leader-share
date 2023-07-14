import React from "react";
import { Leaderboard as LeaderboardType } from "./types/Leaderboard";
import Leaderboard from "./Leaderboard";
import { ShareLeaderBoard } from "./ShareLeaderBoard";

type Props = {
  leaderboards: LeaderboardType[];
};

const LeaderboardList: React.FC<Props> = ({ leaderboards }) => (
  <>
    <div>
      {leaderboards.map((leaderboard, index) => (
        <div key={index}>
          <h2>{leaderboard.name}</h2>
          <Leaderboard players={leaderboard.players} />
        </div>
      ))}
    </div>
  </>
);

export default LeaderboardList;
