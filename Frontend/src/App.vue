<script >
import { RouterLink, RouterView } from 'vue-router'
export default {
};
</script>

<template>
  <div id="app">
      <router-view>
      </router-view>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');   
  *{
    margin : 0px;
    padding : 0px;
    font-family: 'Roboto', sans-serif;
  }
  #app{
    background-image: url('./assets/BG.png');

  }
</style>
