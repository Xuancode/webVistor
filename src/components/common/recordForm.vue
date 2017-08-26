<template>
	<div class="form_div">
		<form>
			<section class="show_photo" @click="clickCamera">
				<div class="photoed"></div>
			</section>
			<section class="head_img">
				<input type="file" capture="camera" accept="image/*" id="headImg" name="headImg">
			</section>
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
				<button @click.prevent="record">登记</button>
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
			record(){
				this.$router.push('/hasRecord');
				// this.$router.push('/service/questionDetail'); //正确的也有这个
				// this.$router.push({path: '/'});
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
		
		padding: 0.3rem 0;
		// @include center;
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
				padding: 0 1.15rem;
				height: 0.4rem;
				border-radius: 0.2rem;
 				background-color: #97a2a6;
 				font-size: 0.2rem;
 				color: #fff;
			}
		}
		
	}
</style>