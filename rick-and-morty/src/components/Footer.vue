<template>
  <div class="bk-do-footer">
    <footer class="container container-footer">
      <div class="separador">
        <span class="d-flex justify-content-center">
          © Desenvolvido por Samuel ©
        </span>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style lang="scss">
.bk-do-footer {
  height: 10vh;
  background-color: #050505;
}

.container {
  margin: 20px 0 30px 0;

}

.separador {
  border-top: 2px solid #6bd422;

  span {
    padding: 15px;
    color: #ffffff;
  }
}
</style>
