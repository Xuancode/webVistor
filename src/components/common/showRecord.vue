<template>
	<div class="form_div">
		<form>
			<section class="show_photo" @click="clickCamera">
				<img src="../../images/photo.png">
			</section>
			<section class="vist_name form_com">
				<span for="vistName">姓名:</span>
				<span>{{'穆婷婷'}}</span>
			</section>
			<section class="sex form_com">
				<span>性别:</span>
				<span>{{'男'}}</span>
			</section>
			<section class="id_card form_com">
				<span for="idCard">身份证:</span>
				<span>{{'45212224456666666'}}</span>
			</section>
			<section class="phone form_com">
				<span for="phone">手机号:</span>
				<span>{{'13768959485'}}</span>
			</section>
			<section class="has_access">
				<span>已授权</span>
			</section>
		</form>

	</div>
</template>

<script>

	export default {
		data(){
			return{
				vistName: null,
				vistSex: null,
				vistIdCard: null,
				vistPhone: null,
			}
		},
		methods:{
			clickCamera(){
				var camera = document.getElementById("headImg");
				camera.click();
			},
			cancelAccess(){
				this.$router.push('/record');
				// this.$router.push('/service/questionDetail'); //正确的也有这个
				// this.$router.push({path: '/'});
			},
			sureAccess(){
				this.$router.push('/recordSure');
			}
		},


	}
</script>

<style lang="scss" scoped>
	@import '../../style/mixin';
	.form_div{
		position: relative;
		@include wh($formWidth, 3.63rem);
	}
	form{
		padding: 0.3rem 0;
		position: relative;
		.show_photo{
			position: absolute;
			margin-left: 0.24rem; 
			@include wh(1.22rem, 1.56rem);
			border: 0.01rem solid #a8c1ff;
			.photoed{
				display: none;
			}
		}
		.form_com{
			margin-left: 1.8rem;
			margin-bottom: 0.3rem;
			text-align: left;
			
			span{
				margin-right: 0.4rem;
			}
		}
		.head_img{
			margin-left: 1.8rem;
			display: none;
		}
		.sex{
			height: 0.32rem;
			margin-bottom: 0.3rem;
			line-height: 0.32rem;
			text-align: left;
			span{
			}
			input{
				margin-right: 0.4rem;
			}

		}
		.id_card{
			span{
				margin-right: 0.25rem;
			}
		}
		.phone{
			span{
				margin-right: 0.25rem;
			}
		}
		.has_access{
			position: absolute;
			right: 0.2rem;
			bottom: -0.75rem; 
			background-color: #a8c1ff;
			@include wh( 1.3rem ,1.3rem);
			border-radius: 0.65rem;
			transform: rotate(-25deg);
			span{
				@include sc(0.23rem, #fff);
				line-height: 1.1rem;
				text-align: center;
			}
		}
		
	}
</style>