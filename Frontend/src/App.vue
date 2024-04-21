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

* {
  margin: 0px;
  padding: 0px;
  font-family: 'Roboto', sans-serif;
}

#app {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* background-image: url('https://img.freepik.com/free-vector/abstract-smooth-liquid-banner-presentation-backdrop_1017-42992.jpg?w=1380&t=st=1683732500~exp=1683733100~hmac=177932f17dbb2bcbee22339f3e7d91ae76ba5ac8e893ccd067b84b3114f09260'); */

}
</style>
