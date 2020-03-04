<!--  -->
<template>
          <div class="wrapbottom">
        <div class="wrap-box">
          <div class="wrap-left">
            <div class="my_list">
                <dl class="list-dl">
                  <dt class="list-img">
                    <img src="https://gfs12.gomein.net.cn/T1.o_CBXdT1RCvBVdK-c278_208.jpg" alt=""/>
                  </dt>
                  <dd>
                    <p class="overHiden">好好的一张照片asdffaadfasdfdsfadsfasdfas</p>
                    <p class="list-mt">
                      <span class="mt_child">qixumami</span>
                      <span>1038liulan</span>
                    </p>
                  </dd>
                </dl>
              </div>
              <div class="my_list">
                <dl class="list-dl">
                  <dt class="list-img">
                    <img src="https://gfs12.gomein.net.cn/T1.o_CBXdT1RCvBVdK-c278_208.jpg" alt=""/>
                  </dt>
                  <dd>
                    <p class="overHiden">好好的一张照片asdffaadfasdfdsfadsfasdfas</p>
                    <p class="list-mt">
                      <span class="mt_child">qixumami</span>
                      <span>1038liulan</span>
                    </p>
                  </dd>
                </dl>
              </div>
              <div class="my_list">
                <dl class="list-dl">
                  <dt class="list-img">
                    <img src="https://gfs12.gomein.net.cn/T1.o_CBXdT1RCvBVdK-c278_208.jpg" alt=""/>
                  </dt>
                  <dd>
                    <p class="overHiden">好好的一张照片asdffaadfasdfdsfadsfasdfas</p>
                    <p class="list-mt">
                      <span class="mt_child">qixumami</span>
                      <span>1038liulan</span>
                    </p>
                  </dd>
                </dl>
              </div>
              <div class="my_list">
                <dl class="list-dl">
                  <dt class="list-img">
                    <img src="https://gfs12.gomein.net.cn/T1.o_CBXdT1RCvBVdK-c278_208.jpg" alt=""/>
                  </dt>
                  <dd>
                    <p class="overHiden">好好的一张照片asdffaadfasdfdsfadsfasdfas</p>
                    <p class="list-mt">
                      <span class="mt_child">qixumami</span>
                      <span>1038liulan</span>
                    </p>
                  </dd>
                </dl>
              </div>
          </div>
          <div class="wrap-right">
            <p class="rights_title">热门创作</p>
            <div class="rights_list">
                <dl class="rights-dl">
                  <dt class="rights-img">
                    <img src="https://gfs17.gomein.net.cn/T1pub_ByVv1RCvBVdK_c100_56.jpg" alt=""/>
                  </dt>
                  <dd>
                   <p class="dd_title1">寒冷冬日，精选好物</p>
                    <p class="rights-mt">
                      <i class="el-icon-view"></i>
                      <span class="p_last">7271</span>
                    </p>
                  </dd>
                </dl>
              </div>
              <div class="rights_list">
                <dl class="rights-dl">
                  <dt class="rights-img">
                    <img src="https://gfs17.gomein.net.cn/T1pub_ByVv1RCvBVdK_c100_56.jpg" alt=""/>
                  </dt>
                  <dd>
                   <p class="dd_title1">寒冷冬日，精选好物</p>
                    <p class="rights-mt">
                      <i class="el-icon-view"></i>
                      <span class="p_last">7271</span>
                    </p>
                  </dd>
                </dl>
              </div>
              <div class="rights_list">
                <dl class="rights-dl">
                  <dt class="rights-img">
                    <img src="https://gfs17.gomein.net.cn/T1pub_ByVv1RCvBVdK_c100_56.jpg" alt=""/>
                  </dt>
                  <dd>
                   <p class="dd_title1">寒冷冬日，精选好物</p>
                    <p class="rights-mt">
                      <i class="el-icon-view"></i>
                      <span class="p_last">7271</span>
                    </p>
                  </dd>
                </dl>
              </div>
              <div class="rights_list">
                <dl class="rights-dl">
                  <dt class="rights-img">
                    <img src="https://gfs17.gomein.net.cn/T1pub_ByVv1RCvBVdK_c100_56.jpg" alt=""/>
                  </dt>
                  <dd>
                   <p class="dd_title1">寒冷冬日，精选好物</p>
                    <p class="rights-mt">
                      <i class="el-icon-view"></i>
                      <span class="p_last">7271</span>
                    </p>
                  </dd>
                </dl>
              </div>
          </div>
        </div>
        </div>
</template>

<script>
export default {
  name:"popular",
  data () {
    return {

    };
  }
  

}

</script>
<style lang='scss' scoped>
.wrapbottom{
   background: #f6f5ee;
 }
.wrap-box{
  width: 1200px;
  display: flex;
  margin: 10px auto;
 .wrap-left{
  width:860px;
  height: 30%;
  background:white;
  display: flex;
  flex-wrap: wrap;
 .my_list{
    width: 270px;
    height: 327px;
    margin: 3px 3px;
   .list-dl{
    width: 100%;
    height: 100px;
    .list-img{
      width: 270px;
      height: 208px;
      margin-left: 10px;
      img{
          width: 100%;
          height: 100%;
              }
                    }
    dd{
      flex:1;
      margin-top: 7px;
      margin-left: 12px;
      .overHiden{
          width: 268px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
              }
      .list-mt{
          width: 100px;
          display: flex;
          color: #ccc;
          .mt_child{
            margin-right: 15px;
                }

                }
                        
          }
        }
      }
    }
  .wrap-right{
    width: 290px;
    margin-left: 49px;
    background: white;
    .rights_title{
      padding: 0px 14px;
        }
    .rights_list{
      margin-left:14px;
      .rights-dl{
        width: 100%;
        height: 100px;
        display: flex;
        .rights-img{
          width: 80px;
          height: 75px;
          margin-right: 10px;
          img{
            width: 100%;
            height: 100%;
                }
            }
          dd{
            margin: 0;
            flex:1;
            .dd_title1{
              margin-top: 0;
                  }
            .rights-mt{
              color: #ccc;
              margin-top:25px;
              .p_last{
              margin-left:12px;
                        }
                      
                        }
                    }
                }
            }
      }
     
    }
</style>