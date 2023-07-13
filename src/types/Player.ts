export type Player = {
  name: string;
  nickname: string;
  score: number;
};

export const players: Player[] = [
  { name: "Player 1", nickname: "P1", score: 100 },
  { name: "Player 2", nickname: "P2", score: 200 },
  // ...
];
