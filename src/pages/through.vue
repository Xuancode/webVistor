<template>
	<section id="home">
		<div class="background_color"></div>
		<head-top></head-top>
		<query-head :showPoint="true"></query-head>
		<div class="vist_table">
			<through-table></through-table>
		</div>
		<footer-guide></footer-guide>
	</section>
</template>

<script>
import footerGuide from '../components/footerGuide'
import queryHead from '../components/common/queryHead'
import queryTable from '../components/common/queryTable'
import headTop from '../components/headTop'
import throughTable from '../components/common/throughTable'

	export default {
		data(){
			return{}
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
			queryHead,
			queryTable,
			headTop,
			throughTable,
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
		.vist_table{
			margin: 0 auto;
			@include wh(9.2rem, 5.25rem);
		}
	}
</style>