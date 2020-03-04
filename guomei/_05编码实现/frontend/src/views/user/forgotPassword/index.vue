<template>
  <div class="wrapper">
    <Header :logo="logoUrl"></Header>
    <div class="forgot_content">
      <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
        <el-tab-pane label="线上会员" name="first">
          <el-steps :active="1" align-center>
            <el-step title="步骤1">1111</el-step>
            <el-step title="步骤2"></el-step>
            <el-step title="步骤3"></el-step>
          </el-steps>
        </el-tab-pane>
        <el-tab-pane label="门店会员" name="second">
          <el-form :label-position="labelPosition">
            <el-form-item label="门店会员卡号：">
              <el-input placeholder="请输入门店会员卡号"></el-input>
            </el-form-item>
            <el-form-item label="门店预留手机号码：">
              <el-input placeholder="请输入门店预留手机号码"></el-input>
            </el-form-item>
            <el-form-item label="验证码：">
              <el-input placeholder="请输入验证码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button>重置密码</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
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
      labelPosition: "right",
      logoUrl:
        "http://css.gomein.net.cn/gmpro/2.0.0/memberClub/1.2.3/css/passwordReset/i/logo.png",
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {}
  }
};
</script>

<style>
@import url("./index.css");
</style>