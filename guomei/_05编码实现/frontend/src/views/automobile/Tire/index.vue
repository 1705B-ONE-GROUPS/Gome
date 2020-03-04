/*
 * @Author: zhangqian 
 * @Date: 2020-03-04 15:44:16 
 * @Last Modified by: zhangqian
 * @Last Modified time: 2020-03-04 20:43:24
 */
<template>
  <div class="wrapper">
    <Header></Header>
    <div class="gome-head">
      <div class="gome-logo">
        <a href="#">
          <img src="https://css.gomein.net.cn/gmpro/1.0.0/public/1.0.0/css/i/logo.png" alt />
        </a>
      </div>
      <div class="logo-gif">
        <a href="#">
          <img src="https://gfs12.gomein.net.cn/T1aoJ4BvET1RCvBVdK.gif" alt />
        </a>
      </div>
      <div class="search-box">
        <div class="head-search">
          <div class="search-type">
            <span>商品</span>
            <i class="el-icon-arrow-down"></i>
          </div>
          <input type="text" placeholder="输入商品" />
          <button class="searchbtn">搜索</button>
          <button class="searchall">搜全站</button>
        </div>
        <ul class="search-prompt">
          <li>空气净化器</li>
          <li>湿纸巾</li>
          <li>防护口罩</li>
          <li>防护口罩</li>
          <li>防护口罩</li>
          <li>防护口罩</li>
        </ul>
      </div>
      <div class="head-shopcar">
        <i class="el-icon-shopping-cart-2"></i>
        我的购物车
      </div>
    </div>
    <div class="store_title">
      <div class="title_main">
        <div class="title_one">
          途虎国美官方旗舰店
          <div class="one_show"></div>
        </div>
        <div class="title_two">
          <span>
            <i class="el-icon-headset"></i>
            <a href="#">在线客服</a>
          </span>
          <span>
            <i class="el-icon-plus"></i>
            <a href="#">搜藏店铺</a>
          </span>
        </div>
      </div>
    </div>
    <div class="title_img">
      <img src="https://gfs3.gomein.net.cn/T1S9hTB7_T1RCvBVdK" alt />
    </div>
    <div class="tire_tab">
      <ul>
        <li>首页</li>
        <li>所有商品</li>
        <li>米其林</li>
        <li>马牌</li>
        <li>邓禄普</li>
        <li>固特异</li>
        <li>倍耐力</li>
        <li>普利司通</li>
        <li>佳通</li>
        <li>行车记录仪</li>
      </ul>
    </div>
    <el-alert
      title="途虎养车作为国内较大的汽车后市场服务商，支持395城市10000家门店免费安装服务，更赠送气门嘴、免费动平衡、免费轮胎换位、免费充气及调整胎压等服务。"
      type="warning"
      center
      show-icon
    ></el-alert>
    <div class="big_img">
      <img src="https://gfs3.gomein.net.cn/T1W6bQB5__1RCvBVdK" alt />
    </div>
    <div class="tire_content">
      <div class="content_goodsList">
        <h2 class="shows-hd-color3_1 shows-hd-color">途虎热销轮胎</h2>
        <span class="shows-hd-border-3"></span>
        <span class="shows-hd-text3">万家门店免费安装</span>
        <div class="goodsList_box">
          <div class="goods_item" v-for="(item,index) in 6" :key="index"></div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/headers";
import Footer from "@/components/footers";
export default {
  components: {
    Header,
    Footer
  },
  mounted() {
    document.title = "汽车_轮胎满999减100";
  }
};
</script>

<style>
@import url("./index.css");
</style>