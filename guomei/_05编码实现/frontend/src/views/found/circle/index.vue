<!--  -->
<template>
<div class="circleback">
    <div class="circlewrap">
        <!-- 顶部 -->
    <div class="top_list">
    <div class="banner_left">
        <!-- 轮播图 -->
     <el-carousel height="400px">
        <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
    </div>
    <div class="hot_content">
    <p class="hot_title">热门内容</p>
    <el-tabs class="el_tabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="电器" name="first">
        <div class="el_tabs_box">
            <dl class="el_tab_dl">
                <dt class="dt_img"><img src="https://gfs13.gomein.net.cn/T1i4x4ByAg1RCvBVdK.jpg" alt=""></dt>
                <dd>上课办公两不误</dd>
            </dl>
            <dl class="el_tab_dl">
                <dt class="dt_img"><img src="https://gfs13.gomein.net.cn/T1i4x4ByAg1RCvBVdK.jpg" alt=""></dt>
                <dd>上课办公两不误</dd>
            </dl>
            <dl class="el_tab_dl">
                <dt class="dt_img"><img src="https://gfs13.gomein.net.cn/T1i4x4ByAg1RCvBVdK.jpg" alt=""></dt>
                <dd>上课办公两不误</dd>
            </dl>
        </div>
        <div class="tab_bottom">
            <ul>
                <li>吸猫后不得不说的事<i></i></li>
                <li>别家的厨房竟然长这样<i></i></li>
                <li>如何彻底实现家务自由<i></i></li>
                <li>关于养生交过哪些智商税<i></i></li>
            </ul>
        </div>  
     </el-tab-pane>
        <el-tab-pane label="数码" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="家居" name="third">角色管理</el-tab-pane>
    </el-tabs>
    </div>
    </div>  
    <!-- 热门话题 -->
    <div class="topic_content">
       <h2 class="hot_topic_title">热门话题</h2>
        <div class="topic_list">
               <dl class="topic_dl">
                 <dt class="topic_img">
                   <img src="https://gfs17.gomein.net.cn/T1pub_ByVv1RCvBVdK_c100_56.jpg" alt=""/>
                 </dt>
                 <dd>
                   <p class="topic_mt">歌手</p>
                   <ul class="topic_ul">
                       <li><i class="el-icon-view"></i> 1</li>
                       <li><i class="el-icon-edit-outline"></i> 2</li>
                       <li><i class="el-icon-medal-1"></i> 3</li>
                   </ul>
                 </dd>
               </dl>
                <dl class="topic_dl">
                 <dt class="topic_img">
                   <img src="https://gfs17.gomein.net.cn/T1pub_ByVv1RCvBVdK_c100_56.jpg" alt=""/>
                 </dt>
                 <dd>
                   <p class="topic_mt">歌手</p>
                   <ul class="topic_ul">
                       <li>1</li>
                       <li>2</li>
                       <li>3</li>
                   </ul>
                 </dd>
               </dl>
                <dl class="topic_dl">
                 <dt class="topic_img">
                   <img src="https://gfs17.gomein.net.cn/T1pub_ByVv1RCvBVdK_c100_56.jpg" alt=""/>
                 </dt>
                 <dd>
                   <p class="topic_mt">歌手</p>
                   <ul class="topic_ul">
                       <li>1</li>
                       <li>2</li>
                       <li>3</li>
                   </ul>
                 </dd>
               </dl>
                <dl class="topic_dl">
                 <dt class="topic_img">
                   <img src="https://gfs17.gomein.net.cn/T1pub_ByVv1RCvBVdK_c100_56.jpg" alt=""/>
                 </dt>
                 <dd>
                   <p class="topic_mt">歌手</p>
                   <ul class="topic_ul">
                       <li>1</li>
                       <li>2</li>
                       <li>3</li>
                   </ul>
                 </dd>
               </dl>
                <dl class="topic_dl">
                 <dt class="topic_img">
                   <img src="https://gfs17.gomein.net.cn/T1pub_ByVv1RCvBVdK_c100_56.jpg" alt=""/>
                 </dt>
                 <dd>
                   <p class="topic_mt">歌手</p>
                   <ul class="topic_ul">
                       <li>1</li>
                       <li>2</li>
                       <li>3</li>
                   </ul>
                 </dd>
               </dl>
                <dl class="topic_dl">
                 <dt class="topic_img">
                   <img src="https://gfs17.gomein.net.cn/T1pub_ByVv1RCvBVdK_c100_56.jpg" alt=""/>
                 </dt>
                 <dd>
                   <p class="topic_mt">歌手</p>
                   <ul class="topic_ul">
                       <li>1</li>
                       <li>2</li>
                       <li>3</li>
                   </ul>
                 </dd>
               </dl>
        </div> 
    </div>

    <!-- 品质生活 -->
    <div class="daren_recommend">
      <h2 class="hot_topic_title">品质生活</h2>
        <ul class="recommend_ul">
          <li class="recommend_li">
            <div class="li_img">
              <img src="https://gfs10.gomein.net.cn/T1jFh4BmKv1RCvBVdK.jpg" alt="">
            </div>
            <div class="recommend_box">
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
        </div>
        <div class="recommend_text">
          <p class="text_over">如何提升在家防疫的幸福感？</p>
          <p class="text_hui">说好的在家防疫并不是一句空话，了解对抗疫情战的武器才能取得最后的胜利。</p>
          <ul class="recommend_ul">
            <li><i class="el-icon-view"></i> 1</li>
            <li><i class="el-icon-edit-outline"></i> 2</li>
            <li><i class="el-icon-medal-1"></i> 3</li>
          </ul>
        </div>
          </li>
          <li class="recommend_li">
            <div class="li_img">
              <img src="https://gfs10.gomein.net.cn/T1jFh4BmKv1RCvBVdK.jpg" alt="">
            </div>
            <div class="recommend_box">
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
        </div>
        <div class="recommend_text">
          <p class="text_over">如何提升在家防疫的幸福感？</p>
          <p class="text_hui">说好的在家防疫并不是一句空话，了解对抗疫情战的武器才能取得最后的胜利。</p>
          <ul class="recommend_ul">
            <li><i class="el-icon-view"></i> 1</li>
            <li><i class="el-icon-edit-outline"></i> 2</li>
            <li><i class="el-icon-medal-1"></i> 3</li>
          </ul>
        </div>
          </li>
          <li class="recommend_li">
            <div class="li_img">
              <img src="https://gfs10.gomein.net.cn/T1jFh4BmKv1RCvBVdK.jpg" alt="">
            </div>
            <div class="recommend_box">
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
        </div>
        <div class="recommend_text">
          <p class="text_over">如何提升在家防疫的幸福感？</p>
          <p class="text_hui">说好的在家防疫并不是一句空话，了解对抗疫情战的武器才能取得最后的胜利。</p>
          <ul class="recommend_ul">
            <li><i class="el-icon-view"></i> 1</li>
            <li><i class="el-icon-edit-outline"></i> 2</li>
            <li><i class="el-icon-medal-1"></i> 3</li>
          </ul>
        </div>
          </li>
          <li class="recommend_li">
            <div class="li_img">
              <img src="https://gfs10.gomein.net.cn/T1jFh4BmKv1RCvBVdK.jpg" alt="">
            </div>
            <div class="recommend_box">
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
            <dl class="recommend_dl">
                <dt class="dt_img"><img src="https://gfs17.gomein.net.cn/T1K5WyBvET1RCvBVdK_60_60.jpg" alt=""></dt>
                <dd>￥2999.00</dd>
            </dl>
        </div>
        <div class="recommend_text">
          <p class="text_over">如何提升在家防疫的幸福感？</p>
          <p class="text_hui">说好的在家防疫并不是一句空话，了解对抗疫情战的武器才能取得最后的胜利。</p>
          <ul class="recommend_ul">
            <li><i class="el-icon-view"></i> 1</li>
            <li><i class="el-icon-edit-outline"></i> 2</li>
            <li><i class="el-icon-medal-1"></i> 3</li>
          </ul>
        </div>
          </li>
         </ul>
    
    </div>

    <!-- 达人精选 -->
    <div class="video_circle">
      <h2 class="video_title">达人精选</h2>
      <div class="tra_circle_box">
        <div class="tra_cir_tags">
          <div class="tags_box">
            <ul class="tags_box_ul">
              <li><img src="https://gfs13.gomein.net.cn/T1GuZXB_DT1RCvBVdK.jpg" alt=""></li>
              <li><img src="https://gfs13.gomein.net.cn/T1GuZXB_DT1RCvBVdK.jpg" alt=""></li>
              <li><img src="https://gfs13.gomein.net.cn/T1GuZXB_DT1RCvBVdK.jpg" alt=""></li>
              <li><img src="https://gfs13.gomein.net.cn/T1GuZXB_DT1RCvBVdK.jpg" alt=""></li>
            </ul>
          </div>
          <div class="video_circle_right">
            <dl>
              <dt><img src="https://gfs10.gomein.net.cn/T1yULQByEg1RCvBVdK_c160_90.jpg" alt=""></dt>
              <dd>笔记本电脑要怎么选</dd>
            </dl>
            <dl>
              <dt><img src="https://gfs10.gomein.net.cn/T1yULQByEg1RCvBVdK_c160_90.jpg" alt=""></dt>
              <dd>笔记本电脑要怎么选</dd>
            </dl>
            <dl>
              <dt><img src="https://gfs10.gomein.net.cn/T1yULQByEg1RCvBVdK_c160_90.jpg" alt=""></dt>
              <dd>笔记本电脑要怎么选</dd>
            </dl>
            <dl>
              <dt><img src="https://gfs10.gomein.net.cn/T1yULQByEg1RCvBVdK_c160_90.jpg" alt=""></dt>
              <dd>笔记本电脑要怎么选</dd>
            </dl>
            <dl>
              <dt><img src="https://gfs10.gomein.net.cn/T1yULQByEg1RCvBVdK_c160_90.jpg" alt=""></dt>
              <dd>笔记本电脑要怎么选</dd>
            </dl>
            <dl>
              <dt><img src="https://gfs10.gomein.net.cn/T1yULQByEg1RCvBVdK_c160_90.jpg" alt=""></dt>
              <dd>笔记本电脑要怎么选</dd>
            </dl>
            <dl>
              <dt><img src="https://gfs10.gomein.net.cn/T1yULQByEg1RCvBVdK_c160_90.jpg" alt=""></dt>
              <dd>笔记本电脑要怎么选</dd>
            </dl>
            <dl>
              <dt><img src="https://gfs10.gomein.net.cn/T1yULQByEg1RCvBVdK_c160_90.jpg" alt=""></dt>
              <dd>笔记本电脑要怎么选</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <!-- 推荐圈子 -->
    <div class="recommend_circle">
      <h2 class="recomment_title">推荐圈子</h2>
      <ul class="circle_item">
        <li>
          <div class="cilecle_img">
            <img src="https://gfs11.gomein.net.cn/T134KjBTd_1RCvBVdK.jpg" alt="">
          </div>
          <div class="circle_bottom">
            <p class="circle_p1"><span class="p1_span">智享家</span><span class="p1_span2">成员 <i class="circle_red">5062</i> 话题 <i class="circle_red">1596</i></span></p>
            <p class="circle_p2">[话题]万万没想到!家里这些电器竟然这</p>
            <p class="circle_p3">[话题]夏季出行标配，有了它随时随地喝</p>
            <p class="circle_p4">+ 加入圈子</p>
          </div>
        </li>
         <li>
          <div class="cilecle_img">
            <img src="https://gfs11.gomein.net.cn/T134KjBTd_1RCvBVdK.jpg" alt="">
          </div>
          <div class="circle_bottom">
            <p class="circle_p1"><span class="p1_span">智享家</span><span class="p1_span2">成员 <i class="circle_red">5062</i> 话题 <i class="circle_red">1596</i></span></p>
            <p class="circle_p2">[话题]万万没想到!家里这些电器竟然这</p>
            <p class="circle_p3">[话题]夏季出行标配，有了它随时随地喝</p>
            <p class="circle_p4">+ 加入圈子</p>
          </div>
        </li>
         <li>
          <div class="cilecle_img">
            <img src="https://gfs11.gomein.net.cn/T134KjBTd_1RCvBVdK.jpg" alt="">
          </div>
          <div class="circle_bottom">
            <p class="circle_p1"><span class="p1_span">智享家</span><span class="p1_span2">成员 <i class="circle_red">5062</i> 话题 <i class="circle_red">1596</i></span></p>
            <p class="circle_p2">[话题]万万没想到!家里这些电器竟然这</p>
            <p class="circle_p3">[话题]夏季出行标配，有了它随时随地喝</p>
            <p class="circle_p4">+ 加入圈子</p>
          </div>
        </li>
         <li>
          <div class="cilecle_img">
            <img src="https://gfs11.gomein.net.cn/T134KjBTd_1RCvBVdK.jpg" alt="">
          </div>
          <div class="circle_bottom">
            <p class="circle_p1"><span class="p1_span">智享家</span><span class="p1_span2">成员 <i class="circle_red">5062</i> 话题 <i class="circle_red">1596</i></span></p>
            <p class="circle_p2">[话题]万万没想到!家里这些电器竟然这</p>
            <p class="circle_p3">[话题]夏季出行标配，有了它随时随地喝</p>
            <p class="circle_p4">+ 加入圈子</p>
          </div>
        </li>
      </ul>
      
    </div>

    <!-- 逛逛商品 -->
    <div class="window_shopping">
      <div class="tags_tab">
        <div class="tags_tab_container">
          <a href="#">美食</a>
          <a href="#">家电</a>
          <a href="#">家居</a>
          <a href="#">服饰</a>
          <a href="#">潮3C</a>
        </div>
      </div>
      <div class="money_tags_box">
        <div class="money_tags_box_item">
          <div class="item_banner">
            <div class="carouse_banner">
               <el-carousel height="390px">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="banner_text">
              <span>
                味滋源混合坚果30袋干果礼盒休闲零食大礼包
              </span>
              <span class="text_span2">
                ￥68.00
              </span>
            </div>
          </div>
        </div>
        <ul class="item_small_four">
          <li>
            <dl>
              <dt><img src="https://gfs17.gomein.net.cn/T1uYCQBCdv1RCvBVdK_160_160.jpg" alt=""></dt>
              <dd>
                <p class="item_text">波力海苔夹心脆实惠装罐装</p>
                <p class="item_red">￥32.79</p>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="https://gfs17.gomein.net.cn/T1uYCQBCdv1RCvBVdK_160_160.jpg" alt=""></dt>
              <dd>
               <p class="item_text">波力海苔夹心脆实惠装罐装</p>
                <p class="item_red">￥32.79</p>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="https://gfs17.gomein.net.cn/T1uYCQBCdv1RCvBVdK_160_160.jpg" alt=""></dt>
              <dd>
                <p class="item_text">波力海苔夹心脆实惠装罐装</p>
                <p class="item_red">￥32.79</p>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="https://gfs17.gomein.net.cn/T1uYCQBCdv1RCvBVdK_160_160.jpg" alt=""></dt>
              <dd>
               <p class="item_text">波力海苔夹心脆实惠装罐装</p>
               <p class="item_red">￥32.79</p>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>

    </div>
</div>
</template>

<script>
import {getFindData} from '../../../api/found'
export default {
  name:"circles",
  data () {
    return {
        activeName: 'first',//tab默认第一个
    };
  },
  created(){
    this.popularDate()
  },
  methods:{
    async popularDate(){
      let res=await getFindData();
      console.log(res.data,"1234")
      this.carouselList=res.data.carousel
    },
     handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}

</script>
<style lang='scss' scoped>
li{
    list-style: none;
}
.circleback{
    width: 100%;
    background: #f8f8f8;
    .circlewrap{
        width: 1200px;
        margin: 10px auto;
    }
}
.top_list{
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
.banner_left{
    width: 700px;
    height: 400px;
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
.hot_content{
    width: 440px;
    background: white;
  .hot_title{
    padding: 10px 14px;
         }
  .el_tabs{
    padding: 0px 14px;
    .el_tabs_box{
    display: flex;
    .el_tab_dl{
    width: 130px;
    margin-right: 10px;
    .dt_img{
        width: 130px;
        height: 130px;
    img{
        width: 100%;
        height: 100%;
        }
    }
    dd{
        padding: 20px 0;
        }
             }
               }
    .tab_bottom{
    border-top: 1px dashed #ccc;
    width: 440px; 
    margin-top: 10px;   
    ul{
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
    li{
        width: 155px;
        padding:10px 50px 0 0;
        font-size: 14px;
        }
      }     
        
    }
          
   }
 }
       
}
//热门话题
.topic_content{
  .hot_topic_title{
   margin:10px 0;
  }
}
.topic_list{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
 .topic_dl{
    width: 230px;
    height: 236px;
    background: white;
    margin:9px 10px 0 0;
  .topic_img{
     width: 230px;
     height: 150px;
     margin-right: 10px;
    img{
        width: 100%;
        height: 100%;
    }
        }
    dd{  
    flex:1;
    padding: 18px 22px;
    .topic_mt{
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
    }
    .list-mt{
        margin: 10px;
    }
    .topic_ul{
     width: 230px;
     display: flex;
     padding-top: 10px;
    li{
      margin-right: 8px;
      color: #ccc;
    }
    }
    }
    }
           }
//品质生活
.hot_topic_title{
   margin:10px 0;
  }
  .recommend_ul{
    width: 100%;
    display: flex;
    .recommend_li{
      width: 290px;
      background: white;
      margin-right: 12px;
    .li_img{
      width: 290px;
      height: 190px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .recommend_box{
      margin: 7px 7px;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px dashed #ccc;
      .recommend_dl{
      width:60px;
      margin-right: 5px;
      padding-bottom: 10px;
      .dt_img{
        width: 60px;
        height: 60px;
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
        }
      }
      dd{
        color: red;
        font-size: 13px;
        text-align: center;
    
      }
      }
    }
    .recommend_text{
       margin: 7px 7px;
      .text_hui{
        font-size: 13px;
        color: #ccc;
      }
      .text_over{
        width: 270px;
        font-size: 14px;
        overflow: hidden;
        white-space:nowrap ;
        text-overflow: ellipsis;
        padding: 10px 0;
      }
      .recommend_ul{
        display: flex;
        padding-top: 10px;
        li{
        margin-right: 8px;
        color: #ccc;
        }
      }
    }
    }
  }
// 达人精选
.video_circle{
  width: 100%;
  .video_title{
     margin:10px 0;
  }
}
.tra_circle_box{
  width: 100%;
  background: white;
  .tra_cir_tags{
    padding: 15px 15px;
    display: flex;
    .tags_box{
      width: 800px;
      margin-right:26px;
      .tags_box_ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li{
          width: 390px;
          height: 274px;
          padding: 0 10px 30px 0;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .video_circle_right{
      width: 340px;
      display: flex;
      flex-wrap: wrap;
      dl{
        width: 160px;
        padding: 0 10px 5px 0;

        dt{
          width: 16px;
          height: 100px;
        }
        dd{
         padding-top: 5px;
          font-size: 13px;
        }
      }
    }
  }
}
.recommend_circle{
  .recomment_title{
      margin:10px 0;
  }
}
.circle_item{
  width: 100%;
  display: flex;
  li{
    height: 360px;
    background: white;
    margin-right: 10px;
    .cilecle_img{
      width: 290px;
      height: 190px;
    }
    .circle_bottom{
      width: 290px;

      .circle_p1{
        padding: 12px 5px;
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed #ccc;
        .p1_span{
          font-weight: bold;
        }
        .p1_span2{
          color:#ccc;
          .circle_red{
            color: red !important;
          }
        }
      }
      .circle_p2,.circle_p3{
         padding: 12px 8px;
         font-size: 13px;
         overflow: hidden;
         text-overflow: ellipsis;
        white-space: nowrap;
      }
      .circle_p4{
      
       width: 98px;
       height: 24px;
       line-height:24px;
       text-align: center;
       border: 1px solid #ff5757;
       color:#ff5757;
       border-radius: 3px;
       margin: 10px 0 18px 85px;
       cursor: pointer;
      }
    }
  }
}

.window_shopping{
  width: 100%;
  height: 479px;
  background: white;
  display: flex;
  margin-top: 20px;
  .tags_tab{
  width: 180px;
  margin-right: 20px;
  padding: 20px 0 20px 20px;
  background:linear-gradient( #c7cff6,#8a9dfa);
  margin-top: 20px;
  .tags_tab_container{
    margin-top: 50px;
    margin-left: -8px;
    a{
    font-size: 14px;
    display: inline-block;
    min-width: 60px;
    width: 138px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    margin: 10px 0 0 15px;
    color: #9da9e5;
    background-color: #fff;
    border: 1px solid #c7cff6;
    }
    a:hover{
    background-color: #91a2f3;
    color: #fff;
    }
  }
  }
  .money_tags_box{
    width: 960px;
    display: flex;
    padding-top: 20px;
    .money_tags_box_item{
    overflow: hidden;
    height: 458px;
    display: block;
    .item_banner{
    width: 600px;
    overflow: hidden;
    position: relative;
    margin-right: 20px;
    .carouse_banner{
      width: 600px;
      height: 390px;
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    }
    .banner_text{
      border: 1px solid #ededed;
      border-top: 0;
      padding: 8px 20px;
      width: 558px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      .text_span2{
        color: red;
      }
    }
    }
    }
    .item_small_four{
      width: 340px;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      li{
      width: 154px;
      margin: 0 16px 18px 0;
      dl{
        dt{
          width:  154px;
          height: 160px;

          img{
            width: 100%;
            height: 100%;
          }
        }
        dd{
          display: inline-block;
          margin-top: 5px;
          .item_text{
            width: 160px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .item_red{
            color: #e3101e;
          }
        }
      }
      }
    }
  }
  
}

</style>