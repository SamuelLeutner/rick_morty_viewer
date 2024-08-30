<template>
  <div class="App">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  components: {
    Header,
    Footer,
  },
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap');


.App {
  background-color: #050505;
  font-family: 'Noto Sans', sans-serif;
}
</style>
