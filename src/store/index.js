import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	nowTime: '',
	city: '深圳市初始',
	temp: '温度初始',
	weather: '天气初始',
	worker: '值班人初始',
	community: '小区初始',
	isOpen: false,
	

}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})