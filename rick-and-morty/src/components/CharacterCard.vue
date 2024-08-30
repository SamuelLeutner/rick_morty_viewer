<template>
  <div class="character-card" @click="showCharacterDetails">
    <img class="background-image" src="@/assets/portal.png" alt="Imagem do background" />
    <img v-if="character && character.image" :src="character.image" alt="Character Image" class="character-image">
  </div>
  <div class="overlay" v-if="isCardDetailsHidden" @click="hideCardDetails">
    <div class="card-details">
      <CardDetails :character="character"></CardDetails>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Character } from "@/models/Character";
import CardDetails from "@/components/CardDetails.vue";

export default defineComponent({
  components: {
    CardDetails,
  },
  props: {
    character: {
      type: Object as PropType<Character>,
      required: true,
    },
    selectedCharacterId: {
      type: Number,
    },
    characterImageUrl: {
      type: String,
    },
  },
  setup(props) {
    const isCardDetailsHidden = ref(false);

    const showCharacterDetails = () => {
      isCardDetailsHidden.value = !isCardDetailsHidden.value;
    };

    const hideCardDetails = () => {
      isCardDetailsHidden.value = false;
    };

    return {
      hideCardDetails,
      isCardDetailsHidden,
      showCharacterDetails
    };
  },
});
</script>

<style lang="scss" scoped>
.character-card {
  position: relative;
  width: 286px;
  height: 266px;
}

.background-image {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.character-image {
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.detalhes {
  z-index: 2;
  visibility: hidden;
}

.overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000; 
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7); 
}

</style>
