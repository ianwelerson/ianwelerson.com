import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        allowTranslate: true
      },
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/challenges',
      component: () => import('@/views/Challenges/IndexView.vue'),

      children: [
        {
          path: '',
          name: 'challengesList',
          component: () => import('@/views/Challenges/ChallengesListView.vue')
        },
        {
          path: ':challengeId',
          name: 'challenge',
          component: () => import('@/views/Challenges/ChallengeView.vue')
        }
      ]
    },
    // {
    //   path: '/resume',
    //   name: 'resume',
    //   component: () => import('@/views/ResumeView.vue')
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})

export default router
