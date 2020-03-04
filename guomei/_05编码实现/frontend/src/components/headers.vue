<!--  -->
<template>
    <div class="gome-top-nav">
        <div class="gome-top-nav-center">
          <ul class="gome-top-nav-left">
            <li><i class="el-icon-s-home iconhome"></i> 国美首页</li>
            <li>|</li>
            <li>
              <el-dropdown>
              <span class="el-dropdown-link">
                国美会员<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div class="vip">
                  <dl class="vip_div">
                  <dt><img :src="require('../assets/img/header/vip_user.png')" alt=""></dt>
                  <dd>欢迎来到国美,<span class="plogin">请登录</span></dd>
                </dl>
                <p class="vip_text">
                  <span>我的特权</span>
                  <span class="vipclue">会员俱乐部</span>
                </p>
                <ul class="vip_ul">
                  <li>
                    <dl>
                      <dt><img :src="require('../assets/img/header/vip1.png')" alt=""></dt>
                      <dd>美逗抽奖</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt><img :src="require('../assets/img/header/vip2.png')" alt=""></dt>
                      <dd>退货保障</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt><img :src="require('../assets/img/header/vip3.png')" alt=""></dt>
                      <dd>价格保护</dd>
                    </dl>
                  </li>
                </ul>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
            </li>
            <li>登录 <span class="present"> 注册有礼<i class="el-icon-present"></i></span></li>
          </ul>
          <ul class="gome-top-nav-right">
            <li>我的订单</li>
            <li>
              <el-dropdown>
              <span class="el-dropdown-link">
                我的国美<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div class="my_guomei">
                  <p class="my_guomei_tit">我的国美，<span class="plogin">请登录</span></p>
                  <ul class="my_guomei_ul">
                    <li>待处理订单</li>
                    <li>我的收藏</li>
                    <li>个人资料</li>
                    <li>我的每店</li>
                  </ul>
                  <p class="my_youhui">我的优惠券</p>
                  <p class="zuji_tit">足迹</p>
                  <ul class="my_zuji">
                    <li><img :src="require('../assets/img/header/my_guomei.png')" alt=""></li>
                    <li><img :src="require('../assets/img/header/my_guomei.png')" alt=""></li>
                    <li><img :src="require('../assets/img/header/my_guomei.png')" alt=""></li>
                    <li><img :src="require('../assets/img/header/my_guomei.png')" alt=""></li>
                  </ul>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
            </li>
            <li>|</li>
            <li>
              <el-dropdown>
              <span class="el-dropdown-link">
                企业采购<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div class="img_drop">
                  <img src="https://gfs11.gomein.net.cn/T1uZdyBXCT1RCvBVdK.jpg" alt="">
                </div>
              </el-dropdown-menu>
            </el-dropdown>
            </li>
            <li><i class="el-icon-phone-outline righticont"></i> 
            <el-dropdown>
              <span class="el-dropdown-link">
                服务中心<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div class="serveice">
                  <div class="service_wrap">
                  <p class="user_main">用户服务</p>
                  <ul class="service_ul">
                    <li>售后服务</li>
                    <li>帮助服务</li>
                    <li>新手指南</li>
                    <li>客服服务</li>
                    <li>用户注册</li>
                  </ul>
                   <p class="user_main">用户服务</p>
                  <ul class="service_ul">
                    <li>售后服务</li>
                    <li>帮助服务</li>
                    <li>新手指南</li>
                    <li>客服服务</li>
                    <li>用户注册</li>
                  </ul>
                  <button class="line_servie">在线服务</button>
                  </div>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
            </li>
            <li>
              <el-dropdown>
              <span class="el-dropdown-link">
                网站导航<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div class="wang_box">
                <div class="wangz">
                  <p class="user_main">用户服务</p>
                  <ul class="service_ul">
                    <li>售后服务</li>
                    <li>帮助服务</li>
                    <li>新手指南</li>
                    <li>客服服务</li>
                    <li>用户注册</li>
                  </ul>
                </div>
                <div class="wangz">
                  <p class="user_main">用户服务</p>
                  <ul class="service_ul">
                    <li>售后服务</li>
                    <li>帮助服务</li>
                    <li>新手指南</li>
                    <li>客服服务</li>
                    <li>用户注册</li>
                  </ul>
                </div>
                <div class="wangz">
                  <p class="user_main">用户服务</p>
                  <ul class="service_ul">
                    <li>售后服务</li>
                    <li>帮助服务</li>
                    <li>新手指南</li>
                    <li>客服服务</li>
                    <li>用户注册</li>
                  </ul>
                </div>
                <div class="wangz">
                  <p class="user_main">用户服务</p>
                  <ul class="service_ul">
                    <li>售后服务</li>
                    <li>帮助服务</li>
                    <li>新手指南</li>
                    <li>客服服务</li>
                    <li>用户注册</li>
                  </ul>
                </div>
                <div class="wangz">
                  <p class="user_main">用户服务</p>
                  <ul class="service_ul">
                    <li>售后服务</li>
                    <li>帮助服务</li>
                    <li>新手指南</li>
                    <li>客服服务</li>
                    <li>用户注册</li>
                  </ul>
                </div>
                </div>
                </el-dropdown-menu>
            </el-dropdown>
            </li>
            <li>|</li>
            <li><i class="el-icon-mobile-phone righticont"></i> 
            <el-dropdown>
              <span class="el-dropdown-link">
               手机国美<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <dl class="phone_dl">
                  <dt><img src="https://gfs11.gomein.net.cn/T1uZdyBXCT1RCvBVdK.jpg" alt=""></dt>
                  <dd>
                    <a href="https://shouji.gome.com.cn/?intcmp=group-public01005">
                      <p>下载客户端</p>
                      <p class="phone_red">享专属优惠</p>
                    </a>

                  </dd>
                </dl>
              </el-dropdown-menu>
            </el-dropdown>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
export default {
    name:"headers"
}

</script>
<style lang='scss' scoped>
// 头部导航栏
 .el-dropdown-link {
    cursor: pointer;
    color: #888;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  // 国美会员
  .vip{
      font-size: 12px;
      width: 240px;
      color: #888;
      .vip_div{
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
    dd{
      line-height: 65px;
      .plogin{
        color: rgb(102, 102, 245);
      }
    }
  }
  .vip_text{
    display: flex;
    justify-content: space-around;
    padding-top: 10px;

  }
  .vip_ul{
    display: flex;
    color: #888;
    margin-top: 5px;
    justify-content: space-around;
    dl{
      text-align: center;
    }
  }
  }

  //我的国美
  .my_guomei{
     width: 240px;
     font-size: 12px;
     margin: 0 auto;
     color: #888;
     .my_guomei_tit{
       .plogin{
        color: rgb(102, 102, 245);
      }
     }
     .my_guomei_ul{
       display: flex;
       flex-wrap: wrap;
       width: 240px;
       margin-top:9px;
       li{
         width: 100px;
         margin-right: 20px;
       }
     }
     .my_youhui{
       margin-top: 10px;
        border-top: 1px solid rgb(223, 222, 222);
     }
     .zuji_tit{
       margin-top: 10px;
     }
     .my_zuji{
       display: flex;
       justify-content: space-around;
     }
  }
//服务中心
.serveice{
  width: 100%;
  .service_wrap{
    font-size: 12px;
    color:#888;
    width: 200px;
    margin: 0 auto;
    .user_main{
      padding: 9px;
    }
    .service_ul{
      display: flex;
      flex-wrap: wrap;
      padding-left: 9px;
      li{
      width: 50px;
      margin-right: 20px;
      }
      }
    .line_servie{
      margin-top: 9px;
      width: 130px;
      height: 20px;
      line-height: 20px;
      color: #fff;
      background: #dd00a7;
      border: none;
      margin-left: 9px;
      }
  }
}

//网站导航
.wang_box{
  font-size: 12px;
  color: #888;
  display: flex;
  justify-content: space-around;
  border-right: solid 1px #ccc;
   .user_main{
      padding: 9px;
    }
    .service_ul{
      display: flex;
      flex-wrap: wrap;
      padding-left: 9px;
      li{
      width: 50px;
      margin-right: 20px;
      }
      }
}

//手机国美
 .phone_dl{
    dd{
      a{
      font-size: 13px;
      .phone_red{
        color: red;
      }
    text-align: center;
      }
    
    }
  }
.gome-top-nav{
  background: #f8f8f8;
  color: #888;
  font-size: 13px;
  .gome-top-nav-center{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
     height: 31px;
     line-height: 31px;
     .gome-top-nav-left{
       width: 300px;
       display: flex;
       justify-content: space-around;
       margin-top: 0;
       padding-left: 0;
       li{
         .iconhome{
           color: #dd00a7;
         }
         .present{
           color: red;
         }  
       }
     }
     .gome-top-nav-right{
       width: 500px;
       display: flex;
       margin-top: 0;
       justify-content: space-around;
       li{
         margin-right: 5px;
         .righticont{
            color:#dd00a7;
         }
        
        
       }
     }
  }
}
</style>