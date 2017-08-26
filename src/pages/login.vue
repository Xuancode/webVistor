<template>
  <div class="login_page">
    <section class="top_background">
      <figure>
        <img src="../images/logo.png">
        <figcaption>中海寰宇天下</figcaption>
      </figure>
    </section>
    <section>
      <span class="form_title">请登陆访客系统</span>
      <form class="login_center">
          <span class="block_style account">工号</span>
          <input type="text" placeholder="员工账号" v-model="userAccount" @input="tipsInit">
          <span class="block_style">密码</span>
          <input class="pass_word" type="password" placeholder="输入密码" @input="tipsInit" v-model="passWord">
          <div class="error_text">
            <span class="block_style">{{tips}}</span>
          </div>
          <button class="block_style login_btn " :class="[logining? 'logining_btn': '']" @click.prevent="login" :disabled="logining">登陆</button>
      </form>
    </section>
  </div>
</template>

<script>
import alertTip from '../components/common/alertTip'
import {sendLogin, getLocationWeather} from '../service/getData'
import {mapState, mapMutations} from 'vuex'

export default {
  data () {
    return {
      userAccount: null,
      passWord: null,
      tips: null,
      logining: false, //正在登陆
    }
  },
  computed:{
    //判断账号
    correctAccount: function(){
      return /\d{10}$/gi.test(this.userAccount);
    },
    ...mapState([
      'city', 'temp', 'community', 'weather', 'isOpen', 'worker'
    ]),
  },
  components: {
    alertTip
  },
  mounted(){
    // console.log(this.$router);
    this.getToday();
  },
  methods: {
    ...mapMutations([
      'UP_TEMP', 'UP_WEATHER', 'UP_CITY', 'UP_WORKER', 'UP_COMMUNITY',
    ]),
    login(){
      this.logining = true;
      //如果返回的值不正确，则弹出提示，返回的值正确则进入主界面
      if (this.userInfo) {
          this.tips = "账号密码不匹配";
      }else{
          this.$router.push({path: '/home'});
      }
      
    },
    getToday(){
      var todayData = getLocationWeather();
      console.log(todayData);
    },
    tipsInit(){
      this.tips = null;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../style/common';
  @import '../style/mixin';
  $banner_height: 0.5rem;

  .login_page{
    .top_background{
      height: 2rem;
      background: url('../images/headBG.png') no-repeat;
      background-size:cover;
      position: relative;
      figure{
        @include center;
        figcaption{
          margin-top: 0.15rem;
          font-size: 0.3rem;
        }
      }
    }
    .form_title{
      @include sc(0.2rem, #515151);
      line-height: 0.65rem;
    }
    form{
      .account{

      }
      .block_style{
        display: block;
      }
      .login_btn{
      margin: 0 auto;
      }
      span{
        color: #515151;
      }
      input{
        margin: 0.1rem 0 0.25rem 0;
        @include wh(2.75rem, 0.42rem);
        border: 1px solid $blueBorder;
        border-radius: 0.21rem;
        padding-left: 0.15rem;
      }
      button{
        @include wh(2.75rem, 0.42rem);
        border-radius: 0.21rem;
        @include sc(0.2rem, #fff);
        background-color: $greyButton;
      }
      .logining_btn{
        opacity: 0.5;
      }
      .pass_word{
        margin-bottom: 0;
      }
      .error_text{
        height: 0.35rem;
        span{
          color: $suspectRed;
          line-height: 0.35rem;
        }
      }
    }
    
  }
</style>
