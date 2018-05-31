<template>
  <div>
      <nav class="navbar bg-dark fixed-top" style="border-radius: 0;">
      <div class="container-fluid">
        <router-link to="/" style="color:#fff; font-size: 16px;">HOME</router-link>
        <div class="col">
          <form class="form-inline" id="center" role="search" action="/">
            <input style="font-size: 15px;" type="text" class="form-control" name="search" placeholder="Search" size="25">
            <button style="font-size: 15px;" type="submit" class="btn btn-default">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <div id="app" class="container">

      <img src="./assets/UnsplashLogo.png">
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
