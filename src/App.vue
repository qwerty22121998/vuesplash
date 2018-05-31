<template>
  <div id="app" class="container">
    <img src="./assets/UnsplashLogo.png">
    <div class="menu-item" align="left">
      <router-link to="/"><kbd>Lastest</kbd></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
  #app {

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .menu-item {
    font-size: 30pt;
    padding: 20px;
  }
</style>
