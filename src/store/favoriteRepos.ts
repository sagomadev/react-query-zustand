import { create } from "zustand";

type favoriteReposState = {
  favoriteReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};

export const useFavoriteReposStore = create<favoriteReposState>(() => ({
  favoriteReposIds: [],
  addFavoriteRepo: (id: number) => {},
  removeFavoriteRepo: (id: number) => {},
}));
