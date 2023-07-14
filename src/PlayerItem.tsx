import React from "react";
import { Player } from "./types/Player";
import { AiOutlineStar } from "react-icons/ai";
import Avatar from "react-avatar";
import { ShareLeaderBoard } from "./ShareLeaderBoard";

type Props = {
  player: Player;
};

import styled from "styled-components";
import { UserContext } from "./UserContext";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #f9f9f9;
`;

const CardItem = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
`;

const Label = styled.p`
  font-size: 0.8em;
  color: #888;
  margin-bottom: 5px;
`;

const PlayerItem: React.FC<Props> = ({ player }) => {
  const context = React.useContext(UserContext);
  const { user } = context!;

  return (
    <tr>
      <Card
        style={{
          backgroundColor:
            user && user.name === player.name ? "yellow" : "#f9f9f9",
        }}
      >
        <CardItem>
          <Avatar name={player.name} size="50" round={true} />
        </CardItem>
        <CardItem>
          <Label>Name</Label>
          {player.name}
        </CardItem>
        <CardItem>
          <Label>Score</Label>
          {player.score}
        </CardItem>
        <CardItem>
          <button>
            <AiOutlineStar />
          </button>
        </CardItem>
      </Card>
    </tr>
  );
};

export default PlayerItem;
