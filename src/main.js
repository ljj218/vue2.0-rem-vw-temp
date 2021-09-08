/*
 * @Author: long_jj
 * @Date: 2021-09-08 15:08:30
 * @LastEditTime: 2021-09-08 15:50:02
 * @LastEditors: long_jj
 * @Description: 
 * @FilePath: \vue-template-demo-master\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// 导入vant
import '@/plugins/vant'
// 导入prototype
import '@/plugins/prototype'
// 导入路由守卫
import '@/guard/router.guard'
//  filters
import * as filter from './filters'
Object.keys(filter).forEach(k => Vue.filter(k, filter[k]))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
