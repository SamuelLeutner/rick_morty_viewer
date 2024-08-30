<template>
  <div class="container d-flex flex-wrap character-list justify-content-center align-items-center">
    <CharacterCard v-for="character in characters" :key="character.id" :character="character"
      :selectedCharacterId="selectedCharacterId" @click="showCharacterDetails(character.id)" />
    <div class="arrow">
      <img class="arrow-l" src="@/assets/arrow.png" alt="Seta para a esquerda" @click="previousPage" v-if="currentPage > 1" />
      <img class="arrow-r" src="@/assets/arrow.png" alt="Seta para a direita" @click="nextPage" v-if="hasNextPage" />
    </div>
  </div>
</template>

<script lang="ts">
import CharacterCard from "@/components/CharacterCard.vue";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useCharacterAPI } from "@/services/characterAPI";
import { Character } from "@/models/Character";

export default defineComponent({
  components: {
    CharacterCard,
  },
  setup() {
    const { fetchCharacters } = useCharacterAPI();
    const characters = ref<Character[]>([]);
    const selectedCharacterId = ref<number>(1);
    const currentPage = ref<number>(1);

    const pageSize = 20;

    onMounted(async () => {
      await fetchPage(currentPage.value);
    });

    const fetchPage = async (page: number) => {
      characters.value = await fetchCharacters(page);
    };

    const showCharacterDetails = (characterId: number) => {
      selectedCharacterId.value = characterId;
    };

    const previousPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        fetchPage(currentPage.value);
      }
    };

    const nextPage = () => {
      currentPage.value++;
      fetchPage(currentPage.value);
    };

    const hasNextPage = computed(() => characters.value.length === pageSize);

    return {
      characters,
      selectedCharacterId,
      showCharacterDetails,
      previousPage,
      nextPage,
      currentPage,
      hasNextPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.arrow {
  gap: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  img {
    width: 70px;
    height: 70px;
    cursor: pointer;
  }
}

.arrow-r {
  transform: rotate(180deg);
}
</style>
