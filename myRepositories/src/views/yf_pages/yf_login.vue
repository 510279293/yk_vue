<template>
  <div class="hello">
    <top></top>
    <div class="container login">
        <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12 login_main">
                <div class="login_box" id="login">
                    <p style="text-align:center;font-size: 18px;border-bottom: 1px solid #ddd; padding-bottom: 7px;margin-bottom: 24px;color: #666;">商家后台登录</p>
                    <div class="form-group login_css ">
                        <label for="exampleInputName2" class="col-sm-3 login_label">手机号码：</label>
                        <input type="text" class="form-control col-sm-7 login_input phoneNumber" v-model="phone" id="exampleInputName2" placeholder="请输入手机号">
                        <span class="login_po login_po1"></span>
                    </div>
                    <div class="form-group login_css">
                        <label for="inputPassword" class="col-sm-3 control-label login_label">登陆密码：</label>
                        <input type="password" class="form-control login_input login_password"  v-model="logPwd" id="inputPassword" placeholder="请输入6-12位有效字符">
                        <span class="login_po  login_po2" style="right: -85px;"></span>
                    </div>
                    <div class="checkbox login_checkbox" style="margin-left:128px;">
                            <input type="checkbox" id="blankCheckbox" v-model="checked" value="option1" aria-label="...">
                            <label for="blankCheckbox" class=" control-label" style="padding-left:0;">记住账号</label>
                    </div>
                    <div class="form-group login_css" style=" justify-content: flex-start;margin-left: 110px;">
                        <input type="text" class="form-control verify" v-model="valiCode" @keyup.enter="signUp" placeholder="" style="height: 36px;border-radius: 0;width: 160px;margin-right: 12px;">
                        <img src="../../assets/images/u17.png" v-on:click="getvaliCode" alt="" class="valiImg1" style="height: 36px;width:96px;">
                        <span class="login_po login_po3" style="right: -75px;"></span>
                    </div>
                    <div class="form-group" style="margin-top: 38px;">
                        <button type="submit" class="col-sm-12 btn btn-primary enter"><router-link to="/yfIndex" style="color:#fff">登录</router-link></button>
                    </div>
                    <div class="other_href media">
                        <router-link to="/yfEditPwd"><a href="javascript:;"  class="pull-left forget">忘记密码</a></router-link>
                        <p  class="pull-right">没有账号<a href="yf_registered.html">立即注册</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import top from '../../components/top'

export default {
  name: 'yf-editPwd',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    top
  }
}
</script>
<style scoped>
    .login .login_main {
  padding: 0px 135px;
}
.login .login_main .login_title {
  margin: 50px 0 27px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
}
.login .login_main .login_title .login_logo {
  height: 21px;
}
.login .login_main .login_title .header-title {
  margin-left: 12px;
  border-left: 1px solid #ddd;
  font-size: 15px;
  color: #666;
  display: table;
  padding-left: 12px;
}
.login .login_main .login_box {
  width: 380px;
  margin: 39px auto 0 auto;
  min-height: 250px;
}
.login .login_main .login_box .login_css {
  position: relative;
  display: flex;
}
.login .login_main .login_box .login_css .login_label {
  margin-top: 8px;
  width: 144px;
}
.login .login_main .login_box .login_css .login_input {
  font-size: 16px;
  border-radius: 0;
}
.login .login_main .login_box .login_po {
  position: absolute;
  right: -173px;
  color: red;
  font-size: 15px;
  top: 5px;
}
.login .login_main .login_box .login_checkbox {
  margin-left: 15px;
}
.login .login_main .login_box .other_href {
  width: 380px;
  margin: auto;
}
</style>



<!-- Add "scoped" attribute to limit CSS to this component only -->

