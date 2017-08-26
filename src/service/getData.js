import fetch from '../config/fetch'
import Axios from 'axios'

// var sendLogin = (account, password) => fetch('/v1/login/app_mobile', {
// 	code,
// 	mobile,
// 	validate_token
// }, 'POST');
export const sendLogin = function(){

}

export const getVistorList = function(){
	
}


//获取地理位置和天气
// export const getLocationWeather = async function(){

// 	var data;
// 	var location = '114.02597366,22.54605355'; 
//     var url = "http://api.map.baidu.com/geocoder/v2/?ak=SPsyVvEHdCpNBGvkOtC0Rrs5B7pc0Rtv&callback=renderReverse&location="+ location +"&output=json&pois=0";   

//   	var getdata = function(){
//   		return new Promise(function(resolve, reject){
//   			Axios.get('https://bird.ioliu.cn/v1/?url=http://api.map.baidu.com/geocoder/v2/?ak=SPsyVvEHdCpNBGvkOtC0Rrs5B7pc0Rtv&location=22.54605355,114.02597366&output=json&pois=0').then(res=>{
// 				// console.log("定位到城市为：" + JSON.stringify(res.data.result));
// 				var city = res?res.data.result.addressComponent.city: '定位失败';
// 				var pois = res?res.data.result.poiRegions[0].name: city;

// 				Axios.get('https://free-api.heweather.com/v5/weather?city=深圳&key=3e6338eef8c947dd89f4ffebbf580778').then(wea=>{
// 					var weather = wea.data.HeWeather5[0].now;
// 					data = {'city': city, 'pois': pois, 'weather': weather};
// 				});
// 		    });
//   		})
//   	}
//   	await getdata();
//     return(data);
// }


export const getLocationWeather = async function(){

	var data;
	var location = '114.02597366,22.54605355'; 
    var url = "http://api.map.baidu.com/geocoder/v2/?ak=SPsyVvEHdCpNBGvkOtC0Rrs5B7pc0Rtv&callback=renderReverse&location="+ location +"&output=json&pois=0";   

	return Axios.get('https://bird.ioliu.cn/v1/?url=http://api.map.baidu.com/geocoder/v2/?ak=SPsyVvEHdCpNBGvkOtC0Rrs5B7pc0Rtv&location=22.54605355,114.02597366&output=json&pois=0').then(res=>{
		// console.log("定位到城市为：" + JSON.stringify(res.data.result));
		var city = res?res.data.result.addressComponent.city: '定位失败';
		var pois = res?res.data.result.poiRegions[0].name: city;

		// Axios.get('https://free-api.heweather.com/v5/weather?city=深圳&key=3e6338eef8c947dd89f4ffebbf580778').then(wea=>{
		// 	var weather = wea.data.HeWeather5[0].now;
		// 	data = {'city': city, 'pois': pois, 'weather': weather};
		// });
	});

}












export const foodActivity = (latitude, longitude) => fetch('/shopping/v1/restaurants/activity_attributes', {
	latitude,
	longitude,
	kw: ''
});






































/**
 * 获取首页热门城市
 */

export const hotcity = () => fetch('/v1/cities', {
	type: 'hot'
});


/**
 * 获取图片验证码
 */

export const getcaptchas = () => fetch('/v1/captchas', {},'POST');

/**
 * 获取服务中心信息
 */

export const getService = () => fetch('/v3/profile/explain');

