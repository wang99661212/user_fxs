<template>
  <div>
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
      <p>8.25晚上练习，推拉项目</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
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
</style>
