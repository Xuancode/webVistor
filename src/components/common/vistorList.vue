<template>
	<section>
		<div class="ul_title">
			<div class="blue_oval"></div>
			<span class="title_left">姓名</span>
			<span>到访时间</span>
			<span class="title_right">性质</span>
		</div>
		<ul class="vistor_ul">
			<li class="vistor_li" v-for="item in vistorLists">
				<div class="easy_card" @click="showDetail(item.id)">
					<div class="point_yellow point" v-show="showPoint&&0"></div>
					<div class="point_red point" v-show="showPoint&&1"></div>
					<span class="left">{{item.name}}</span>
					<span class="center">{{item.startTime}}</span>
					<span class="right">{{item.type}}</span>
				</div>
				<div class="detail_card" v-show="showWho===item.id">
					<div class="img_div"><img src="../../images/photo.png"></div>
					<div class="message">
						<span>姓名： {{item.name}}</span>
						<span>路址： {{item.address}}</span>
						<span>手机号码:  {{'1234567783'}}</span>
						<span>授权时间： {{item.startTime}}—{{item.expectTime}}</span>
					</div>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
//	vistorList[{'id': '123', 'name': '小兴平', 'address': '13幢2单元3301', 'startTime': '17:00', 'expectTime': '18:25', 'leaveTime': '19:00', 'photoUrl': '../../images/photo.png'},{'id': '124', 'name': '郝萌', 'address': '13幢2单元3301', 'startTime': '17:00', 'expectTime': '18:25', 'leaveTime': '19:00', 'photoUrl': '../../images/photo.png'}]
	export default {
		data(){
			return{
				showWho: '123',
			}
		},
		methods:{
			showDetail(id){
				if(this.showWho === id){
					this.showWho = null;
				}else{
					this.showWho = id;
				}
			}
		},
		props:['showPoint','vistorLists'],
	}
</script>

<style lang="scss" scoped>
	@import '../../style/mixin';
	@import '../../style/common';
	.ul_title{
		width: 4.4rem;
		// background-color:pink;
		box-shadow: 0 0.03rem 0.05rem 0.02rem #ccc;
		margin: 0 auto;
		height: 0.6rem;
		border-radius: 0.07rem;
		position: relative;
		display: flex;
		overflow: hidden;
		.blue_oval{
			@include wh(0.1rem, 0.45rem);
			background-color: #519fff;
			border-radius: 0.05rem/0.21rem;
			margin: 0.08rem 0 0 -0.05rem;
		}
		span{
			flex: 1;
			line-height: 0.6rem;
			@include sc(0.2rem, #515151);
			font-weight: bold;
		}
		.title_left{
			text-align: left;
			padding-left: 0.4rem;
		}
		.title_right{
			text-align: right;
			padding-right: 0.35rem;
		}
	}
	.vistor_ul{
		overflow-y: scroll; 
		height: 4.7rem;
		li{
			.easy_card{
				position:relative;
				width: 4.25rem;
				margin: 0 auto;
				height: 0.55rem;
				// margin-bottom: 0.06rem;
				display: flex;
				// box-shadow: 0 0 0.02rem 0.02rem #999;
				border-radius: 0.07rem;
				border: 0.02rem solid #ddd;
				// border-top: 0 solid #ccc;
				.point{
					@include wh(0.1rem, 0.1rem);
				    position: absolute;
				    left: 0.05rem;
				    top: 0.2rem;
				    border-radius: 0.05rem;
				}
				.point_yellow{
					background-color: #ffd014;
				}
				.point_red{
					background-color: #ee676b;
				}
				span{
					flex: 1;
					line-height: 0.5rem;
				}
				.left{
					text-align: left;
					margin-left: 0.25rem;
				}
				.right{
					text-align: right;
					margin-right: 0.25rem;
				}
			}
			.detail_card{
				text-align: center;
				vertical-align: center;
				padding: 0.13rem 0.2rem;
				margin: 0 0.55rem ;
				background-color: #9ac8f9;
				height: 1.40rem;
				vertical-align: middle;
				.img_div{
					float: left;
					display: inline-block;
					@include wh(0.9rem, 1.15rem);
					img{
						@include wh(0.9rem, 1.15rem);
					}
				}
				.message{
					margin-top: 0.09rem;
					margin-left: 0.2rem;
					width: 1.8rem;
					display: inline-block;
					text-align: left;
					span{
						display: block;
						// height: 0.32rem;
						// margin-bottom: 0.02rem;
						line-height: 0.23rem;
						font-size: 0.14rem;
						color: #fff;	
						text-align: left;
					}
				}
			}
		}
	}
</style>