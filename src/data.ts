import { Leaderboard } from "./types/Leaderboard";
import { Player } from "./types/Player";

const generatePlayers = (start: number): Player[] => {
  const players: Player[] = [];
  for (let i = start; i < start + 50; i++) {
    players.push({
      name: `Player ${i}`,
      nickname: `P${i}`,
      score: Math.floor(Math.random() * 1000), // Random score between 0 and 1000
      profilePicture: `https://picsum.photos/seed/${i}/200/300`, // Random profile picture
    });
  }
  return players;
};

const leaderboards: Leaderboard[] = [
  {
    name: "Placed Bets",
    players: generatePlayers(1).sort((a, b) => a.score < b.score ? 1 : -1)
    },
  // Add more leaderboards as needed
];

export { leaderboards };
