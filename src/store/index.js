/*
 * @Author: long_jj
 * @Date: 2021-09-08 15:08:30
 * @LastEditTime: 2021-09-08 15:31:20
 * @LastEditors: long_jj
 * @Description: 
 * @FilePath: \vue-template-demo-master\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user
  },
  getters
})

export default store
