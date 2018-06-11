<template>
  <blockquote>
    <p>
      <router-link :to="'/'+detail.user.username">
        <h4><kbd>{{detail.user.username}}</kbd></h4>
      </router-link>
    </p>
    <img class="img-responsive" :src='detail.urls.small'
         :title='detail.description'/>
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
