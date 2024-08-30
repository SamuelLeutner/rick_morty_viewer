import { Module } from "vuex";
import { RootState } from "@/store/types";
import { FavoritesState } from "@/store/types";

const favoritesModule: Module<FavoritesState, RootState> = {
  state: {
    favoriteCharacters: [],
  },
  mutations: {
    addToFavorites(state, character) {
      state.favoriteCharacters.push(character);
    },
    removeFromFavorites(state, characterId) {
      state.favoriteCharacters = state.favoriteCharacters.filter(
        (char) => char.id !== characterId
      );
    },
  },
  actions: {
    addCharacterToFavorites({ commit }, character) {
      commit("addToFavorites", character);
    },
    removeCharacterFromFavorites({ commit }, characterId) {
      commit("removeFromFavorites", characterId);
    },
  },
  getters: {
    isCharacterFavorite: (state) => (characterId) => {
      return state.favoriteCharacters.some((char) => char.id === characterId);
    },
  },
};

export default favoritesModule;
