import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueModal from 'vue-js-modal'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import HomePage from '@/components/HomePage'
import UserPage from '@/components/UserPage'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueModal)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage

    },
    {
      path: '/:username',
      name: 'UserPage',
      component: UserPage
    }

  ]
})
