<!--  -->
<template>
  <div class="wrapper">
    <Header></Header>
    <div class="gome-head">
      <div class="gome-logo">
        <a href="#">
          <img src="https://jiadian.gome.com.cn/css/i/logo.jpg" alt />
        </a>
      </div>
      <div class="logo-gif">
        <a href="#">
          <img src="https://gfs13.gomein.net.cn/T1mHZ4Bydg1RCvBVdK.gif" alt />
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
    <div class="wrapContents">
      <div class="category-box">
        <div class="category-main">
          <h2>全部商品分类</h2>
          <div class="category-empty"></div>
          <el-carousel direction="vertical" :autoplay="true">
            <el-carousel-item v-for="item in 3" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="focus_silder">
        <div class="cityColumnWarp">
          <ul class="category_wrap">
            <li class="nav-item" v-for="(item,index) in 8" :key="index">
              <h3>
                <div class="category_one">手机</div>
                <div class="category_two">手机通讯 手机配件 充值</div>
              </h3>
            </li>
          </ul>
          <div class="carousel_wrap">
            <el-carousel width="760px" height="404px" :interval="5000" arrow="always">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3></h3>
              </el-carousel-item>
            </el-carousel>
            <div class="imgs">
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
            </div>
          </div>
          <div class="right_wrap">
            <img src="https://gfs8.gomein.net.cn/T1N8b4BjET1RCvBVdK" alt />
            <img src="https://gfs8.gomein.net.cn/T1e8b4ByCv1RCvBVdK" alt />
          </div>
        </div>
      </div>
      <div class="goods_select">
        <div class="select_type">
          <div class="select_item" v-for="(item,index) in 4" :key="index">
            <div class="title">精选推荐</div>
            <div class="item_main">
              <div class="item_main_left">
                <img src="https://gfs7.gomein.net.cn/T1CpA4B5xv1RCvBVdK" alt />
              </div>
              <div class="item_main_right">
                <div class="select_goods" v-for="(item,index) in 4" :key="index">
                  <img src="https://gfs6.gomein.net.cn/T1NEh4B5LT1RCvBVdK" alt />
                  <p>华为nova5 Pro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="select_rank">
          <div class="voucherInfo">
            <div class="title">领券区</div>
            <ul>
              <li>
                <div class="one">
                  <span>￥60</span>
                  <a href="#">点击领取</a>
                </div>
                <div class="two">宏泰速达电脑专营店</div>
              </li>
            </ul>
          </div>
          <div class="rankingList"></div>
        </div>
      </div>
      <div class="brand_recommend">
        <div class="recommend_title">大牌推荐</div>
        <div class="recommend_imgs">
          <img src="https://gfs6.gomein.net.cn/T1u8L4B5dT1RCvBVdK" alt />
          <img src="https://gfs6.gomein.net.cn/T1u8L4B5dT1RCvBVdK" alt />
          <img src="https://gfs6.gomein.net.cn/T1u8L4B5dT1RCvBVdK" alt />
        </div>
        <div class="recommend_lovebrandinfo">
          <div class="lovebrand_detail" v-for="(item,index) in 4" :key="index">
            <div class="lovebrand_detail_left">
              <img src="https://gfs7.gomein.net.cn/T1j4K4Bvbv1RCvBVdK" alt />
            </div>
            <div class="lovebrand_detail_right">
              <div class="title">佳能相机</div>
              <div class="info">相机688元起</div>
              <a href="#">查看详情</a>
            </div>
          </div>
          <div class="goods_logo"></div>
        </div>
      </div>
      <div class="selling_goods">
        <div class="selling_left">
          <h3>精选好物</h3>
          <div class="left_item" v-for="(item,index) in 2" :key="index">
            <img src="http://gfs12.gomein.net.cn/T1kaWXBjDT1RCvBVdK.jpg" alt />
            <div class="item_info">伊莱克斯空调 消暑解热 清凉一夏</div>
          </div>
        </div>
        <div class="selling_center">
          <h3>热卖清单</h3>
          <div class="block">
            <el-carousel trigger="click">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="selling_right">
          <h3>发现好货</h3>
          <div class="right_goods_list">
            <div class="right_item" v-for="(item,index) in 4" :key="index">
              <div class="item_img">
                <img src="https://gfs13.gomein.net.cn/T1HmYXBXLv1RCvBVdK.jpg" alt />
              </div>
              <div class="item_title">笔记本电脑要怎么选？</div>
              <div class="item_user">推荐人</div>
            </div>
          </div>
        </div>
      </div>
      <div class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <Floor v-for="(item,index) in 4" :key="index"></Floor>
      </div>
      <div class="youLike">
        <p class="youLike_tit">猜你喜欢</p>
        <div class="youLike_goods">
          <GlassLikes v-for="(item,index) in 30" :key="index"></GlassLikes>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/footers";
import Header from "@/components/headers";
import Floor from "@/components/electric/electric_floor/index";
import GlassLikes from "@/components/electric/electric_likes/index";
export default {
  components: {
    Footer,
    Header,
    Floor,
    GlassLikes,
  },
  data() {
    return {
      data() {
        return {
          count: 0
        };
      },
      methods: {
        load() {
          this.count += 2;
        }
      }
    };
  }
};
</script>
<style lang='scss' scoped>
@import url("./index.css");
</style>