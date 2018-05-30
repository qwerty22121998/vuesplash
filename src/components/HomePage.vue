<template>
  <div>
    <div v-if="imgs && imgs.length" type="none">
      <div v-for="img of imgs" :key="img.user" style="width: 40%; display: inline-block">
        <p><a :href="img.user.portfolio_url"><strong>{{img.user.username}}</strong></a></p>
        <img :src='img.urls.small'/>
      </div>
    </div>
    <inf-loading @infinite="infHandler"></inf-loading>
  </div>
</template>

<script>
import Axious from 'axios'
import InfLoading from 'vue-infinite-loading'

export default {
  name: 'ImageList',
  data: () => ({
    page: 1,
    perPage: 10,
    imgs: [],
    errors: []
  }),
  methods: {
    loadImgs: function () {
      console.log('Load')
      const url = 'https://api.unsplash.com/photos'
      const headers = {
        Authorization: 'Client-ID 3d64a4c88f3c9c8ed9be2af2b051b9dcd99b9bafd3c545952adb0ee2caf1c50d'
      }
      var instance = Axious.create({
        headers
      }
      )
      instance.get(url + '?page=' + this.page + '&perPage=' + this.perPage)
        .then(response => {
          console.log(response.data)
          this.imgs = this.imgs.concat(response.data)
        }).catch(error => {
          this.errors.push(error)
        })
    },

    next: function () {
      this.page++
      this.loadImgs()
      // scroll(0, 0)
    },
    infHandler ($state) {
      setTimeout(() => {
        this.next()
        $state.loaded()
      }, 1000)
    }
  },
  mounted: function () {
    this.loadImgs()
  },
  components: {
    InfLoading
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
