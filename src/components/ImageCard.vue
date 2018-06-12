<template>
  <blockquote>
    <p>
      <router-link :to="'/'+detail.user.username">
        <h4><kbd>{{detail.user.username}}</kbd></h4>
      </router-link>
    </p>
    <label :for="detail.id">
      <img class="img-responsive" :src='detail.urls.small' :title='detail.description'/>
    </label>
    <div class="mmodal">
      <input :id="detail.id" class="checkbox" type="checkbox">
      <div class="mmodal-overlay">
        <label :for="detail.id" class="o-close"></label>
        <div class="mmodal-wrap small a-center">
          <img class="img-responsive" :src='detail.urls.regular' :title='detail.description'/>
        </div>
      </div>
    </div>
  </blockquote>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    detail: Object
  }
}
</script>

<style scoped>

</style>
