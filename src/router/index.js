import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'

const routerHistory = createWebHistory()

const routes = [
  {
    path: '/',
    name: 'Sākums',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Autorizēties',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Reģistrēties',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/universities',
    name: 'Universites',
    component: () => import(/* webpackChunkName: "universities" */ '../views/Universities.vue')
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: () => import(/* webpackChunkName: "teachers" */ '../views/Teachers.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({ history: routerHistory, routes })

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router