<template>
  <div class="card-details d-flex justify-content-center align-items-center">
    <div class="bk-do-container character-card-container">
      <div class="d-flex justify-content-center">
        <img class="background-image" src="@/assets/portal.png" alt="Imagem do background" />
        <img v-if="character && character.image" :src="character.image" alt="Character Image" class="character-image">
      </div>
      <div class="bk-da-lista">
        <span class="btn-fav-container">
          <button class="btn-fav" @click="toggleFavorite">
            <img class="img-fav" src="../assets/portal.png" alt="Adicionar aos favoritos">
          </button>
        </span>
        <ul class="lista-estilizada">
          <li class="title-character">
            Nome: &nbsp;
            <span class="details-character">{{ character?.name }}</span>
          </li>
          <li class="title-character">
            Espécie: &nbsp;
            <span class="details-character">{{ character?.species }}</span>
          </li>
          <li class="title-character">
            Gênero: &nbsp;
            <span class="details-character">{{ character?.gender }}</span>
          </li>
          <li class="title-character">
            Nascimento: &nbsp;
            <span class="details-character">{{ character?.origin?.name }}</span>
          </li>
          <li class="title-character">
            Residência: &nbsp;
            <span class="details-character">{{ character?.location?.name }}</span>
          </li>
          <li class="title-character">
            Status: &nbsp;
            <span class="details-character">{{ character?.status }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore, mapGetters } from "vuex";
import { defineComponent, PropType } from "vue";
import { Character } from "@/models/Character";

export default defineComponent({
  name: "CardDetails",
  props: {
    character: { type: Object as PropType<Character> },
  },
  computed: {
    ...mapGetters(["isCharacterFavorite"]),
  },
  methods: {
    toggleFavorite() {
      const store = useStore();
      const characterId = this.character?.id;

      if (characterId !== undefined) {
        if (this.isCharacterFavorite(characterId)) {
          store.dispatch("addToFavorites", characterId);
        } else {
          store.dispatch("addToFavorites", this.character);
        }
      }
    },
  },
  setup(props) {
    const store = useStore();
    const characterId = props.character?.id;

    const isCharacterFavorite = (characterId) => {
      return store.getters.isCharacterFavorite(characterId);
    };

    const toggleFavorite = () => {
      console.log("Available actions:", store);


      if (characterId !== undefined) {
        if (isCharacterFavorite(characterId)) {
          store.dispatch("removeCharacterFromFavorites", characterId);
        } else {
          store.dispatch("addCharacterToFavorites", props.character);
        }
      }
    };

    return {
      isCharacterFavorite,
      toggleFavorite,
    };
  },
});
</script>

<style lang="scss" scoped>
.card-details {
  z-index: 1001;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bk-do-container {
  z-index: 100;
  width: 100%;
  height: 732px;
  display: flex;
  padding: 0 20px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-image: url(../assets/img-fundo-card.png);
}

.bk-da-lista {
  flex: 1;
  display: flex;
  padding: 50px;
  border-radius: 30px;
  align-items: flex-end;
  flex-direction: column;
  background: rgba(5, 5, 5, 0.60);
}

.lista-estilizada {
  flex: 1;
  margin: 0;
  padding: 0;
  color: #fff;
  display: flex;
  font-size: 24px;
  list-style: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.btn-fav-container {
  display: flex;
  margin-bottom: 10px;
  align-items: flex-end;
  justify-content: flex-end;
}

.btn-fav {
  border: none;
  background: none;
}

.img-fav {
  width: 50px;
  height: 50px;
}

.title-character {
  font-weight: 900;
  display: flex;
  align-items: center;
}

.details-character {
  font-weight: 400;
}

.character-image {
  top: 14%;
  left: 50%;
  z-index: 1;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.character-card-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 800px) {
  .bk-do-container {
    max-width: 500px;
  }

  .lista-estilizada {
    font-size: 20px;
  }
}

@media (max-width: 600px) {
  .bk-do-container {
    max-width: 350px;
  }

  .lista-estilizada {
    font-size: 18px;
  }
}

@media (max-width: 450px) {
  .bk-do-container {
    max-width: 250px;
  }

  .bk-da-lista {
    padding: 10px;
  }

  .lista-estilizada {
    font-size: 16px;
  }
}
</style>
