<template>
	<section id="home">
		<!-- <div class="background_color"></div> -->
		<head-top></head-top>
		<section class="cards">
			<div class="weather">
				<span class="clock text_center">时钟
					<time-clock></time-clock>
				</span>
				<span class="time text_center">{{nowTime}}</span>
				<span class="apm text_center">{{isAm}}</span>
				<div class="temp text_center">
					<div class="weatherIcon">
						<img src="../images/100.png">
					</div>
					<div class="city_div">
						<span class="city">深圳市</span>
						<span class="tempNumber">15°</span>
					</div>
				</div>
			</div>
			<div  class="card">
				<div class="scroll">
					<vistor-list :show-point="false" :vistor-lists="vistorArr"></vistor-list>
				</div>
			</div>
		</section>
		<footer-guide></footer-guide>
	</section>
</template>

<script>
	import footerGuide from '../components/footerGuide'
	import {getVistorList} from '../service/getData'
	import vistorList from '../components/common/vistorList'
	import headTop from '../components/headTop'
	// import getPosition from '../service/getData'
	import fetch from '../config/fetch'
	import Axios from 'axios'
	import timeClock from '../components/common/timeClock'
	import {mapState, mapMutations} from 'vuex'

	export default {
		data(){
			return{
				vistorArr: [{'id': '123', 'name': '小兴平2', 'address': '13幢2单元3301', 'startTime': '17:00', 'expectTime': '18:25', 'leaveTime': '19:00', 'photoUrl': '../../images/photo.png', 'type': '家教'},{'id': '124', 'name': '郝萌3', 'address': '13幢2单元3301', 'startTime': '17:00', 'expectTime': '18:25', 'leaveTime': '19:00', 'photoUrl': '../../images/photo.png','type': '家教'},{'id': '125', 'name': '郝萌4', 'address': '13幢2单元3301', 'startTime': '17:00', 'expectTime': '18:25', 'leaveTime': '19:00', 'photoUrl': '../../images/photo.png', 'type': '家教'},{'id': '121', 'name': '郝萌1', 'address': '13幢2单元3301', 'startTime': '17:00', 'expectTime': '18:25', 'leaveTime': '19:00', 'photoUrl': '../../images/photo.png' ,'type': '家教'}, {'id': '121', 'name': '郝萌1', 'address': '13幢2单元3301', 'startTime': '17:00', 'expectTime': '18:25', 'leaveTime': '19:00', 'photoUrl': '../../images/photo.png' ,'type': '家教'}, {'id': '121', 'name': '郝萌1', 'address': '13幢2单元3301', 'startTime': '17:00', 'expectTime': '18:25', 'leaveTime': '19:00', 'photoUrl': '../../images/photo.png' ,'type': '家教'}, {'id': '121', 'name': '郝萌1', 'address': '13幢2单元3301', 'startTime': '17:00', 'expectTime': '18:25', 'leaveTime': '19:00', 'photoUrl': '../../images/photo.png' ,'type': '家教'}, {'id': '121', 'name': '郝萌1', 'address': '13幢2单元3301', 'startTime': '17:00', 'expectTime': '18:25', 'leaveTime': '19:00', 'photoUrl': '../../images/photo.png' ,'type': '家教'}],
				isOnline: true,
				longLati: '116.307852,40.057031',
				isAm: null,
			}
		},
		created(){
		},
		mounted(){
			this.initData();
			// this.getWebPosition();
			//和风天气api https://free-api.heweather.com/v5/weather?city=深圳&key=3e6338eef8c947dd89f4ffebbf580778
			//测试百度api

			// 深圳经纬度： 114.02597366,22.54605355 
			// var location = '114.02597366,22.54605355'; 
			// var url = "http://api.map.baidu.com/geocoder/v2/?ak=SPsyVvEHdCpNBGvkOtC0Rrs5B7pc0Rtv&callback=renderReverse&location="+ location +"&output=json&pois=0";   
			// Axios.get('https://bird.ioliu.cn/v1/?url=http://api.map.baidu.com/geocoder/v2/?ak=SPsyVvEHdCpNBGvkOtC0Rrs5B7pc0Rtv&location=22.54605355,114.02597366&output=json&pois=0').then(res=>{
			// 	console.log("定位到城市为：" + JSON.stringify(res.data.result.addressComponent.city));
			// 	var city = res.data.result.addressComponent.city;
			// 	Axios.post('https://free-api.heweather.com/v5/weather?city=' + city + '&key=3e6338eef8c947dd89f4ffebbf580778').then(res=>{
			// 		console.log("天气数据为：" + JSON.stringify(res.data.HeWeather5[0].now));
			// 	});
			// });
			// 深圳经纬度： 114.02597366,22.54605355 
			// Axios.get('https://free-api.heweather.com/v5/weather?city=深圳&key=3e6338eef8c947dd89f4ffebbf580778').then(res=>{
			// 	console.log((res.data.HeWeather5[0].now));
			// });

		},
		computed:{
			...mapState([
				'nowTime', 'city', 'temp', 'community', 'weather', 'isOpen', 'worker'
			])
		},
		methods:{
			...mapMutations([
		      'GET_TIME',
		    ]),
			async initData(){
				this.GET_TIME();
				console.log(this.nowTime.substr(0,2));
				if(parseInt(this.nowTime.substr(0,2)) < 12){
					this.isAm = 'AM';
				}else{
					this.isAm = 'PM';
				}
				setInterval(this.GET_TIME, 5000);
				window.addEventListener("offline", (e)=>{this.isOnline = false});
				window.addEventListener("online", (e)=>{this.isOnline = true});
				// let res = await getVistorList();//待写
				// this.vistorArr = res;		
				// console.log(JSON.stringify(this.vistorArr));
			},
			//每分钟更新时间
		},
		components:{
			footerGuide,
			vistorList,
			headTop,
			timeClock,
		},
		watch: {
			isOnline: function(){
				if(this.isOnline===true){
					console.log("联网了");
				}
				if(this.isOnline===false){
					console.log("断网了");
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/common';
	@import '../style/mixin';

	#home{
		.background_color{
			position: fixed;
			@include wh(100%, 100%);
			background: url('../images/bg.png') no-repeat;
			background-size: cover;
		}
		.mt_switch{
			margin: 0.15rem 0.33rem 0 0;
			float: right;
			height: 33px;
			text-align: center;
			position: relative;
			span{
			    position: absolute;
			    right: 55px;
			    top: 5px;
			    width: 50px;
			    font-size: 16px;
			    color: #8d8d8f;
			}
		}
		.cards{
			@include wh(9.64rem, 5.2rem);
			@include center;
			display: flex;
			.weather{
				flex: 1;
				display: flex;
				align-items: center;
				position: relative;
				// text-align: center;
				// vertical-align: top;
				span{
					color: #519fff;
				}
			}
			.clock{
				margin-left: 0.2rem;
				@include wh(0.9rem,0.9rem);
				background-color: pink;
			}
			.time{
				@include sc(1.1rem, #519fff);
			}
			.apm{
				margin-bottom: 0.6rem;
				@include sc(0.3rem, #519fff);
			}
			.weatherIcon{
				@include wh(0.6rem, 0.6rem);
				overflow: hidden;
				img{
					@include wh(0.6rem, 0.6rem);
				}
			}
			.text_center{

			}
			.temp{
				position: absolute;
				right: 0.6rem;
				top: 1.35rem;
				@include wh(1.3rem, 0.6rem);		
			}
			.city_div{
				position: absolute;
				right: 0;
				top: 0;
			}
			.city{
				font-size: 0.12rem;
				display: block;
			}
			.tempNumber{
				// @include sc()
				font-size: 0.38rem;
				line-height: 0.4rem;
			}
			.card{
				flex: 1;
				.scroll{
					
					@include wh(4.4rem, 5.13rem);
					margin: 0 auto;
				}
			}
		}
	}
</style>