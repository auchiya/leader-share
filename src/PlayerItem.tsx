import React from "react";
import { Player } from "./types/Player";
import { BsShare } from "react-icons/bs";
import Avatar from "react-avatar";
import { ShareLeaderBoard } from "./ShareLeaderBoard";

type Props = {
  player: Player;
};

import styled from "styled-components";

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

const PlayerItem: React.FC<Props> = ({ player }) => (
  <tr>
    <Card>
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
        <ShareLeaderBoard />
      </CardItem>
    </Card>
  </tr>
);

export default PlayerItem;
