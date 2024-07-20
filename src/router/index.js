import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '@/components/details.vue'
import Create from '@/views/Create.vue'
import Tag from '@/views/Tag.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/posts/:id',
      name: 'Details',
      component: Details,
      props:true
    },  
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/tags/:tag',
      name: 'Tag',
      component: Tag,
      // props:true      
    }
  ]
})

export default router
