<template>
  <div class="wrapper">
    <Header :logo="logoUrl"></Header>
    <div class="registry_content">
      <div class="content_main">
        <div class="tologin">我已注册，现在就<router-link to="/user/login" tag="a">登录</router-link></div>
        <div class="steps_box">
          <el-steps :active="active" finish-status="success" :align-center="true">
            <el-step title="验证手机号"></el-step>
            <el-step title="填写账户信息"></el-step>
            <el-step title="注册成功"></el-step>
          </el-steps>
          <div class="registry_operation">
            <el-input placeholder="请输入手机号"></el-input>
            <button class="yanzheng">点击按钮进行验证</button>
          </div>
          <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/user/user_header/";
import Footer from "@/components/user/user_footer/";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      logoUrl:
        "https://misc.gomein.net.cn/images/regfront/register/registerlogo.png",
      active: 0
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>

<style>
@import url("./index.css");
</style>