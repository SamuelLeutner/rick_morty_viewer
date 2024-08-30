import { Character } from '@/models/Character';

export interface RootState {
  favorites: FavoritesState;
}

export interface FavoritesState {
  favoriteCharacters: Character[];
}
