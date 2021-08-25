<template>
  <div class="box">
    <div class="zx_big">
      <div class="zx_left">
        <img src="@/assets/切图/logo.png" alt /> 装修方案
      </div>
      <div class="zx_right">
        <div>
          <i class="iconfont">&#xe600;</i>
          <p>我的</p>
        </div>
        <div>
          <i class="iconfont">&#xe601;</i>
          <p>导航</p>
        </div>
      </div>
    </div>
    <div class="zx_big2">
        <div class="zx_big2_img1">
            <img src="@/assets/切图/case/case.jpg" alt="">
            <div class="zx_big2_tc1">
                <p>399元/m半包装修套餐</p>
                <p style="font-size:15px">特惠：<span style="color:red">可选300/m品牌主材包</span></p>
            </div>
        </div>
        <div class="zx_big2_img1">
            <img src="@/assets/切图/case/case1.jpg" alt="">
            <div class="zx_big2_tc1">
                <p>399元/m半包装修套餐</p>
                <p style="font-size:15px">特惠：<span style="color:red">可选300/m品牌主材包</span></p>
            </div>
        </div>
        <div class="zx_big3_wz">
            &emsp;&emsp;&emsp;房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务
        </div>
        <div class="zx_big_db">
            <p>服务热线：400-9977-668</p>
            <p class="zx_big_db_box"><span>触屏版</span><span>电脑版</span><span>关于我们</span><span>联系我们</span></p>
        </div>
        <div class="zx_big_tu">
            <img src="@/assets/切图/quoten_bottom.png" alt="">
        </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.box{
    width: 100%;
    height: 1730px;
}
.zx_big {
  width: 100%;
  height: 100px;
  display: flex;
}
.zx_left {
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.zx_left img {
  width: 180px;
  height: 80px;
}
.zx_right {
  width: 20%;
  display: flex;
  height: 100px;
  justify-content: space-around;
  text-align: center;
  font-size: 20px;
  align-items: center;
  padding-left: 80px;
}
.zx_big2{
    width: 100%;
    height: 1270px;
    background: #f4f4f4;
}
.zx_big2_img1{
    margin: auto;
    padding-top: 20px;
    width: 95%;
    height: 450px;
}
.zx_big2_img1 img{
    width: 100%;
    height: 300px;
}
.zx_big2_tc1{
    width: 100%;
    height: 130px;
    line-height: 70px;
    background: white;
}
.zx_big3_wz{
    margin-top: 25px;
    width: 100%;
    height: 270px;
    background: white;
    font-size: 30px;
    line-height:60px;
}
.zx_big_db{
    margin-top: 30px;
    height: 150px;
    width: 100%;
    font-size: 30px;
    text-align: center;
    line-height: 70px;
}
.zx_big_db_box{
    display: flex;
    justify-content: space-around;
}
.zx_big_tu{
    width: 100%;
    height: 200px;
    background: #222222;
}
.zx_big_tu img{
    width: 100%;
    height: 200px;
    background: #222222;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  color: #989898;
  font-size: 25px;
}
@font-face {
  font-family: "iconfont";
  src: url("../iconfont/iconfont.eot");
  src: url("../iconfont/iconfont.eot?#iefix") format("embedded-opentype"),
    url("../iconfont/iconfont.woff") format("woff"),
    url("../iconfont/iconfont.ttf") format("truetype"),
    url("../iconfont/iconfont.svg#iconfont") format("svg");
}
</style>