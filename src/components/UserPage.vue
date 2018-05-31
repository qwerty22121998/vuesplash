<template>
  <div>
    <div align="center" style="padding-bottom: 40px">
      <div class="row">
        <div class="col-4">
          <img :src="profile.profile_image.large"/>
        </div>
        <div align="left" class="col-8" style="border-style: solid;border-width: 1px;">
          <p class="username">{{profile.username}}</p>
          <div class="row status-bar">
            <div class="col">
              <b>{{profile.total_photos}}</b> Photos
            </div>
            <div class="col">
              <b>{{profile.total_likes}}</b> Likes
            </div>
            <div class="col">
              <b>{{profile.total_collections}}</b> Collections
            </div>
          </div>

        </div>
      </div>
    </div>
    <div v-if="imgs.length > 0" class="row justify-content-center">
      <div v-for="(imgColumn, index) in imgs" :key="index" :class="'col-' + (12/colNumber)"
           style="display: inline-block">
        <div v-for="(imgArr, index) of imgColumn" :key="index" class="row">
          <blockquote>
            <!--<p><a :href="imgArr.user.portfolio_url"><h2><kbd>{{imgArr.user.username}}</kbd></h2></a></p>-->
            <img v-on:click="modalShow(imgArr.id)" class="img-responsive" :src='imgArr.urls.small'
                 :title='imgArr.created_at'/>
          </blockquote>
          <modal :adaptive=true height="auto" :name="imgArr.id">
            <img class="img-responsive" :src="imgArr.urls.regular"/>
          </modal>
        </div>
      </div>
    </div>
    <!--<inf-loading @infinite="infHandler"></inf-loading>-->
  </div>

</template>

<script>
import InfLoading from 'vue-infinite-loading'

let imgLoader = require('./getImageList.js')
export default {
  name: 'ImageList',
  data: () => ({
    username: '',
    profile: null,
    page: 1,
    perPage: 12,
    colNumber: 3,
    imgs: [],
    errors: []
  }),
  props: ['username'],
  methods: {
    loadImgs: function () {
      this.username = this.$route.params.username
      let data = imgLoader.loadUserLastest(this.page, this.perPage, this.username)
      data.then(response => {
        this.profile = response.data[0]['user']
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
          console.log('ADD')
          this.imgs[i % this.colNumber].push(response.data[i])
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
  },
  components: {
    InfLoading
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .username {
    font-size: 32px;
    line-height: 40px;
    font-weight: 200;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  .status-bar {
    font-size: 14px;
  }
</style>
