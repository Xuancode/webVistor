<template>
	<section id="footer_guide">
		<section class="tab" :class="[$route.path.indexOf('home')!== -1?'isClick':'']" @click="gotoAddress({path: '/home', query: {}})">
			<div v-show="$route.path.indexOf('home')== -1"><img src="../images/home.png" alt=""></div>
			<div v-show="$route.path.indexOf('home')!== -1"><img src="../images/homeActive.png" alt=""></div>
			<span>首页</span>
		</section>
		<section class="tab" :class="$route.path.indexOf('record')!== -1?'isClick':''" @click="gotoAddress({path: '/record', query: {}})">
			<div v-show="$route.path.indexOf('record')== -1"><img src="../images/record.png" alt=""></div>
			<div v-show="$route.path.indexOf('record')!== -1"><img src="../images/recordActive.png" alt=""></div>
			<span>登记</span>
		</section>
		<section class="tab" :class="$route.path.indexOf('through')!== -1?'isClick':''" @click="gotoAddress({path: '/through', query: {}})">
			<div v-show="$route.path.indexOf('through')== -1"><img src="../images/through.png" alt=""></div>
			<div v-show="$route.path.indexOf('through')!== -1"><img src="../images/throughActive.png" alt=""></div>
			<span>滞留</span>
		</section>
		<section class="tab" :class="$route.path.indexOf('history')!== -1?'isClick':''" @click="gotoAddress({path: '/history', query: {}})">
			<div v-show="$route.path.indexOf('history')== -1"><img src="../images/history.png" alt=""></div>
			<div v-show="$route.path.indexOf('history')!== -1"><img src="../images/historyActive.png" alt=""></div>
			<span >历史</span>
		</section>
	</section>
</template>

<script>
	export default {
		data(){
			return{
				aaa: '../images/home.png',
			}
		},
		created(){

		},
		mounted(){

		},
		computed:{

		},
		methods:{
			gotoAddress(path){
				this.$router.push(path)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '.././style/mixin';
	$tabActiveColor: #a6b3b7;
	#footer_guide{
		background-color: #fff;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
		box-shadow: 0 -2px 3px 1px #ccc;
		@include wh(100%, 0.85rem);
		display: flex;
		.tab{
			flex: 1;
			display: flex;
			text-align: center;
			flex-direction: column;
			align-items: center;
			img{
				display: block;
				@include wh(0.45rem, 0.45rem);
				margin: 0.1rem 0 0.05rem 0;
			}
			span{
				@include sc(0.16rem, #7f8384);
			}
			.heheda{
				background-color:pink;
			}
		}
		.isClick{
			background-color: $tabActiveColor;
			span{
				color: #fff;
			}
		}
	}
</style>