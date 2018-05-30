<template>
  <div>
    <ul v-if="imgs && imgs.length">
      <li v-for="img of imgs" :key="img.user">
        <p><strong>{{img.user.username}}</strong></p>
        <img :src='img.urls.small'/>
      </li>
    </ul>
    <button v-on:click="next">Next Page</button>
  </div>
</template>

<script>
import Axious from 'axios'

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
          this.imgs = response.data
        }).catch(error => {
          this.errors.push(error)
        })
    },
    next: function () {
      this.page++
      this.loadImgs()
    }
  },
  mounted: function () {
    this.loadImgs()
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
