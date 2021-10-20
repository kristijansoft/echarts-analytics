import Vue from 'vue'
import VueRouter from 'vue-router'
import equipment from './modules/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/index'),
    meta: {
      title: '登录界面'
    }
  },
  {
    path: '/login',
    redirect: '/'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/brand',
    name: 'Brand',
    component: () => import('@/views/brand/index'),
    meta: {
      title: '公司品牌介绍'
    }
  },
  ...equipment
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
