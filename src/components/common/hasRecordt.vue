<template>
	<div class="form_div">
		<form>
			<section class="show_photo" @click="clickCamera">
				<div class="photoed"></div>
			</section>
			<section class="head_img">
				<input type="file" capture="camera" accept="image/*" id="headImg" name="headImg">
			</section>
			<div class="has_record"><span>已登记</span></div>
			<section class="vist_name form_com">
					<label for="vistName">姓名</label>
					<input  type="text" name="vistName" id="vistName" v-model="vistName">
				</section>
				<section class="sex">
					<span>性别</span>
					<label for="male">男</label>
					<input type="radio" name="male" value="male" id="male" v-model="vistSex">
					<label for="female">女</label>
					<input type="radio" name="female" value="female" id="female" v-model="vistSex">
				</section>
				<section class="id_card form_com">
					<label for="idCard">身份证</label>
					<input type="text" name="idCard" id="idCard" v-model="vistIdCard">
				</section>
				<section class="phone form_com">
					<label for="phone">手机号</label>
					<input type="text" name="phone" id="phone" v-model="vistPhone">
				</section>
			<section class="submit">
				<button class="cancel" @click.prevent="cancelAccess">放弃授权</button>
				<button class="sure" @click.prevent="sureAccess">现在授权</button>
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
		@include wh($formWidth, auto);
	}
	form{
		overflow: hidden;
		padding: 0.3rem 0;
		// @include center;
		position: relative;
		.has_record{
			position: absolute;
		    left: 50%;
		    top: 0;
		    transform: translate(-50%, -50%);
			border-radius: 0.71rem/0.26rem;
			@include wh(1.42rem, 0.58rem);
			background-color: #fb6f44;
			span{
				@include sc(0.14rem, #fff);
				// vertical-align: text-bottom;
			    position: absolute;
			    left: 50%;
			    transform: translate(-50%, -50%);
				bottom: 0;
			}
			
		}
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
			margin-left: 1.6rem;
			margin-bottom: 0.3rem;
			input{
				height: 0.32rem;
				width:  2rem;
				border-radius: 0.16rem;
				border: 0.01rem solid #a8c1ff;
				padding-left: 0.15rem;
				margin-left: 0.1rem;
			}
		}
		.head_img{
			margin-left: 1.8rem;
			display: none;
		}
		.vist_name{
			label{
				margin-right: 0.16rem;
			}
		}
		.sex{
			margin-left: 1.8rem;
			height: 0.32rem;
			margin-bottom: 0.3rem;
			line-height: 0.32rem;
			text-align: left;
			margin-left: 1.81rem;
			span{
				margin-right: 0.5rem;
			}
			input{
				margin-right: 0.4rem;
			}

		}
		.id_card{

		}
		.phone{

		}
		.submit{
			button{
				padding: 0 0.3rem;
				height: 0.4rem;
				border-radius: 0.2rem;
 				font-size: 0.2rem;
 				color: #fff;
			}
			.sure{
				background-color: #97a2a6;
			}
			.cancel{
				background-color: #a8c1ff;
				margin-right: 0.45rem;
			}
		}
		
	}
</style>