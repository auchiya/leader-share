import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IoIosArrowBack } from "react-icons/io";
import { FaHorseHead } from "react-icons/fa";

export const BadgeDetails = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <IoIosArrowBack
        size={30}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          cursor: "pointer",
        }}
        onClick={() => window.history.back()}
      />
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <FaHorseHead size={60} style={{ color: "gold" }} />
          <Card.Text>
            Complete the following challenges gain this badge:
          </Card.Text>
          <ul>
            <li>Challenge 1: Bet $500 in horse racing bets</li>
            <li>Challenge 2: Win 5 bets</li>
            <li>Challenge 3: Play for 5x in 15 days</li>
          </ul>
          <Button variant="primary">Go to Bets</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
