import{
	GET_TIME,
	UP_CITY,
	UP_TEMP,
	UP_WEATHER,
	UP_WORKER,
	UP_COMMUNITY,
	UP_DOOR,
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
		if(h<10){
			h = '0'+h;
		}
		if(m<10){
			m = '0'+m;
		}
		state.nowTime ='' + h + ':' + m ;
	},
	[UP_TEMP](state,temp){

	},
	[UP_CITY](state,city){

	},
	[UP_WEATHER](state,weather){

	},
	[UP_WORKER](state,worker){

	},
	[UP_COMMUNITY](state,community){

	},
	[UP_DOOR](state,door){

	}
}