import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Profile } from "./Profile";
import { LeaderBoardPage } from "./LeaderBoardPage";

const App = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LeaderBoardPage />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
