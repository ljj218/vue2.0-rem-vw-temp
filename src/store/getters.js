/*
 * @Author: long_jj
 * @Date: 2021-09-08 15:08:30
 * @LastEditTime: 2021-09-08 15:24:31
 * @LastEditors: long_jj
 * @Description: 
 * @FilePath: \vue-template-demo-master\src\store\getters.js
 */
const getters = {
	//用户成绩信息
	userScoreInfo: state => {
		if (!state.user.userScoreInfo) {
			return uni.getStorageSync('userScoreInfo') ? JSON.parse(uni.getStorageSync('userScoreInfo')) : ''
		}
		return state.user.userScoreInfo
	},
	

}
export default getters
