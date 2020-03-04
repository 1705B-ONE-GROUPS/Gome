<template>
  <div class="type_list">
    <div class="type_list_title">车载电器</div>
    <div class="type_list_content">
      <div class="content_left">
        <ul class="left_slide">
          <li v-for="(item,index) in 5" :key="index" class="">行车记录仪</li>
        </ul>
      </div>
      <div class="content_content">
        <img src="https://gfs11.gomein.net.cn/T1WxLjBgLT1RCvBVdK.jpg" alt />
      </div>
      <div class="content_right">
        <div class="right_item" v-for="(item,index) in 6" :key="index">
          <img src="https://gfs17.gomein.net.cn/T1bOCbB4Wv1RCvBVdK_160.jpg" alt="">
          <p class="item_info">商品描述</p>
          <p class="item_price">￥238.00</p>
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