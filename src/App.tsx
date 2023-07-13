import React from "react";
import { useState } from "react";
import "./App.css";
import Leaderboard from "./Leaderboard";
import { leaderboards } from "./data";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <h1>Leaderboards</h1>
      <ul className="nav nav-tabs">
        {leaderboards.map((leaderboard, index) => (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link ${selectedTab === index ? "active" : ""}`}
              onClick={() => handleTabChange(index)}
            >
              {leaderboard.name}
            </a>
          </li>
        ))}
      </ul>
      {leaderboards.map((leaderboard, index) => (
        <div key={index} hidden={selectedTab !== index}>
          {selectedTab === index && (
            <Leaderboard players={leaderboard.players} />
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
