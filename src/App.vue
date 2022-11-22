<script setup>


import Nav from './components/Nav.vue'
</script>

<template>
  <div id="wallpaper">
    <Nav></Nav>
    <router-view></router-view>
  </div>

</template>

<style lang="css" scoped>
#wallpaper {

  height: 100vh;
  width: 100%;
  background-image: url(./assets/wall.jpeg);
  background-repeat: no-repeat;
  background-size: cover;

}
</style>
