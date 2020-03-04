<template>
  <div class="straightDown_module">
      <img :src="titUrl" alt="">
      <div class="goods_List">
          <div class="goods_item" v-for="(item,index) in 10" :key="index">
              <img src="https://gfs17.gomein.net.cn/T1m4YgBsxT1RCvBVdK_160.jpg" alt="">
              <p>商品名称以及介绍</p>
              <div class="item_price">￥175.00</div>
              <button>立即购买</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titUrl:String
    }
}
</script>

<style>
@import url('./index.css');
</style>