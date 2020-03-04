<template>
  <div class="wrapper">
    <Header></Header>
    <div class="gome-head">
      <div class="gome-logo">
        <a href="#">
          <img src="https://css.gomein.net.cn/gmpro/1.0.0/public/1.0.0/css/i/logo.png" alt />
        </a>
      </div>
      <div class="search-box">
        <div class="head-search">
          <div class="search-type">
            <span>商品</span>
            <i class="el-icon-arrow-down"></i>
          </div>
          <input type="text" placeholder="输入商品" />
          <button>搜索</button>
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
    <div class="notProvide">
        <img src="https://img5.gomein.net.cn/pop/images/shop_outof_service.jpg" alt="">
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
  mounted(){
      document.title="不提供该服务"
  }
};
</script>

<style>
@import url("./index.css");
</style>