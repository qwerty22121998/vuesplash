<template>
  <div>
    <div v-if="Object.keys(profile).length === 0" align="center">
      <h1>Profile not found!</h1>
    </div>
    <div v-if="Object.keys(profile).length !== 0"  align="center" style="padding-bottom: 40px">
      <blockquote class="row">
        <div class="col-xs-3">
          <img :src="profile.profile_image.large"/>
        </div>
        <div align="left" class="col-xs-9">
          <div class="row">
            <p class="username">{{profile.first_name}} {{profile.last_name}}</p>
          </div>
          <div class="row status-bar">
            <div class="col-xs-2">
              <strong class="btn-success"> {{profile.total_photos}} </strong> Photos
            </div>
            <div class="col-xs-2">
              <strong class="btn-primary"> {{profile.total_likes}} </strong>  Likes
            </div>
            <div class="col-xs-3">
              <strong class="btn-warning"> {{profile.total_collections}} </strong> Collections
            </div>
          </div>
          <div>
            <div class="full-name row">
              <p><strong>{{profile.username}}</strong></p>
            </div>
            <div class="row bio">
              <p>{{profile.bio}}</p>
            </div>
          </div>
        </div>
      </blockquote>
      <hr>
      <div v-if="imgs.length > 0" class="row justify-content-center">
        <div v-for="(imgColumn, index) in imgs" :key="index" :class="'col-xs-' + (12/colNumber)"
             style="display: inline-block">
          <div v-for="(detail, index) of imgColumn" :key="index" class="row">
            <ImageCard :detail="detail"></ImageCard>
          </div>
        </div>
      </div>
      <inf-loading v-if="!endLoad" @infinite="infHandler"></inf-loading>
    </div>

  </div>

</template>

<script>
import ImageCard from '@/components/ImageCard.vue'
import InfLoading from 'vue-infinite-loading'

let API = require('./API.js')
export default {
  name: 'ImageList',
  components: {
    InfLoading,
    ImageCard
  },
  data: () => ({
    username: '',
    profile: Object,
    page: 1,
    perPage: 12,
    colNumber: 3,
    imgs: [],
    errors: [],
    endLoad: false
  }),
  methods: {
    loadImgs: function () {
      this.username = this.$route.params.username
      let data = API.loadUserLastest(this.page, this.perPage, this.username)
      data.then(response => {
        this.profile = response.data[0]['user']
        for (let i = 0; i < response.data.length; i++) {
          this.imgs[i % this.colNumber].push(response.data[i])
        }
      }).catch(error => {
        if (this.page === 0) this.errors.push(error.message)
        this.endLoad = true
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
  .username {
    font-size: 32px;
    line-height: 40px;
    font-weight: 200;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  .status-bar {
    font-size: 14px;
  }
  .full-name {
    font-size: 16px;
    color: #262626;
    padding-top: 10px;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  .bio {
    font-size: 16px;
    color: #262626;
    padding-top: 10px;
    font-weight: 300;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
</style>
