import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import Show from 'components/ShowPage'

Vue.use(Router)

export default new Router({
  //  mode: 'history',``
  routes: [{
    path: '/',
    name: 'index',
    component: HelloWorld
  },
  // {
  //   path: '/:id',
  //   name: 'show',
  //   component: Show
  // }
  ]
})
