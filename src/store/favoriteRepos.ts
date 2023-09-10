import { create } from "zustand";

type favoriteReposState = {
  favoriteReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};

export const useFavoriteReposStore = create<favoriteReposState>((set) => ({
  favoriteReposIds: [],
  addFavoriteRepo: (id: number) =>
    set((state) => ({
      favoriteReposIds: [...state.favoriteReposIds, id],
    })),

  removeFavoriteRepo: (id: number) =>
    set((state) => ({
      favoriteReposIds: state.favoriteReposIds.filter(
        (repoId) => repoId !== id
      ),
    })),
}));
