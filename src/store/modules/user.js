/*
 * @Author: long_jj
 * @Date: 2021-09-08 15:22:51
 * @LastEditTime: 2021-09-08 15:25:14
 * @LastEditors: long_jj
 * @Description: 
 * @FilePath: \vue-template-demo-master\src\store\modules\user.js
 */

const user = {
	namespaced: true,
	state: {
		overflow: false,

	},
	mutations: {

		//显示专业意向弹框
		CHANGE_SHOW_PRO(state) {
			state.showPro = !state.showPro;
		},

	},
	actions: {
		// setUserIfo({ commit }, info) {
		//   commit('CLEAR_USER_DATA', info)
		// }

	}
}

export default user