<template>
  <div class="electric_floor">
    <div class="firstfloor_left">
      <div class="firstfloor_tit">1F 3C综合</div>
      <div class="firstfloor_left_img">
        <img src="https://gfs7.gomein.net.cn/T1AlVyB5WT1RCvBVdK" alt />
      </div>
    </div>
    <div class="firstfloor_goods">
      <div class="goods_tab">
        <li v-for="(item,index) in 4" :key="index">精选热卖</li>
      </div>
      <div class="goods_show">
          <div class="goods_info">
              <div class="info_item" v-for="(item,index) in 8" :key="index">
                  <img src="https://gfs17.gomein.net.cn/T1oEWyB5Cv1RCvBVdK" alt="">
                  <div class="info_title">Redmi 8 3D曲面机身</div>
                  <div class="info_price">￥799.00</div>
              </div>
          </div>
          <div class="goods_rank">
              <div class="rank_tab">
                  <span>畅销排行</span>
                  <span>新品排行</span>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("./index.css");
</style>