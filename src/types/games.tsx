export type GamesResponse = {
  count: number;
  results: GamesResults[];
};

export type GamesResults = {
  id: number;
  slug: string;
  name: string;
  released: number;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: [
    {
      id: number;
      title: string;
      count: number;
      percent: number;
    }
  ];
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status?: object;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  platforms: [
    {
      games_count: number;
      id: number;
      image: null;
      image_background: string;
      name: string;
      slug: string;
      year_end: null;
      year_start: number;
    }
  ];
};
