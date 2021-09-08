/*
 * @Author: long_jj
 * @Date: 2021-09-08 15:22:51
 * @LastEditTime: 2021-09-08 15:31:32
 * @LastEditors: long_jj
 * @Description: 
 * @FilePath: \vue-template-demo-master\src\store\modules\app.js
 */

const app = {
	namespaced: true,
	state: {
		univList: [],
	},
	mutations: {
		//清除大学列表信息
		CLEAR_UNIV_DATA: (state) => {
			state.univList = []
		},

	}
}

export default app

