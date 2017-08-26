import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import home from '@/pages/home'
import record from '@/pages/record'
import recordSure from '@/pages/recordSure'
import hasRecord from '@/pages/hasRecord'
import recordDetail from '@/pages/recordDetail'
// import access from '@/pages/recordson/children/access'
// import QRCode from '@/pages/recordson/children/children/QRCode'
import through from '@/pages/through'
import history from '@/pages/history'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Login',
			component: Login,
		},
		{
			path: '/home',
			name: 'home',
			component: home,
		},
		{
			path: '/record',
			name: 'record',
			component: record,
		},
		{
			path: '/recordSure',
			name: 'recordSure',
			component: recordSure,
		},
		{
			path: '/hasRecord',
			name: 'hasRecord',
			component: hasRecord,
		},
		{
			path: '/recordDetail',
			name: 'recordDetail',
			component: recordDetail,
		},		
		{
			path: '/through',
			name: 'through',
			component: through
		},
		{
			path: '/history',
			name: 'history',
			component: history
		}
	]
})
