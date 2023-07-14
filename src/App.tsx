import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from "./Profile";
import { LeaderBoardPage } from "./LeaderBoardPage";
import { BadgeDetails } from "./BadgeDetails";
import TopBar from "./Topbar";
import { UserProvider } from "./UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <TopBar username="John Doe" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LeaderBoardPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/badgedetails" element={<BadgeDetails />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
};

export default App;
