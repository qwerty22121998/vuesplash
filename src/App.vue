<template>
  <div>
    <div id="app" class="container">
      <router-link :to="'/'">
        <img src="./assets/UnsplashLogo.png"/>
      </router-link>
      <router-view/>
    </div>
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #center {
    display: block;
    text-align: center;
  }

</style>
