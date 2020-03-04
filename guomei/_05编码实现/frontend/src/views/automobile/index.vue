/*
 * @Author: zhangqian 
 * @Date: 2020-03-04 15:38:06 
 * @Last Modified by: zhangqian
 * @Last Modified time: 2020-03-04 20:40:38
 */
<!--  -->
<template>

  <div class="wrapper">
    
    <Header></Header>
    <div class="gome-head">
      <div class="gome-logo">
        <a href="#">
          <img src="https://css.gomein.net.cn/gmpro/2.0.0/channel/car/1.0.5/css/i/logo.png" alt />
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
    <div class="category-box">
      <div class="category-main">
        <h2>汽车用品分类</h2>
        <div class="category-nav">
          <li>
            <router-link to="/automobile/straightDown" tag="a" target="_blank">直降500</router-link>
          </li>
          <li>
            <router-link to="/automobile/tire" tag="a" target="_blank">轮胎满999减100</router-link>
          </li>
          <li>
            <router-link to="/automobile/notProvide" tag="a" target="_blank">内饰满99减5</router-link>
          </li>
          <li>
            <router-link to="/automobile/notProvide" tag="a" target="_blank">机油满199减10</router-link>
          </li>
          <li>
            <router-link to="/automobile/notProvide" tag="a" target="_blank">凌度满399减20</router-link>
          </li>
        </div>
      </div>
    </div>
    <div class="slide_box">
      <div class="slide_content">
        <div class="slide_left">
          <li v-for="(item,index) in 5" :key="index">
            <div class="one">车载电器</div>
            <div class="two">
              <a href="#">行车记录仪</a>
              <a href="#">安全预警仪</a>
            </div>
          </li>
        </div>
        <div class="slide_center">
          <img src="https://gfs11.gomein.net.cn/T1LEEQB4A_1RCvBVdK.jpg" alt />
        </div>
        <div class="slide_right">
          <p class="right_tit">用品查询</p>
          <el-select v-model="form.region" placeholder="选择类型">
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
          <el-select v-model="form.region" placeholder="选择品类">
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
          <el-select v-model="form.region" placeholder="选择品牌">
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
          <button>查询</button>
        </div>
      </div>
    </div>
    <div class="selling_goods_list">
      <div class="goods_list_title">热销商品</div>
      <ul class="goods_list_show">
        <li class="goods_list_item" v-for="(item,index) in 5" :key="index">
          <img src="https://gfs17.gomein.net.cn/T1pQLTBQdT1RCvBVdK_210.jpg" alt />
          <div class="item_info">
            <p class="item_info_desc">商品描述</p>
            <p class="item_info_price">￥42.00</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="brank_store">
      <div class="brank_store_title">品牌旗舰店</div>
      <div class="store_list"></div>
    </div>
    <GoodsModule v-for="(item,index) in 4" :key="index"></GoodsModule>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/headers";
import Footer from "@/components/footers";
import GoodsModule from "@/components/automobile/automobile_module/index";
export default {
  components: {
    Header,
    Footer,
    GoodsModule,
  },
  data() {
    return {
      form: {
        region: ""
      }
    };
  },
  mounted(){
      document.title="汽车"
  }
};
</script>

<style lang='scss' scoped>
@import url("./index.css");
</style>