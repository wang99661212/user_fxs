<template>
  <div class="box">
    <div class="head">
      <div class="left_img">
        <img src="@/assets/切图/logo.png" alt="">
      </div>
      <div class="right_icon">
        <p class="left_p">
          <i class="iconfont_my">&#xe600;</i>
          <span class="head_span">我的</span>
        </p>
        <p class="right_p">
          <i class="iconfont_nav">&#xe601;</i>
          <span class="head_span">导航</span>
        </p>
      </div>
    </div>
    <div>
      <van-swipe indicator-color="#00be9c" class="my-swipe" :autoplay="3000">
        <van-swipe-item><img src="@/assets/切图/banner.jpg" alt="" class="banner_img"></van-swipe-item>
        <van-swipe-item><img src="@/assets/切图/banner1.jpg" alt="" class="banner_img"></van-swipe-item>
        <van-swipe-item><img src="@/assets/切图/banner2.jpg" alt="" class="banner_img"></van-swipe-item>
        <van-swipe-item><img src="@/assets/切图/banner3.jpg" alt="" class="banner_img"></van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav">
      <div class="nav_top">
        <div>
          <div class="nav_1">
            <i class="iconfont_icon">&#xe602;</i>
          </div>
          <div class="nav_text">装修方案</div>
        </div>
        <div>
          <div class="nav_2">
            <i class="iconfont_icon">&#xe606;</i>
          </div>
          <div class="nav_text">效果图</div>
        </div>
        <div>
          <div class="nav_3">
            <i class="iconfont_icon">&#xe609;</i>
          </div>
          <div class="nav_text">设计师</div>
        </div>
        <div>
          <div class="nav_4">
            <i class="iconfont_icon">&#xe603;</i>
          </div>
          <div class="nav_text">装修工地</div>
        </div>

      </div>
      <div class="nav_but">
        <div class="nav_dis">
          <div>
            <div class="nav_5">
              <i class="iconfont_icon">&#xe60b;</i>
            </div>
            <div class="nav_text">装修攻略</div>
          </div>
          <div>
            <div class="nav_6">
              <i class="iconfont_icon">&#xe604;</i>
            </div>
            <div class="nav_text">装修贷款</div>
          </div>
          <div>
            <div class="nav_7">
              <i class="iconfont_icon">&#xe62c;</i>
            </div>
            <div class="nav_text">免费预约</div>
          </div>
          <div>
            <div class="nav_8">
              <i class="iconfont_icon">&#xe608;</i>
            </div>
            <div class="nav_text">十秒报价</div>
          </div>

        </div>
      </div>
    </div>
    <div class="bg"></div>
    <div class="cen_text">
      <div class="cen_box">
        <p class="cen_left">全屋装修</p>
        <p class="cen_rig">包装修、包主材、包水电、包施工</p>
      </div>
    </div>
    <div>
      <van-swipe class="my-swipe1" :autoplay="3000" indicator-color="#00be9c">
        <van-swipe-item>
          <img src="@/assets/切图/img1.jpg" alt="" class="imgs">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/切图/img1.jpg" alt="" class="imgs">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="ban_bot">
      <div class="ban_bot1">
        <i class="iconfont_bot">&#xe627;</i><span class="rig_span">0增项,标准施工</span>
      </div>
      <div class="ban_bot2">
        <i class="iconfont_bot">&#xe628;</i><span class="rig_span">杜绝项目外包</span>
      </div>
      <div class="ban_bot3">
        <i class="iconfont_bot">&#xe60c;</i><span class="rig_span">装修贷款</span>
      </div>
    </div>
    <div class="bg"></div>
    <div class="cen_text">
      <div class="cen_box">
        <p class="cen_left">装修预约</p>
        <p class="cen_rig">免费上门量房,设计方案满意为止</p>
      </div>
    </div>
    <div class="box_inp">
      <div class="box_inp_cen">
        <input type="text" placeholder="小区名" >
        <input type="text" placeholder="手机号">
        <input type="text" placeholder="建筑面积">
        <button class="bot">立即申请</button>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    async gethome() {
      let res = await this.$http.get("http://m.sirfang.com/api/home");
      console.log(res);
    }
  },
  created() {
    this.gethome();
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.box_inp_cen{
  width: 586px;
  margin: 0 auto;
  input{
    width: 100%;
    height: 70px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    margin-bottom: 25px;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 28px;
  }
  .bot{
    width: 100%;
    height: 70px;
    background: #feb505;
    border-radius: 10px;
    border: 0px;
    font-size: 36px;
    color: white;
    margin-bottom: 36px;
  }
}
.box_inp{
  width: 100%;
}
.ban_bot1 {
  margin-left: 20px;
}
.ban_bot2,
.ban_bot3 {
  margin-left: 40px;
}
.ban_bot {
  display: flex;
}
.rig_span {
  font-size: 28px;
  color: #000;
}
.iconfont_bot {
  font-family: "iconfont" !important;
  font-size: 36px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  color: #39c894;
  margin-right: 12px;
}
.imgs {
  width: 712px;
  height: 402px;
}
.my-swipe1 .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 120px;
  text-align: center;
  background-color: white;
}
.cen_left {
  font-size: 36px;
  color: #000;
}
.cen_rig {
  font-size: 24px;
  color: #999;
  margin-left: 20px;
}
.cen_text {
  width: 100%;
  .cen_box {
    margin-left: 17px;
    margin-top: 32px;
    margin-bottom: 32px;
    height: 42px;
    border-left: 5px solid #2bb281;
    display: flex;
    align-items: flex-end;
    padding-left: 13px;
    box-sizing: border-box;
  }
}
.bg {
  height: 18px;
  width: 100%;
  background: #f4f4f4;
}
.nav {
  margin-bottom: 40px;
}
.nav_but {
  margin-top: 52px;
}
.nav_dis {
  display: flex;
}
.nav_text {
  font-size: 28px;
  color: #333333;
  text-align: center;
  margin-top: 25px;
}
.nav_top {
  margin-top: 36px;
  display: flex;
}
.nav_1 {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #39c894;
  line-height: 120px;
  text-align: center;
  margin: 0px 35px;
}
.nav_2 {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #feb505;
  line-height: 120px;
  text-align: center;
  margin: 0px 35px;
}
.nav_3 {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #eed215;
  line-height: 120px;
  text-align: center;
  margin: 0px 35px;
}
.nav_4 {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #00b2b2;
  line-height: 120px;
  text-align: center;
  margin: 0px 35px;
}
.nav_5 {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #1b9af7;
  line-height: 120px;
  text-align: center;
  margin: 0px 35px;
}
.nav_6 {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #7b72e9;
  line-height: 120px;
  text-align: center;
  margin: 0px 35px;
}
.nav_7 {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #ff4351;
  line-height: 120px;
  text-align: center;
  margin: 0px 35px;
}
.nav_8 {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #fe8864;
  line-height: 120px;
  text-align: center;
  margin: 0px 35px;
}
.iconfont_icon {
  font-family: "iconfont" !important;
  font-size: 68px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
.banner_img {
  width: 100%;
  height: 236px;
}
/deep/ .van-swipe__indicator {
  color: #c7c7c7;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.right_p {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left_p {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.head_span {
  font-size: 22px;
  color: #999;
}
@font-face {
  font-family: "iconfont";
  src: url("../iconfont/iconfont.eot");
  src: url("../iconfont/iconfont.eot?#iefix") format("embedded-opentype"),
    url("../iconfont/iconfont.woff") format("woff"),
    url("../iconfont/iconfont.ttf") format("truetype"),
    url("../iconfont/iconfont.svg#iconfont") format("svg");
}
.iconfont_nav {
  font-family: "iconfont" !important;
  font-size: 33px;
  font-style: normal;
  color: #999;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 7px;
  margin-bottom: 7px;
}
.iconfont_my {
  font-family: "iconfont" !important;
  font-size: 45px;
  font-style: normal;
  color: #999;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.right_icon {
  margin-top: 16px;
  margin-right: 18px;
  display: flex;
  width: 122px;
  justify-content: space-between;
}
.box {
  width: 100%;
  height: 100%;
  .head {
    width: 100%;
    height: 102px;
    display: flex;
    justify-content: space-between;
    .left_img {
      margin-left: 18px;
      margin-top: 16px;
      margin-bottom: 16px;
      img {
        width: 216px;
        height: 71px;
      }
    }
  }
}
</style>
//                       .::::.
//                     .::::::::.
//                    :::::::::::
//                 ..:::::::::::'
//              '::::::::::::'
//                .::::::::::
//           '::::::::::::::..
//                ..::::::::::::.
//              ``::::::::::::::::
//               ::::``:::::::::'        .:::.
//              ::::'   ':::::'       .::::::::.
//            .::::'      ::::     .:::::::'::::.
//           .:::'       :::::  .:::::::::' ':::::.
//          .::'        :::::.:::::::::'      ':::::.
//         .::'         ::::::::::::::'         ``::::.
//     ...:::           ::::::::::::'              ``::.
//    ```` ':.          ':::::::::'                  ::::..
//                       '.:::::'                    ':'````..
//
//  
//         .............................................  
//                  美女保佑             永无BUG 
//
//          				        程序员之歌      
//                  十年生死两茫茫，写程序，到天亮。  
//                     	千行代码，Bug何处藏。  
//                  纵使上线又怎样，朝令改，夕断肠。  
//
//                  领导每天新想法，天天改，日日忙。  
//                     	相顾无言，惟有泪千行。  
//                  每晚灯火阑珊处，夜难寐，加班狂。                  