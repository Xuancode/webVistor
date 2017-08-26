<template>
	<div class="form_div">
		<form>
			<label>时间</label>
			<input type="date" v-model="queryDate">
			<label>路址</label>
			<input type="text" placeholder='如:"7幢2单元1706"'v-model="address">
			<input class="key_word" type="text" placeholder="关键词" name="keyWord" v-model="keyWord">
			<button @click.prevent="query">查询</button>
			<section class="points" v-show="showPoint">
				<span class="red_point point"></span>
				<span class="point_text">超时</span>
				<span class="yellow_point point"></span>
				<span class="point_text">快超时</span>
			</section>
		</form>
	</div>
</template>

<script>

	export default {
		data(){
			return{
				queryDate: null,
				address: null,
				keyWord: null,
			}
		},
		methods:{
			query(){

			}
		},
		props:['showPoint'],
		mouted(){
			// console.log(__dirname);
		}

	}
</script>

<style lang="scss" scoped>
	@import '../../style/mixin';
	form{
		position: relative;
		label{
			margin-right: 0.05rem;
		}
		input{
			@include wh(1.6rem, 0.3rem);
			border-radius: 0.15rem;
			border: 0.01rem solid $blueBorder;
			margin-right: 0.2rem;
			padding-left: 0.12rem;
		}
		.key_word{
			width: 1.5rem;
		}
		button{
			background-color: $greyButton;
			line-height: 0.3rem;
			border-radius: 0.15rem;
			padding: 0 0.3rem;
			color: #fff;
		}
		.points{
			display: inline;
			.point{
				display: inline-block;
				@include wh(0.22rem, 0.22rem);
				border-radius: 0.11rem;
				// line-height: 0.31rem;
				vertical-align: middle;
				margin-bottom: 0.02rem;
			}
			.point_text{
				@include sc( 0.12rem, #a4a4a4);
				// line-height: 0.3
			}
			.red_point{
				background-color: $suspectRed;
				margin-left: 0.2rem;
			}
			.yellow_point{
				background-color: #ffcc00;
				margin-left: 0.15rem;
			}
		}
	}
</style>