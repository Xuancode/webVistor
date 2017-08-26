<template>
	<section id="home">
		<div class="background_color"></div>
		<head-top></head-top>
		<div class="center">
			<section class="record_form">
				<show-record class="inl_bloc"></show-record>
			</section>
			<section class="qart">
				<creat-qart class="inl_bloc"></creat-qart>
			</section>
		</div>
		<footer-guide></footer-guide>
		<router-view></router-view>
	</section>
</template>

<script>
import footerGuide from '@/components/footerGuide'
import recordForm from '@/components/common/recordForm'
import headTop from '@/components/headTop'
import detailRecord from '@/components/common/detailRecord'
import hasRecordt from '@/components/common/hasRecordt'
import showRecord from '@/components/common/showRecord'
import creatQart from '@/components/common/creatQart'

	export default {
		data(){
			return{
				showDetail: true,
			}
		},
		created(){

		},
		mounted(){

		},
		computed:{

		},
		methods:{

		},
		components:{
			footerGuide,
			recordForm,
			headTop,
			detailRecord,
			hasRecordt,
			showRecord,
			creatQart
		}
	}
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';

	#home{
		.background_color{
			position: fixed;
			@include wh(100%, 100%);
			background: url('../images/bg.png') no-repeat;
			background-size: cover;
		}
		.center{
			@include center;
			width: 100%;
		}
		.record_form{
			// @include center;
			float: left;
			margin-left: 0.55rem;
			box-shadow: 0 0.04rem 0.2rem 0 #999;
			background-color: #fff;
			// .inl_bloc{
			// 	display: inline-block;
			// }
		}
		.qart{
			float: right;
			margin-right: 0.55rem;
		}
	}
</style>