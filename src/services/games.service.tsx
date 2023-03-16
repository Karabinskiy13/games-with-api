import { GamesResponse } from '../types';
import { urls } from '../constants';
import axiosService from './axios.service';

export const moviesService = {
  getGame: (id: string) => axiosService.get<GamesResponse>(`${urls.games}/${id}${urls.key}`),
  getAllGames: () => axiosService.get<GamesResponse>(urls.games.concat(urls.key)),
  getGenres: () => axiosService.get(urls.genres.concat(urls.key)),
  searchGame: (keyWord: string) => {
    if (!keyWord) return;
    return axiosService
      .get<GamesResponse>(urls.games.concat(urls.key, urls.query, keyWord))
      .then((value) => value.data);
  }
};
