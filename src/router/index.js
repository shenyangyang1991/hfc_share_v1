import Vue from 'vue'
import Router from 'vue-router'

const TopicsPage = () => import('../components/TopicsPage')
const TopicPage = () => import('../components/TopicPage')
const Page = () => import('../components/Page')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/share',
      component: Page,
      children: [
        {
          path: 'topics',
          name: 'TopicsPage',
          component: TopicsPage
        },
        {
          path: 'topic',
          name: 'TopicPage',
          component: TopicPage
        }
      ]
    },

  ]
})
