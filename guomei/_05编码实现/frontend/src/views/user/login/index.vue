<template>
  <div class="wrapper">
    <Header :logo="logoUrl"></Header>
    <el-alert title="警告提示的文案" type="warning" center show-icon></el-alert>
    <div class="login_content">
      <div class="content_main">
        <div class="login_dialog">
          <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
            <el-tab-pane label="扫码登录" name="first">
              <img
                src="https://login.gome.com.cn/getQrcode.no?width=165&height=165&refreshkey=24"
                alt
              />
              <p>
                打开手机国美
                <br />扫一扫登陆
              </p>
              <router-link to="/user/registry" tag="span">免费注册</router-link>
            </el-tab-pane>
            <el-tab-pane label="账户登录" name="second">
              <el-input type="text" placeholder="手机号/用户名/邮箱/门店会员卡"></el-input>
              <el-input type="password" placeholder="密码"></el-input>
              <div class="second_btn">
                <router-link to="/user/forgot_password" tag="span">忘记密码</router-link>|
                <router-link to="/user/registry" tag="span">免费注册</router-link>
              </div>
              <button class="loginbtn">登录</button>
            </el-tab-pane>
          </el-tabs>
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
        "https://css.gomein.net.cn/images/regfront/register/loginlogo.png",
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
@import url("./index.css");
</style>