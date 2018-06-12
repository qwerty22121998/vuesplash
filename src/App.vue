<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header navbar-left">
          <router-link class="normal-font" to="/">
            <span class="glyphicon glyphicon-camera" aria-hidden="true"></span>
            Unsplash
          </router-link>
        </div>
        <form class="navbar-form center" :action="searchvl">
          <div class="form-group">
            <input type="text" name="" id="search" class="form-control" v-model="search" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Search</button>
        </form>
      </div>
    </nav>

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
  components: {},
  data () {
    return {
      search: ''
    }
  },
  computed: {
    searchvl () {
      return '/?search=' + this.search
    }
  }
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

  .normal-font {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    text-decoration: none;
    font-size: 25pt;
    color: white;
  }
  .normal-font:hover {
    text-decoration: none;
    color: white;
  }

  .normal-font:focus {
    text-decoration: none;
    color: white;
  }

  .center {
    display: block;
    text-align: center;
  }

</style>
