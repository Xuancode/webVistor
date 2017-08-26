<template>
	<div class="qart_div">
			<qr-code class="qr" :value="value" :options="options"></qr-code>
	</div>
</template>

<script>
	import qrCode from 'vue-qrcode'

	export default {
		data(){
			return{
				value: 'https://www.baidu.com',
				options: {size: 230},
			}
		},
		methods:{

		},
		components:{
			qrCode
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../style/mixin';
	
	.qart_div{
		background-color: #fff;
		@include wh(3.64rem, 3.64rem);
		position: relative;
		box-shadow: 0 0.04rem 0.2rem 0 #999;
		.qr{
			@include center;
		}
	}
</style>