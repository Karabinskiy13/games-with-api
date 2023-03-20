import React from 'react';
import { GamesResults } from '../types';

export type GameProps = {
  game: GamesResults;
};

const Game = ({ game }: GameProps) => {
  return (
    <div style={{ backgroundImage: game.background_image }}>
      <div>{game.name}</div>
      <div>
        Aviable Platforms :
        {game.platforms &&
          game.platforms.map((platform) => <div key={platform.id}>{platform.name}</div>)}
      </div>
    </div>
  );
};

export default Game;
