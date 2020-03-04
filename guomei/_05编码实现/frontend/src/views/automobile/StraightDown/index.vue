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
        <h2></h2>
        <div class="category-nav">
          <li>
            <router-link to="/automobile/straightDown" tag="a" target="_blank">直降500</router-link>
          </li>
          <li>
            <a href="#">轮胎满999减100</a>
          </li>
          <li>
            <a href="#">内饰满99减5</a>
          </li>
          <li>
            <a href="#">机油满199减10</a>
          </li>
          <li>
            <a href="#">凌度满399减20</a>
          </li>
        </div>
      </div>
    </div>
    <div class="Straight_content">
      <div class="show_img">
        <div class="img_box">
          <img src="https://gfs11.gomein.net.cn/T1TQW_ByJv1RCvBVdK.jpg" alt />
          <img src="https://gfs11.gomein.net.cn/T11qhvB5hv1RCvBVdK.jpg" alt />
          <img src="https://gfs11.gomein.net.cn/T1kcDgB7AT1RCvBVdK.jpg" alt />
        </div>
      </div>
      <div class="motoList">
        <div class="moto_tit">
          <img src="https://gfs10.gomein.net.cn/T1SoVsBKET1RCvBVdK.jpg" alt />
        </div>
        <img class="gomeImgLoad" src="//gfs12.gomein.net.cn/T1QW__BsAT1RCvBVdK.jpg" usemap="#Map" />
        <map name="Map">
          <area
            shape="rect"
            coords="-1, 1, 475, 616"
            href="//item.gome.com.cn/A0006369376-pop8010864517.html"
            target="_blank"
            data-code="MI057144-1"
          />
          <area
            shape="rect"
            coords="508, 4, 983, 620"
            href="//item.gome.com.cn/A0006213587-pop8009940755.html"
            target="_blank"
            data-code="MI057144-2"
          />
        </map>
      </div>
      <div class="selling_recommend">
        <img src="https://gfs10.gomein.net.cn/T1lhx_BsdT1RCvBVdK.jpg" alt />
        <img class="gomeImgLoad" src="//gfs10.gomein.net.cn/T1FXEsBKxT1RCvBVdK.jpg" usemap="#Mapcc" />
        <map name="Mapcc">
          <area
            shape="rect"
            coords="2, 9, 240, 376"
            href="//item.gome.com.cn/A0006203957-pop8009893727.html"
            target="_blank"
            data-code="MI302090-2"
          />
          <area
            shape="rect"
            coords="252, 8, 491, 377"
            href="//item.gome.com.cn/A0005403301-pop8006578777.html"
            target="_blank"
            data-code="MI302090-3"
          />
          <area
            shape="rect"
            coords="500, 9, 744, 376"
            href="//item.gome.com.cn/A0006236870-pop8010057883.html"
            target="_blank"
            data-code="MI849870-1"
          />
          <area
            shape="rect"
            coords="752, 11, 991, 379"
            href="//item.gome.com.cn/A0005623541-pop8007665541.html"
            target="_blank"
            data-code="MI302090-4"
          />
        </map>
      </div>
      <GoodsModule v-for="(item,index) in titleList" :key="index" :titUrl="item.titUrl"></GoodsModule>
      <div class="jingxuan">
        <img src="https://gfs12.gomein.net.cn/T1.JxjBQbT1RCvBVdK.jpg" alt />
        <img class="gomeImgLoad" src="//gfs10.gomein.net.cn/T1MhDQBTET1RCvBVdK.jpg" usemap="#Map3" />
        <map name="Map3">
          <area
            href="//mall.gome.com.cn/80008887/?intcmp=cxcms-MI491647-1"
            shape="rect"
            target="_blank"
            coords="9, 21, 240, 339"
            data-code="MI491647-1"
          />
          <area
            href="//mall.gome.com.cn/80006076/?intcmp=cxcms-MI491647-2"
            shape="rect"
            target="_blank"
            coords="256, 17, 487, 342"
            data-code="MI491647-2"
          />
          <area
            href="//mall.gome.com.cn/80013018/?intcmp=cxcms-MI491647-3"
            shape="rect"
            target="_blank"
            coords="506, 18, 740, 339"
            data-code="MI491647-3"
          />
          <area
            href="//mall.gome.com.cn/80006398/?intcmp=cxcms-MI491647-4"
            shape="rect"
            target="_blank"
            coords="754, 18, 988, 338"
            data-code="MI491647-4"
          />
        </map>
        <img class="gomeImgLoad" src="//gfs12.gomein.net.cn/T1AhA_BXKv1RCvBVdK.jpg" usemap="#Map4" />
        <map name="Map4">
          <area
            href="//mall.gome.com.cn/80001110/"
            shape="rect"
            target="_blank"
            coords="-120, 3951, 112, 4275"
            data-code="MI027734-1"
          />
          <area
            href="//mall.gome.com.cn/80005712/?intcmp=cxcms-MI027734-2"
            shape="rect"
            target="_blank"
            coords="253, 11, 491, 334"
            data-code="MI027734-2"
          />
          <area
            href="//mall.gome.com.cn/80005199/?intcmp=cxcms-MI027734-3"
            shape="rect"
            target="_blank"
            coords="503, 11, 739, 333"
            data-code="MI027734-3"
          />
          <area
            href="//mall.gome.com.cn/80013238/?intcmp=cxcms-MI027734-4"
            shape="rect"
            target="_blank"
            coords="754, 10, 988, 332"
            data-code="MI027734-4"
          />
          <area
            href="//mall.gome.com.cn/80001110/?intcmp=cxcms-MI027734-5"
            shape="rect"
            target="_blank"
            coords="4, 11, 239, 335"
            data-code="MI027734-5"
          />
        </map>
        <img class="gomeImgLoad" src="//gfs11.gomein.net.cn/T1o6YjBvKT1RCvBVdK.jpg" usemap="#Map5" />
        <map name="Map5">
          <area
            href="//mall.gome.com.cn/80015425/"
            shape="rect"
            target="_blank"
            coords="2, 12, 491, 242"
            data-code="MI006562-1"
          />
          <area
            href="//mall.gome.com.cn/80012968/"
            shape="rect"
            target="_blank"
            coords="505, 12, 988, 239"
            data-code="MI006562-2"
          />
        </map>
      </div>
      <div class="fenhuichang">
        <img src="https://gfs11.gomein.net.cn/T1I7_gB7LT1RCvBVdK.jpg" alt />
        <img
          class="gomeImgLoad"
          src="//gfs13.gomein.net.cn/T1ocxTBXL_1RCvBVdK.jpg"
          data-lazy-img="0"
          data-lazy-init="//gfs13.gomein.net.cn/T1ocxTBXL_1RCvBVdK.jpg"
          border="0"
          usemap="#Mapaa"
        />
        <map name="Mapaa">
          <area
            shape="rect"
            coords="4, 22, 240, 338"
            href="//prom.gome.com.cn/html/prodhtml/topics/201804/8/qcczdq.html"
            target="_blank"
            data-code="MI719677-1"
          />
          <area
            shape="rect"
            coords="252, 21, 492, 337"
            href="//prom.gome.com.cn/html/prodhtml/topics/201804/4/qcmtczc.html"
            target="_blank"
            data-code="MI719677-2"
          />
          <area
            shape="rect"
            coords="499, 21, 739, 330"
            href="//prom.gome.com.cn/html/prodhtml/topics/201804/4/qccszc.html"
            target="_blank"
            data-code="MI719677-3"
          />
          <area
            shape="rect"
            coords="749, 21, 985, 330"
            href="//prom.gome.com.cn/html/prodhtml/topics/201804/8/qcyhpj.html"
            target="_blank"
            data-code="MI719677-4"
          />
        </map>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/headers";
import Footer from "@/components/footers";
import GoodsModule from "@/components/automobile/straightDown/straightDown_module";
export default {
  components: {
    Header,
    Footer,
    GoodsModule
  },
  data() {
    return {
      titleList: [
        {
          titUrl: "https://gfs10.gomein.net.cn/T1mPKgBCCv1RCvBVdK.jpg"
        },
        {
          titUrl: "https://gfs11.gomein.net.cn/T15OKbB7VT1RCvBVdK.jpg"
        },
        {
          titUrl: "https://gfs10.gomein.net.cn/T1skxQByYv1RCvBVdK.jpg"
        },
        {
          titUrl: "https://gfs10.gomein.net.cn/T1qCbsB7AT1RCvBVdK.jpg"
        },
        {
          titUrl: "https://gfs10.gomein.net.cn/T1ZMLbB7CT1RCvBVdK.jpg"
        },
        {
          titUrl: "https://gfs11.gomein.net.cn/T166W_B7WT1RCvBVdK.jpg"
        },
        {
          titUrl: "https://gfs11.gomein.net.cn/T1cQJ_BjDT1RCvBVdK.jpg"
        },
        {
          titUrl: "https://gfs10.gomein.net.cn/T11lE_ByJv1RCvBVdK.jpg"
        }
      ]
    };
  },
  mounted() {
    document.title = "汽车_直降500";
  }
};
</script>

<style>
@import url("./index.css");
</style>