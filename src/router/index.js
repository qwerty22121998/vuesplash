import Vue from 'vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import '@/components/modal.css'
import HomePage from '@/components/HomePage'
import UserPage from '@/components/UserPage'
Vue.use(Router)

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

  ],
  mode: 'history'
})
