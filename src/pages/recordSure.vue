<template>
	<section id="home">
		<div class="background_color"></div>
		<head-top></head-top>
		<section class="record_form">
			<detail-record></detail-record>
		</section>
		<footer-guide></footer-guide>
	</section>
</template>

<script>
import footerGuide from '@/components/footerGuide'
import recordForm from '@/components/common/recordForm'
import headTop from '@/components/headTop'
import detailRecord from '@/components/common/detailRecord'

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
		}
	}
</script>

<style lang="scss" scoped>
	@import '.././style/mixin';

	#home{
		.background_color{
			position: fixed;
			@include wh(100%, 100%);
			background: url('../images/bg.png') no-repeat;
			background-size: cover;
		}
		.record_form{
			@include center;
			box-shadow: 0 0.04rem 0.1rem 0 #999;
			background-color: #fff;
		}
	}
</style>