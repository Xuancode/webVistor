<template>
	<div class="table_div">
		<div class="table_head">
			<span>访客</span>
			<span>手机</span>
			<span>来访时段</span>
			<span>访问路址</span>
			<span>操作</span>
		</div>
		<ul>
			<li v-for="item in recordList">
				<div class="easy_list" @click.prevent="showDetail(item.id)">
					<span>{{item.vistName}}</span>
					<span>{{item.vistPhone}}</span>
					<span>{{item.expectStartTime}}-{{item.expectEndTime}}</span>
					<span>{{item.vistAddress}}</span>
					<span class="check">查看</span>
				</div>
				<div class="detail_list" v-show="showDetailId===item.id">
					<div class="head_photo"><img src="../../images/photo.png"></div>
					<div class="details">
						<span>实到时间：  {{item.enterTime}}</span>
						<span>身份证号码：  {{item.idCard}}</span>
						<span>手机号码：  {{item.vistPhone}}</span>
					</div>
					<span class="report_suspect" @click="reportSuspect(item.id)">举报可疑人员？</span>
				</div>
			</li>
		</ul>
		<alert-tip v-show="comfirmTip" class="comfirm_tip" :leftBtn="closeTip" :alertText="tipText"  :rightBtn="comfirmReport"></alert-tip>
	</div>
</template>

<script>
	import alertTip from './alertTip'
	export default {
		data(){
			return{
				queryDate: null,
				address: null,
				showDetailId: null,
				comfirmTip: false,
				tipText: '是否确认将此人提报为可疑人员？',
				recordList: [{'id': '1', 'vistDate': '2016/11/11', 'vistName': '木婷婷', 'vistAddress': '7幢2单元1706', 'master': '唐僧', 'vistType': '中介', 'photoUrl': '../../images/photo.png', 'enterTime': '17:00', 'expectEndTime': '18:25', 'expectStartTime': '16:20', 'leaveTime': '19:00', 'isLate': 'true', 'willLate': 'false', 'idCard': '4521221111111111111', 'liveCard': '5555555555555', 'HongKongCard': '23423523525', 'officerCard': '1234567890', 'vistPhone': '13768011111', 'isSuspect': '0'}, 
					{'id': '2', 'vistDate': '2016/11/11', 'vistName': '木婷婷', 'vistAddress': '7幢2单元1706', 'master': '唐僧', 'vistType': '中介', 'photoUrl': '../../images/photo.png', 'enterTime': '17:00', 'expectEndTime': '18:25', 'expectStartTime': '16:20', 'leaveTime': '19:00', 'isLate': 'true', 'willLate': 'false', 'idCard': '4521221111111111111', 'liveCard': '5555555555555', 'HongKongCard': '23423523525', 'officerCard': '1234567890', 'vistPhone': '13768011111', 'isSuspect': '0'}, 
					{'id': '3', 'vistDate': '2016/11/11', 'vistName': '木婷婷', 'vistAddress': '7幢2单元1706', 'master': '唐僧', 'vistType': '中介', 'photoUrl': '../../images/photo.png', 'enterTime': '17:00', 'expectEndTime': '18:25', 'expectStartTime': '16:20', 'leaveTime': '19:00', 'isLate': 'true', 'willLate': 'false', 'idCard': '4521221111111111111', 'liveCard': '5555555555555', 'HongKongCard': '23423523525', 'officerCard': '1234567890', 'vistPhone': '13768011111', 'isSuspect': '0'}, 
					{'id': '4', 'vistDate': '2016/11/11', 'vistName': '木婷婷', 'vistAddress': '7幢2单元1706', 'master': '唐僧', 'vistType': '中介', 'photoUrl': '../../images/photo.png', 'enterTime': '17:00', 'expectEndTime': '18:25', 'expectStartTime': '16:20', 'leaveTime': '19:00', 'isLate': 'true', 'willLate': 'false', 'idCard': '4521221111111111111', 'liveCard': '5555555555555', 'HongKongCard': '23423523525', 'officerCard': '1234567890', 'vistPhone': '13768011111', 'isSuspect': '0'}, 
					{'id': '5', 'vistDate': '2016/11/11', 'vistName': '木婷婷', 'vistAddress': '7幢2单元1706', 'master': '唐僧', 'vistType': '中介', 'photoUrl': '../../images/photo.png', 'enterTime': '17:00', 'expectEndTime': '18:25', 'expectStartTime': '16:20', 'leaveTime': '19:00', 'isLate': 'true', 'willLate': 'false', 'idCard': '4521221111111111111', 'liveCard': '5555555555555', 'HongKongCard': '23423523525', 'officerCard': '1234567890', 'vistPhone': '13768011111', 'isSuspect': '0'}, 
					{'id': '5', 'vistDate': '2016/11/11', 'vistName': '木婷婷', 'vistAddress': '7幢2单元1706', 'master': '唐僧', 'vistType': '中介', 'photoUrl': '../../images/photo.png', 'enterTime': '17:00', 'expectEndTime': '18:25', 'expectStartTime': '16:20', 'leaveTime': '19:00', 'isLate': 'true', 'willLate': 'false', 'idCard': '4521221111111111111', 'liveCard': '5555555555555', 'HongKongCard': '23423523525', 'officerCard': '1234567890', 'vistPhone': '13768011111', 'isSuspect': '0'}, 
					{'id': '6', 'vistDate': '2016/11/11', 'vistName': '木婷婷', 'vistAddress': '7幢2单元1706', 'master': '唐僧', 'vistType': '中介', 'photoUrl': '../../images/photo.png', 'enterTime': '17:00', 'expectEndTime': '18:25', 'expectStartTime': '16:20', 'leaveTime': '19:00', 'isLate': 'true', 'willLate': 'false', 'idCard': '4521221111111111111', 'liveCard': '5555555555555', 'HongKongCard': '23423523525', 'officerCard': '1234567890', 'vistPhone': '13768011111', 'isSuspect': '0'}, 
				 ],

			}
		},
		methods:{
			query(){

			},
			showDetail(id){
				this.showDetailId = id;
			},
			reportSuspect(id){
				this.comfirmTip = true;
			},
			closeTip(){
				this.comfirmTip = false;
				
			},
			comfirmReport(){
				//提交函数待写
				this.comfirmTip = false;
			},
		},
		components:{
			alertTip,
		}

	}
</script>

<style lang="scss" scoped>
	@import '../../style/mixin';

	.table_div{
		position: relative;
		.table_head{
			margin-top: 0.25rem;
			background-color: #fff;
			padding: 0 0.03rem;
			display: flex;
			box-shadow: 0 0.03rem 0.08rem 0.02rem #bbb;
			border-radius: 0.05rem;
			position: relative;
			span{
				flex: 1;
				line-height: 0.6rem;
				font-size: 0.2rem;
				font-weight: scroll;
			}
		}
		ul{
			margin: 0 0.1rem;
			height: 4.8rem;
			overflow-y: scroll;
			li{
				.easy_list{
					display: flex;
					margin-bottom: 0.03rem;
					box-shadow: 0 0.01rem 0.03rem 0.01rem #ddd;
					background-color: #fff;
					span{
						flex: 1;
						line-height: 0.55rem;
					}
					.check{
						color: #a8c1ff;
					}
				}
				.detail_list{
					margin: 0 0.5rem;
					padding: 0.11rem 0.2rem;
					background-color: #cfdadd;
					text-align: left;
					.head_photo{
						@include wh(0.9rem, 1.2rem);
						background-color: #a6b3b7;
						display: inline-block;
						img{
							@include wh(0.9rem, 1.2rem);
						}
					}
					.details{
						display: inline-block;
						margin-left: 0.2rem;
						height: 1.2rem;
						vertical-align: top;
						// margin-top:0.3rem;
						span{
							display: block;
							line-height: 0.4rem;
						}
					}
					.report_suspect{
							float: right;
							color: $suspectRed;
					}
				}
				
			}
		}
		.comfirm_tip{
			@include wh(3.6rem, 2.1rem);
			@include center;
		}
	}
</style>