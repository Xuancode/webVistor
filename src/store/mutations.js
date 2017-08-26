import{
	GET_TIME,
} from './mutation-types.js'

import {setStore, getStore} from '../config/mUtils'

export default{
	// //记录当前位置
	// [RECORD_ADDRESS](state){

	// },

	// //记录用户信息
	// [RECORD_LOGIN](){},

	// //记录当日访客列表
	// [RECORD_VISTOR](){},

	// //获取历史某日访客信息
	// [SOMEDAY_VISTOR](){},

	//记录当前时间
	[GET_TIME](state){
		var t = new Date();
		var h = t.getHours();
		var m = t.getMinutes();
		state.nowTime ='' + h + ':' + m ;
	},






}