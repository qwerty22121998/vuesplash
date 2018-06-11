<template>
  <div>
    <div v-if="imgs.length > 0" class="row justify-content-center">
      <div v-for="(imgColumn, index) in imgs" :key="index" :class="'col-xs-' + (12/colNumber)"
           style="display: inline-block">
        <div v-for="(detail, index) of imgColumn" :key="index" class="row">
          <ImageCard :detail="detail"></ImageCard>
        </div>
      </div>
    </div>
    <inf-loading @infinite="infHandler"></inf-loading>
  </div>

</template>

<script>
import InfLoading from 'vue-infinite-loading'
import ImageCard from '@/components/ImageCard.vue'

let API = require('./API.js')
export default {
  name: 'ImageList',
  components: {
    ImageCard,
    InfLoading
  },
  data: () => ({
    page: 1,
    perPage: 12,
    colNumber: 3,
    imgs: [],
    errors: []
  }),
  props: ['username'],
  methods: {
    loadImgs: function () {
      let searchQuery = this.$route.query.search
      if (searchQuery === '') searchQuery = null

      let data = (searchQuery == null) ? API.loadLastest(this.page, this.perPage) : API.loadSearch(this.page, this.perPage, searchQuery)
      data.then(response => {
        if (searchQuery == null) {
          for (let i = 0; i < response.data.length; i++) {
            this.imgs[i % this.colNumber].push(response.data[i])
          }
        } else {
          for (let i = 0; i < response.data.results.length; i++) {
            this.imgs[i % this.colNumber].push(response.data.results[i])
          }
        }
      }).catch(error => {
        this.errors.push(error.message)
      })
    },
    next: function () {
      this.page++
      this.loadImgs()
    },
    infHandler ($state) {
      setTimeout(() => {
        this.next()
        $state.loaded()
      }, 1000)
    },
    modalShow (name) {
      this.$modal.show(name)
    },
    modalHide (name) {
      this.$modal.hide(name)
    }
  },
  mounted: function () {
    this.loadImgs()
  },
  created: function () {
    for (let i = 0; i < this.colNumber; i++) {
      this.imgs.push([])
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  kbd {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
</style>
