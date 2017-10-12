import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import vuextext from '@/components/vuextext'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/vuextext',
      name: 'vuextext',
      component: vuextext
    }
  ]
})
