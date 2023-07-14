import React, { useState } from "react"
import { leaderboards } from "./data"
import Leaderboard from "./Leaderboard";

export const LeaderBoardPage = () => {
    
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <>
            <h1 className="mainTitle">Placed Bets</h1>
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
        </>
    )
}
