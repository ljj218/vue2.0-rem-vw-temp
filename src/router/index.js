/*
 * @Author: long_jj
 * @Date: 2021-09-08 15:08:30
 * @LastEditTime: 2021-09-08 15:40:41
 * @LastEditors: long_jj
 * @Description: 
 * @FilePath: \vue-template-demo-master\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const routes = [{
    path: '*',
    redirect: "/home"
  }, {
    path: '/home',
    name: 'home',
    // 懒加载
    component: () => import('@/views/home/home.vue'),
    meta: {
      title: "首页",
      depth: 0,
      showFooter: true,
      showHeader: false,
      showHeaderBack: false,
      login: false,
      keepAlive: true
    }
  }, {
    path: '/category',
    name: 'category',
    component: (resolve) => require(['@/views/category/index.vue'], resolve),
    meta: {
      title: "效果",
      depth: 0,
      showFooter: true,
      showHeader: false,
      showHeaderBack: false,
      login: false,
      keepAlive: false
    }
  }, {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '@/views/about/about.vue'),
    meta: {
      title: "关于我",
      depth: 0,
      showFooter: true,
      showHeader: false,
      showHeaderBack: false,
      login: false,
      keepAlive: false
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router