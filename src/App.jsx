import "./App.css";
import Leaderboard from "./Leaderboard";
import { players } from "./Player";

function App() {
  // Generate 50 players
  for (let i = 3; i <= 50; i++) {
    players.push({
      name: `Player ${i}`,
      nickname: `P${i}`,
      score: Math.floor(Math.random() * 1000), // Random score between 0 and 1000
    });
  }

  const sortedPlayers = players.sort((a, b) => b.score - a.score);

  return (
    <>
      <h1>Leaderboard</h1>
      <Leaderboard players={sortedPlayers} />
    </>
  );
}

export default App;
