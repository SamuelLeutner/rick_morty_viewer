<template>
  <header class="Header">
    <nav class="navbar-header">
      <router-link to="/">
        <div>
          <img class="img-header-maior" src="@/assets/logo.png" alt="Logo do site">
          <img class="img-header-menor" src="@/assets/favicon.png" alt="Logo do portal do header menor de 450px">
        </div>
      </router-link>

      <div>
        <router-link to="/favoritos">
          <button class="button">
            <div>
              <img class="" src="@/assets/portal.png" alt="Logo do portal do header">
              <span class="txt">
                Lista de favoritos
              </span>
            </div>
          </button>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});

</script>

<style lang="scss">
.Header {
  height: 90px;
  background-color: #050505;
  padding-top: 20px;
}

.navbar-header {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

}

.img-header-maior {
  width: 200px;
  height: 50px;
}

.img-header-menor {
  width: 50px;
  height: 50px;
  display: none;
}

.button {
  width: 203px;
  height: 40px;
  color: #fff;
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 32px;
  background-color: #11B0C8;

  .txt {
    font-size: 16px;
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 35px;
    height: 30px;
  }

  .logo-menor {
    width: 70px;
    height: 70px;
    display: none;
  }
}

@media (max-width: 450px) {

  .img-header-maior {
    display: none;
  }

  .img-header-menor {
    display: block;
  }

  .button {
    width: auto;

    span {
      display: none;
    }

  }
}
</style>