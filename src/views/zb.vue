<template>
<div class="zuida">
  <!-- 这是头部 -->
 <div class="tou">
   <div class="sanjiao">

   </div>
   <div class="zi">
      欧美文化的抽象美感
   </div>
    <div class="daohang"> 
        <i class="iconfont icon-nav"></i>
        <p>导航</p>
    </div>
 </div>
 <!-- 头下面 -->
 <div class="xia">
   <div class="kong">

   </div>
   <div class="tu">
     <h1>这是图</h1>
   </div>
   <div class="quan">

   </div>
   <div class="xiazi">
     <p>卧室（1）</p>
     <p>书房（2）</p>
     <p>厨房（1）</p>
     <p>卫生间（1）</p>
   </div>
   <div class="quanzi">
     <p>设计诠释：less is more 不需要过多的装饰，</p>
     <p>简单的墙面背景与简洁的家具即可组成一个温</p>
     <p>暖的家</p>
   </div>
 </div>
</div>
</template>

<script>

export default {
components: {},
data() {
return {

};
},
computed: {},
watch: {},
methods: {

},
created() {

},
mounted() {

},
}
</script>
<style lang='scss'>
.zuida{
  margin: 0;
  padding: 0;
  font-size: 10px;
  .tou{
  width: 100%;
  height: 1.3rem;
  // background: red;
  position: relative;
  text-align: center;
  font-size: 40px;
  .sanjiao{
    width: 0.5rem;
    height: 0.5rem;
    border-top: 1px solid res(0,0,0,0);
    border-bottom: 5px solid black;
    border-left: 5px solid black;
    border-right: 1px solid res(0,0,0,0);
    transform: rotate(45deg);
    position: absolute;
    bottom: 25px;
    left: 20px
  }
  .zi{
    width: 60%;
    height: 100%;
    // background: white;
    margin-left: 2rem;
    line-height:1.3rem;
    position: absolute
  }
  .daohang{
    width: 10%;
    height: 80%;
    // background: black;
    position: absolute;
    margin-right: 25px;
    margin-top: 10px;
    right: 0;
    i{
      font-size: 45px;
    }
    p{
      font-size: 25px
    }
  }
  }
  .xia{
    width: 100%;
    height: 14rem;
    background:#202020;
    .kong{
      width: 100%;
      height: 1.5rem;
    }
    .tu{
      width: 100%;
      height: 5rem;
      background: red;
      
    }
    .quan{
      width: 100%;
      height: 1.3rem;
      background: blue;
      margin-top: 46px;
    }
    .xiazi{
      width: 100%;
      height: .8rem;
      // background: blue;
      margin-top: 30px;
      display: flex;
      color: red;
      line-height: .8rem;
      p{
        margin-left: 50px;
        font-size: 25px;
        color: #38ca94
      }
    }
    .quanzi{
      width: 100%;
      height: 3rem;
      color: white;
      font-size: 35px;
      p{
        margin-top: 30px;
        margin-left: 25px
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