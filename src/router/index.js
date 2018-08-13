import Vue from 'vue'
import Router from 'vue-router'

const TopicsPage = () => import('../components/TopicsPage')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/topics',
      name: 'TopicsPage',
      component: TopicsPage
    }
  ]
})
