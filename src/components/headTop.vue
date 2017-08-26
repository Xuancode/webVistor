<template>
	<section class="top">
		<div class="left_top">
			<div class="wifi_pic">
				<img src="../images/location.png">
			</div>
			<span class="left_text">中海寰宇天下</span>
			<router-link to="/">
				<span>值班员：</span>
				<span>{{'孙前锋'}}</span>
			</router-link>
		</div>
		<div class="time">
			<span>{{'11:34'}}</span>
		</div>
		<div class="workerInfo">
			<mt-switch class="mt-switch"></mt-switch>
			<span>{{'一键开门'}}</span>
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		computed:{

		},
		methods:{
			
		},
		mounted(){

		},

	}
</script>

<style lang="scss" scoped>
	@import '../style/mixin';

	.top{
		background-color: #fff;
		// box-shadow: 0 0 0.03rem 0.03rem #ecf0f1;
		@include wh(100%, 1.02rem);
		display: flex;
		.left_top{
			flex: 1;
			float: left;
			position: relative;	
			.wifi_pic{
				@include wh(0.32rem, 0.38rem);
				position: absolute;
			    top: 0.3rem;
    			left: 0.5rem;
			}	
			span{
				line-height: 1.02rem;
				color: #777;
				margin-left: 0.05rem;
			}
			.left_text{
				margin: 0 0.2rem 0 0.8rem;
			}
		}
		.time{
			flex: 1;
			line-height: 1.02rem;
			span{
				color: #777;
			}
		}
		.workerInfo{
			flex: 1;
			vertical-align: center;
			position: relative;
			.mt-switch{
				// height: 1.02rem;
				// background-color: pink;
				// width: 0.5rem;
				display: inline-block;
				// position: absolute;
				// left: 0;
				// top: 0;
				@include center;
			}
			span{
				float: right;
				margin-right: 0.6rem;
				font-size: 0.16rem;
				line-height: 1.02rem;
				color: #777;
			}
		}
	}
</style>