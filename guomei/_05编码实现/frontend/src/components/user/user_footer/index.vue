<!--  -->
<template>
  <div>
    <!-- 底部 -->
    <div class="gome-foot">
      <div class="gome-foot-box">
        <div class="clearfix-box">
          <dl class="clearfix">
            <dt>
              <i>
                <img :src="require('@/assets/img/footer/house.png')" alt />
              </i>
            </dt>
            <dd>
              <p>门店服务</p>
              <p>
                <a class="dd_two_p" href="https://help.gome.com.cn/question/37.html">国美门店全国共计2000余家</a>
              </p>
            </dd>
          </dl>
          <dl class="clearfix">
            <dt>
              <i class="finger_img">
                <img :src="require('@/assets/img/footer/finger.png')" alt />
              </i>
            </dt>
            <dd>
              <p>用户体验</p>
              <p>
                <a class="dd_two_p" href="https://help.gome.com.cn/question/37.html">参与用户体验改进计划用户反馈</a>
              </p>
            </dd>
          </dl>
        </div>

        <div class="qrcode-setion">
          <em class="qrcode_em1">
            <i>
              <img :src="require('@/assets/img/footer/chat.png')" alt />
            </i>
            <p class="qrcodefontsize">公众号</p>
          </em>
          <em class="qrcode_em2">
            <i>
              <img :src="require('@/assets/img/footer/phone.png')" alt />
            </i>
            <p class="qrcodefontsize">手机站点</p>
          </em>
          <em class="qrcode_em3">
            <i>
              <img src="http://gfs11.gomein.net.cn/T1uZdyBXCT1RCvBVdK.jpg" alt />
            </i>
            <p class="qrcodefontsize">扫描下载客户端</p>
          </em>
        </div>
        <ul class="gome_uls">
          <li>
            <a href="https://www.gomeholdings.com/">国美控股集团</a>
          </li>
          <li>
            <a href="https://www.gomegj.com/?intcmp=group-1000043124-1">国美管家</a>
          </li>
          <li>
            <a href="https://help.gome.com.cn/about/company.html">关于国美</a>
          </li>
          <li>
            <a href="https://zp.gome.com.cn/">加入我们</a>
          </li>
          <li>|</li>
          <li>
            <a href="https://brand.gome.com.cn/">品牌大全</a>
          </li>
          <li>
            <a href="https://www.gome.com.cn/topic/">商品专题</a>
          </li>
          <li>
            <a href="https://www.gome.com.cn/chanpin/">商品词</a>
          </li>
          <li>
            <a href="https://www.gome.com.cn/hotwords/">热词搜索</a>
          </li>
          <li>
            <a href="https://www.gome.com.cn/links/">友情链接</a>
          </li>
          <li>
            <a href="https://news.gome.com.cn/4-8ef49f4b-1-8.html">风险监测</a>
          </li>
          <li>|</li>
          <li>
            <a href="https://cps.gome.com.cn/">销售联盟</a>
          </li>
          <li>
            <a href="https://www.gome.com.cn/join/">商家入驻</a>
          </li>
          <li>
            <a href="https://login.gome.com.cn/fxSite">国美分销</a>
          </li>
        </ul>
        <div class="foot_p">
          <p>
            本公司游戏产品适合18岁以上成年人使用违法和不良信息举报电话:
            <span class="contentblue">021-39900132</span> 互联网药品信息服务资格证编号(沪)经营性-2019-0006
          </p>
          <p>网络食品销售第三方平台提供者备案:沪网食备A0015号网络文化经营许可证沪网文[201715537-436号 增值电信业务经营许可证</p>
          <p>客服电话: 4008113333沪ICP备11009419号/京ICP备 19011786号京B2-20191290 经营执照营业执照出版物经营许可证</p>
          <p>
            @2000-2020国美在线电子商务有限公司版权所有
            <span class="kk"></span>
            <img class="hui_img" :src="require('@/assets/img/footer/hui.png')" />京公网安备11010502038379号
          </p>
        </div>
        <div class="gome-foot-credit">
          <a class="credit_end">
            <i class="end_img">
              <img :src="require('@/assets/img/footer/f1.png')" />
            </i>
            <span>经营性网站备案信息</span>
          </a>
          <a class="credit_end">
            <i class="end_img">
              <img :src="require('@/assets/img/footer/f2.png')" />
            </i>
            <span>可信网站信用评价</span>
          </a>
          <a class="credit_end">
            <i class="end_img">
              <img :src="require('@/assets/img/footer/f3.png')" />
            </i>
            <span>诚信网站</span>
          </a>
          <a class="credit_end">
            <i class="end_img">
              <img :src="require('@/assets/img/footer/f4.png')" />
            </i>
            <span>朝阳网络警察</span>
          </a>
          <a class="credit_end">
            <i class="end_img">
              <img :src="require('@/assets/img/footer/f5.png')" />
            </i>
            <span>网购大家评</span>
          </a>
          <a class="credit_end">
            <i class="end_img">
              <img :src="require('@/assets/img/footer/f6.png')" />
            </i>
            <span>上海市互联网违法和不良信息举报中心</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footers"
};
</script>
<style lang='scss' scoped>
// 底部
.gome-footer-wrap {
  width: 1200px;
  margin: 10px auto;
}
.gome-foot {
  width: 100%;
  background: #f5f5f5;
  border-top: 1px solid #dd00a7;
  .gome-foot-box {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    .clearfix-box {
      display: flex;
      .clearfix {
        display: flex;
        margin: 18px 60px 18px 0;
        dt {
          margin-right: 7px;
          i {
            display: block;
            width: 64px;
            height: 54px;
            img {
              width: 64px;
              height: 54px;
            }
          }

          .shopsize {
            font-size: 40px;
            color: #ccc;
          }
        }
        dd {
          margin-right: 10px;
          margin-top: 6px;
          .dd_two_p {
            font-size: 13px;
            color: #ccc !important;
          }
        }
      }
    }
    .qrcode-setion {
      position: absolute;
      right: -10px;
      top: 15px;
      display: flex;
      text-align: center;
      em {
        i {
          width: 41px;
          height: 32px;
          img {
            width: 41px;
            height: 32px;
          }
        }
      }
      .qrcode_em1 {
        margin-right: 15px;
      }
      .qrcode_em2 {
        margin-right: 15px;
      }
      .qrcode_em3 {
        i {
          width: 90px;
          height: 90px;
          img {
            width: 90px;
            height: 90px;
          }
        }
      }
      em {
        .wxifont {
          font-size: 25px;
          color: rgb(13, 87, 13);
        }
        .sjifont {
          font-size: 25px;
          color: rgba(64, 97, 148, 0.822);
        }
        .qrcodefontsize {
          font-size: 13px;
          color: #999;
        }
      }
    }
    .gome_uls {
      display: flex;
      margin-top: 20px;
      li {
        margin-right: 7px;
        color: #ccc;
        font-size: 13px;
      }
    }
    .foot_p {
      color: #999;
      font-size: 13px;
      padding-bottom: 7px;
      border-bottom: 1px solid #e6e6e6;
      position: relative;

      p {
        margin-top: 7px;
        .hui_img {
          width: 23px;
          height: 20px;
          position: absolute;
          bottom: 3px;
          left: 24%;
        }
        .kk {
          margin-right: 17px;
        }
      }
    }
    .gome-foot-credit {
      margin-top: 5px;
      padding: 10px 0 25px;
      overflow: hidden;
      display: flex;
      .credit_end {
        display: flex;
        font-size: 13px;
        .creditifont {
          font-size: 30px;
          color: red;
          margin-right: 7px;
        }
        span {
          padding: 5px 30px 0 5px;
          width: 60px;
          display: block;
        }
        .end_img {
          width: 35px;
          height: 35px;

          img {
            width: 35px;
            height: 35px;
          }
        }
      }
    }
  }
}
</style>