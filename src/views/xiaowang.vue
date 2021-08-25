<template>
  <div class="list">
    <div class="list_top">
      <!-- <img src="../../public/img/logo.png" class="logo_img"> -->
      <p style="font-size:28px; margin-top:20px; margin-left:45px;">效果图</p>
      <div class="list_top_right">
        <div class="right_one">
          <!-- <img src="../../public/img/my.png" width="38px" height="38px"> -->
          <p style="font-size:16px; margin-left:3px; color:#999999;">我的</p>
        </div>
        <div class="right_two">
          <!-- <img src="../../public/img/gang.png" width="38px" height="38px"> -->
          <p style="font-size:16px; margin-left:3px; color:#999999;">导航</p>
        </div>
      </div>
    </div>
    <div class="list_huxing">
      <div class="huxing_one">
        <p style="font-size:26px;">户型</p>
        <i
          class="icon iconfont icon-down"
          style="font-size:25px; margin-top:7px; margin-left:10px; color: #999999;"
        ></i>
      </div>
      <div class="huxing_two">
        <p style="font-size:26px;">区域</p>
        <i
          class="icon iconfont icon-down"
          style="font-size:25px; margin-top:7px; margin-left:10px; color: #999999;"
        ></i>
      </div>
      <div class="huxing_three">
        <p style="font-size:26px;">风格</p>
        <i
          class="icon iconfont icon-down"
          style="font-size:25px; margin-top:7px; margin-left:10px; color: #999999;"
        ></i>
      </div>
      <div class="huxing_search">
        <i
          class="icon iconfont icon-search"
          style="font-size:25px; margin-top:7px; margin-left:10px; color: #999999;"
        ></i>
      </div>
    </div>
    <div class="list_box">
      <div class="box_every">
        <img
          src="http://jd.itying.com/upload/aZiSoT5NZ4n454ipYZqLgsr8.png"
          width="100%"
          height="150px"
        >
        <p style="font-size:15px;">欧美文化的抽象美感</p>
        <p style="font-size:15px;">混搭&emsp;三室&emsp;1100元/m</p>
      </div>
      <div class="box_every_two">
        <img
          src="http://jd.itying.com/upload/aZiSoT5NZ4n454ipYZqLgsr8.png"
          width="100%"
          height="150px"
        >
        <p style="font-size:15px;">欧美文化的抽象美感</p>
        <p style="font-size:15px;">混搭&emsp;三室&emsp;1100元/m</p>
      </div>
      <div class="box_every">
        <img
          src="http://jd.itying.com/upload/aZiSoT5NZ4n454ipYZqLgsr8.png"
          width="100%"
          height="150px"
        >
        <p style="font-size:15px;">欧美文化的抽象美感</p>
        <p style="font-size:15px;">混搭&emsp;三室&emsp;1100元/m</p>
      </div>
      <div class="box_every_two">
        <img
          src="http://jd.itying.com/upload/aZiSoT5NZ4n454ipYZqLgsr8.png"
          width="100%"
          height="150px"
        >
        <p style="font-size:15px;">欧美文化的抽象美感</p>
        <p style="font-size:15px;">混搭&emsp;三室&emsp;1100元/m</p>
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
  methods: {},
};
</script>
<style scoped>
.list {
  width: 100%;
  height: 100%;
}
.list_top {
  width: 100%;
  height: 150px;
  display: flex;
  border-bottom: 1px solid #999999;
}
.list_huxing {
  width: 100%;
  height: 100px;
  display: flex;
  border-bottom: 1px solid #999999;
  padding-left: 40px;
  box-sizing: border-box;
}
.logo_img {
  width: 200px;
  height: 100px;
  margin-top: 16px;
  margin-left: 18px;
}
.list_top_right {
  width: 70px;
  display: flex;
  margin-left: 120px;
  margin-top: 17px;
}
.right_two {
  margin-left: 10px;
}
.huxing_one {
  width: 200px;
  height: 80px;
  margin-top: 11px;
  text-align: center;
  display: flex;
  border-right: #f4f4f4;
  border-right: 5px solid #f4f4f4;
  padding-left: 10px;
  box-sizing: border-box;
}
.huxing_two {
  width: 200px;
  height: 80px;
  margin-top: 11px;
  text-align: center;
  display: flex;
  border-right: 5px solid #f4f4f4;
  padding-left: 10px;
  box-sizing: border-box;
}
.huxing_three {
  width: 200px;
  height: 80px;
  margin-top: 11px;
  text-align: center;
  display: flex;
  border-right: 5px solid #f4f4f4;
  padding-left: 10px;
  box-sizing: border-box;
}
.huxing_search {
  width: 150px;
  height: 80px;
  margin-top: 11px;
  text-align: center;
  display: flex;
}
.list_box {
  width: 100%;
  background: #eaeaea;
  display: flex;
  flex-wrap: wrap;
}
.box_every {
  width: 363px;
  height: 380px;
  background: #ffffff;
  text-align: center;
  margin-top: 5px;
}
.box_every_two {
  width: 363px;
  height: 380px;
  background: #ffffff;
  text-align: center;
  margin-top: 5px;
  margin-left: 22px;
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