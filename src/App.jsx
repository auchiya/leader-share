import "./App.css";
import Leaderboard from "./Leaderboard";
import { players } from "./Player";

function App() {
  const sortedPlayers = players.sort((a, b) => b.score - a.score);

  return (
    <>
      <h1>Leaderboard</h1>
      <Leaderboard players={sortedPlayers} />
    </>
  );
}

export default App;
