import React, { useEffect } from 'react';
import Game from '../components/Game';
import { gamesService } from '../services/games.service';
import { GamesResults } from '../types';

export type HomeProps = {
  games: GamesResults[];
};

const Home = ({ games }: HomeProps) => {
  useEffect(() => {
    console.log(gamesService.getAllGames());
  });
  console.log(games);
  return (
    <div>
      <Game game={games} />
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const result = await gamesService.getAllGames();
    const data = result.data.results;
    return {
      props: {
        games: data
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export default Home;
