<template>
	<div class="form_div">
		<form>
			<section>
				<label for="beVistor" v-model="master">被来访人：</label>
				<input type="text" name="beVistor" id="beVistor" v-model="master">
			</section>
			<section class="vist_adress">
				<label for="build">访问路址：</label>
				<input type="text" name="build" id="build" v-model="build">幢
				<input type="text" name="unit" id="unit" v-model="unit">单元
				<input type="text" name="room" id="room" v-model="room">室
				<button @click.prevent="restAddress">重置</button>
			</section>
			<section>
				<label for="vistTime">来访时间：</label>
				<input type="datetime-local" name="vistTime" id="vistTime" v-model="time" @change="showdata">
			</section>
			<section>
				<label for="leaveTime">离开时间：</label>
				<input type="datetime-local" name="leaveTime" id="leaveTime" v-model="leaveTime">
			</section>
			<section>
				<label>访客性质：</label>
				<select v-model="vistType">
					<option disabled selected="selected">请选择</option>
					<option v-for="item in vistTypeList">{{item}}</option>
				</select>
			</section>

			<section>
				<label>授权方式：</label>
				<select v-model="allowType">
					<option disabled selected>请选择</option>
					<option v-for="item in allowTypeList">{{item}}</option>
				</select>
			</section>
			<section class="comform_access">
				<button @click.prevent="comformAccess">确认授权</button>
			</section>
		</form>
	</div>
</template>

<script>

	export default {
		data(){
			return{
				master: null,
				address: null,
				build: null,
				unit: null,
				room: null,
				time: null,			//时间格式： 2020-03-03T03:07

				leaveTime: null,
				vistType: '请选择',
				vistTypeList: ['家教','装修', '推销'],
				allowType: '请选择',
				allowTypeList: ['二维码授权', '电话授权', '身份证授权'],
			}
		},
		methods:{
			restAddress(){
				this.build = null;
				this.unit = null;
				this.room = null;
			},
			comformAccess(){
				this.$router.push('/recordDetail');
			},
			showdata(){
				// console.log(this.time);
			}
		}

	}
</script>

<style lang="scss" scoped>
	@import '../../style/mixin';
	form{
		width: $formWidth;
		padding: 0.3rem 0;
		text-align: left;
		// @include center;
		position: relative;
		section{
			margin-left: 0.22rem;
		}
		option{
			// @include wh(1rem, 0.3rem);

		}
		input,select{
			border: 0.01rem solid #a8c1ff;
			border-radius: 0.15rem;
			height: 0.3rem;
			width: 2.8rem;
			margin-bottom: 0.24rem;
			padding-left: 0.12rem;
		}
		.vist_adress{
			input{
				width: 0.6rem;
				margin-left: 0.05rem;
				margin-right: 0.05rem;
				text-align: center;
				padding-left: 0;
			}
			button{
				color: #a8c1ff;
				background-color: #fff;
				font-size: 0.12rem;
				margin-left: 0.05rem;
			}
			#build{
					margin-left: 0;
			}
		}
		.comform_access{
			text-align: center;
			button{
				text-align: center;
				@include wh(2.73rem, 0.4rem);
				background-color: #97a2a6;
				border-radius: 0.2rem;
				color: #fff;
				font-size: 0.2rem;
			}
		}
	}
</style>