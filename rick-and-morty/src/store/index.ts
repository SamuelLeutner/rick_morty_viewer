import { createStore } from 'vuex';
import favoritesModule from '@/store/favorites';
import { RootState } from '@/store/types';

const store = createStore<RootState>({
  modules: {
    favorites: favoritesModule,
  },
});

export default store;
