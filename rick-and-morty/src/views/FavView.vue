<template>
  <div class="container d-flex align-items-center justify-content-start">
    <div class="separator-fav d-flex align-items-center">
      <h1 class="text-fav">
        Todos os seus
        <span class="fav">favoritos.</span>
        <img class="img" src="../assets/portal.png" alt="img-portal" />
      </h1>
    </div>
  </div>

  <div v-if="!favoriteCharacters.length" class="no-favorites container d-flex align-items-center justify-content-center">
    <h2 class="text-fav">
      Você ainda não tem personagens favoritos, clique no portal para adicionar aos favoritos!
      <img class="img" src="../assets/portal.png" alt="img-portal" />
    </h2>
  </div>

  <div class="favorite-characters d-flex container flex-wrap align-items-center justify-content-center">
    <CharacterCard
      v-for="character in favoriteCharacters"
      :key="character.id"
      :character="character"
      @addToFavorites="addToFavorites(character)"
      @removeFromFavorites="removeFromFavorites(character.id)"
    />
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed, defineComponent } from 'vue';
import CharacterCard from '@/components/CharacterCard.vue';

export default defineComponent({
  name: 'FavView',
  components: {
    CharacterCard,
  },
  setup() {
    const store = useStore();

    const favoriteCharacters = computed(() => {
      return store.state.favorites.favoriteCharacters;
    });

    return {
      addToFavorites(character) {
        store.dispatch("addToFavorites", character); 
      },

      removeFromFavorites(characterId) {
        store.dispatch("removeFromFavorites", characterId); 
      },
      favoriteCharacters,
    };
  }
});
</script>

<style lang="scss" scoped>
.container {
  gap: 20px;
}

.separator-fav {
  width: 100%;
  padding: 15px;
  margin-top: 15px;
  border-bottom: 2px solid #6bd422;
}

.text-fav {
  color: #fff;
  font-size: 36px;
  font-weight: 700;
}

.fav {
  font-size: 36px;
  color: #11b0c8;
  font-weight: 700;
}

.img {
  width: 70px;
  height: 70px;
  margin-left: 15px;
}

.no-favorites, .favorite-characters {
  width: 800px;
  height: 100vh;
  font-size: 20px;
}
</style>
