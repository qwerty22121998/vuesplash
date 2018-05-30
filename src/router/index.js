import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import BootstrapVue from 'bootstrap-vue'
import VueModal from 'vue-js-modal'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueModal)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
