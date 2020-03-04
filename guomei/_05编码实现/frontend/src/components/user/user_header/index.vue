<template>
  <div class="user_header">
      <img :src="logo" alt="">
  </div>
</template>

<script>
export default {
  props:{
    logo:String
  }
}
</script>

<style>
@import url('./index.css');
</style>