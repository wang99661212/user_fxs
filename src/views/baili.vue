<template>
  <div class="app">
    <header>
      <img src="@/assets/切图/logo.png" alt="" />
      <p style="font-size:25px;">
        装修流程
      </p>
      <div class="head_icon">
        <div class="head_icon_right">
          <p>
            <i
              class=" inco iconfont icon-nav"
              style="font-size:20px;color:gray;"
            ></i>
          </p>
          <span style="font-size:20px;display:block">我的</span>
        </div>
        <div class="head_icon_right">
          <p>
            <i
              class="inco iconfont icon-user"
              style="font-size:20px;color:gray;"
            ></i>
          </p>
          <span style="font-size:20px;display:block">导航</span>
        </div>
      </div>
    </header>
    <div class="con">
      <img src="@/assets/切图/process/process1.jpg" alt="" />
      <img src="@/assets/切图/process/process2.jpg" alt="" />
      <img src="@/assets/切图/process/process3.png" alt="" />
      <img src="@/assets/切图/process/process4.jpg" alt="" />
    </div>
    <hr style="height:12px;background:gray" />
    <p style="color:#000;">
      房先森互联网家装有别于传统装修公司与其他装修中.介平台，以自营模式整合设计师与项目经理，杜绝项目转介平台，以自营模式整合设计师与项目经理，杜绝项目转间环节，提供装修套餐+个性化定制服务。
    </p>
    <hr style="height:12px;background:gray" />
    <p align="center">
      <i class="iconfont_phone" style="font-size:25px">&#xe607;</i>
      服务热线:400-600-99999
    </p>
    <p>练习</p>
    <p>练习</p>
    <p>练习</p>
    <p>练习</p>
    <p>练习</p>
  </div>
</template>
<style lang="scss" scoped>
.app {
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: "iconfont";
  src: url("../iconfont/iconfont.eot");
  src: url("../iconfont/iconfont.eot?#iefix") format("embedded-opentype"),
    url("../iconfont/iconfont.woff") format("woff"),
    url("../iconfont/iconfont.ttf") format("truetype"),
    url("../iconfont/iconfont.svg#iconfont") format("svg");
}
.iconfont_phone {
  font-family: "iconfont" !important;
  font-size: 30px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  color: #39c893;
}
header {
  img {
    width: 250px;
    height: 90px;
  }
  .head_icon {
    display: flex;
    justify-content: space-between;
  }
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.con {
  img {
    width: 100%;
  }
}
</style>
