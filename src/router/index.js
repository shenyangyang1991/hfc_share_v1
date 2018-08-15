import Vue from 'vue'
import Router from 'vue-router'

const SubjectPage = () => import('../components/SubjectPage')
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
          path: 'subject',
          name: 'SubjectPage',
          component: SubjectPage
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
