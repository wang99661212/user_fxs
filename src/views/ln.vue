<template>
  <div class="big">
    <div class="xq_top">
      <div class="xq_top_left">
        <!-- <img class="xq_top_img" src="@/assets/logo.png" alt /> -->
        <span>装修预算</span>
      </div>
      <div class="xq_top_right">
        <i class="iconfont icon-nav" style="font-size:25px;color:#d0d0d0"></i>
        <p>导航</p>
      </div>
    </div>
    <div class="xq_lb">
      <van-swipe :autoplay="3000">
        <van-swipe-item class="xq_lb_img" v-for="(item, index) in xq_top_image" :key="index">
          <img class="xq_lb_img" :src="item" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="xq_zy">
      <div class="xq_zy_but">房先森 / 装修攻略 / 装修预算 / 正文</div>
      <div class="xq_zy_wz">
        <p style="font-size: 36px;">装修预算注意事项</p>
        <p style="font-size: 24px;color:#bababa">
          <i class="iconfont icon-time" style="font-size: 24px;color:#bababa"></i>2016-07-09 &emsp;
          <span>
            <i class="iconfont icon-view" style="font-size: 24px;color:#bababa"></i>115
          </span>
        </p>
      </div>
    </div>
    <div class="xq_kt">
      <div class="xq_kt_sp">
        <span>客厅装修隔断</span>
        <span>客厅装修图</span>
        <span>客厅装修效果</span>
        <span>客厅装修隔断</span>
        <span>客厅装修图</span>
        <span>客厅装修效果</span>
      </div>
      <div
        class="xq_kt_wz"
      >&emsp;&emsp;&emsp;导语：在装修时如果没有前提最好装修预算，很容易造成最后开支过大，添置很多没必要的增项。那么在做预算的时候又有什么需要注意的地方呢？</div>
      <div class="xq_kt_img">
        <!-- <img src="@/assets/tu.png" alt /> -->
      </div>
      <div class="xq_kt_but">点击展开全文</div>
      <div class="xq_kt_icon">
        <span class="xq_kt_icon_sp">
          <i class="iconfont icon-pencle" style="font-size:40px;color:#239df7;"></i>
        </span>
        <span class="xq_kt_icon_sp2">
          <i class="iconfont icon-share" style="font-size:40px;color:#fdb605;"></i>
        </span>
      </div>
      <div class="xq_kt_but">进入装修预算</div>
    </div>
    <div class="xq_kong"></div>
    <div class="xq_xh">
      <p style="font-size:25px">猜你喜欢</p>
      <div class="xq_xh_box">
        <div class="xq_xh_box_left">
          <!-- <img class="xq_xh_box_img" src="@/assets/1.png" alt /> -->
        </div>
        <div class="xq_xh_box_right">
          <p>遇到有这样房子的男人就嫁了吧</p>
          <br>
          <br>
          <p style="font-size: 20px;color:#bababa">
            <i class="iconfont icon-time" style="font-size: 20px;color:#bababa"></i>2016-07-09 &emsp;
            <span>
              <i class="iconfont icon-view" style="font-size: 20px;color:#bababa"></i>115
            </span>
          </p>
        </div>
      </div>
      <div class="xq_xh_box">
        <div class="xq_xh_box_left">
          <!-- <img class="xq_xh_box_img" src="@/assets/3.png" alt /> -->
        </div>
        <div class="xq_xh_box_right">
          <p>遇到有这样房子的男人就嫁了吧</p>
          <br>
          <br>
          <p style="font-size: 20px;color:#bababa">
            <i class="iconfont icon-time" style="font-size: 20px;color:#bababa"></i>2016-07-09 &emsp;
            <span>
              <i class="iconfont icon-view" style="font-size: 20px;color:#bababa"></i>115
            </span>
          </p>
        </div>
      </div>
      <div class="xq_xh_box">
        <div class="xq_xh_box_left">
          <!-- <img class="xq_xh_box_img" src="@/assets/1.png" alt /> -->
        </div>
        <div class="xq_xh_box_right">
          <p>能让您涨工资的家居风水！</p>
          <br>
          <br>
          <p style="font-size: 20px;color:#bababa">
            <i class="iconfont icon-time" style="font-size: 20px;color:#bababa"></i>2016-07-09 &emsp;
            <span>
              <i class="iconfont icon-view" style="font-size: 20px;color:#bababa"></i>115
            </span>
          </p>
        </div>
      </div>
      <div class="xq_xh_box">
        <div class="xq_xh_box_left">
          <!-- <img class="xq_xh_box_img" src="@/assets/3.png" alt /> -->
        </div>
        <div class="xq_xh_box_right">
          <p>遇到有这样房子的男人就嫁了吧</p>
          <br>
          <br>
          <p style="font-size: 20px;color:#bababa">
            <i class="iconfont icon-time" style="font-size: 20px;color:#bababa"></i>2016-07-09 &emsp;
            <span>
              <i class="iconfont icon-view" style="font-size: 20px;color:#bababa"></i>115
            </span>
          </p>
        </div>
      </div>
      <div class="xq_xh_box">
        <div class="xq_xh_box_left">
          <!-- <img class="xq_xh_box_img" src="@/assets/1.png" alt /> -->
        </div>
        <div class="xq_xh_box_right">
          <p>能让您涨工资的家居风水！</p>
          <br>
          <br>
          <p style="font-size: 20px;color:#bababa">
            <i class="iconfont icon-time" style="font-size: 20px;color:#bababa"></i>2016-07-09 &emsp;
            <span>
              <i class="iconfont icon-view" style="font-size: 20px;color:#bababa"></i>115
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="xq_kong" style="margin-top:10px"></div>
    <div style="font-size:15px">
     &emsp;&emsp;&emsp; 导语：很容易造成最后开支过大，导语：在装修时如果没有前提最好装修预算，很容易造成最后开支过大，添置很多没必要的增项。那么在做预算的时候又有什么需要注意的地方呢？添置很多没必要的增项。那么在做预算的时候又有什么需要注意的地方呢？
    </div>
    <div class="xq_kong" style="margin-top:10px"></div>
    <div class="xq_zdb_box">
      <p>服务热线 400-9977-658</p>
      <div class="xq_zdb">
        <span>触屏版</span><span>电脑板</span><span>关于我们</span><span>联系我们</span>
      </div>
    </div>
    <div>
      <!-- <img style="background:#333333" src="@/assets/quoten_bottom.png" alt=""> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      xq_top_image: ["./house_info.jpg", "./house_info.jpg"],
    };
  },
};
</script>
<style>
.big {
  width: 100%;
  height: 4000px;
}
.xq_top {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.xq_top_left {
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
}
.xq_top_right {
  width: 15%;
  text-align: center;
  font-size: 35px;
  color: #d0d0d0;
}
.xq_top_img {
  width: 250px;
  height: 100%;
}
.xq_lb {
  width: 100%;
  height: 300px;
}
.xq_lb_img {
  width: 100%;
  height: 300px;
}
.xq_zy {
  width: 95%;
  height: 250px;
  border-bottom: 2px solid #f1f1f1;
  margin: auto;
}
.xq_zy_but {
  width: 100%;
  height: 50px;
  background: #f4f4f4;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 24px;
  line-height: 50px;
}
.xq_zy_wz {
  padding-top: 36px;
  width: 100%;
  height: 134px;
  text-align: center;
}
.xq_kt {
  width: 95%;
  height: 1200px;
  margin: auto;
}
.xq_kt_sp {
  width: 100%;
  height: 100px;
  line-height: 50px;
  font-size: 24px;
  color: #bababa;
}
.xq_kt_sp span {
  width: 200px;
  height: 32px;
  border: 1px solid #bababa;
  margin-left: 12px;
  border-radius: 25px;
}
.xq_kt_wz {
  height: 170px;
  padding-top: 36px;
  font-size: 24px;
  color: #bababa;
  line-height: 50px;
}
.xq_kt_img {
  width: 80%;
  height: 350px;
  margin: auto;
}
.xq_kt_img img {
  width: 100%;
  height: 350px;
}
.xq_kt_but {
  margin-top: 50px;
  width: 98%;
  height: 70px;
  border: 1px solid #32c68f;
  text-align: center;
  font-size: 36px;
  line-height: 70px;
  color: #32c68f;
}
.xq_kt_icon {
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.xq_kt_icon_sp {
  width: 100px;
  height: 100px;
  border: 3px solid #239df7;
  border-radius: 100px;
  padding: 20px;
}
.xq_kt_icon_sp2 {
  width: 100px;
  height: 100px;
  border: 3px solid #fdb605;
  border-radius: 100px;
  padding: 20px;
}
.xq_kong {
  width: 100%;
  height: 20px;
  background: #f4f4f4;
}
.xq_xh_box {
  width: 95%;
  margin: auto;
  height: 200px;
  border-bottom: 1px solid gainsboro;
  display: flex;
  padding-top: 15px;
}
.xq_xh_box_left {
  width: 30%;
  height: 200px;
}
.xq_xh_box_img {
  width: 100%;
  height: 90%;
}
.xq_xh_box_right {
  width: 70%;
  height: 200px;
  font-size: 35px;
}
.xq_zdb_box{
  width: 100%;
  height: 200px;
  font-size: 30px;
  text-align: center;
  line-height: 80px;
}
.xq_zdb{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>