<template>
  <div class="hello">
    <top></top>
       <div class="col-lg-12 col-sm-12 col-md-12 login_main">
            <div class="forget_password" id="forgetyfPwd" >
                <p style="text-align: center;font-size: 18px;border-bottom: 1px solid #ddd; padding-bottom: 7px;margin-bottom: 24px;color: #666;">忘记密码</p>
                <div class="form-group login_css ">
                    <label for="exampleInputName" class="col-sm-3 login_label">手机号码：</label>
                    <input type="number" class="form-control col-sm-7 login_input phoneNumber" v-model="foPhone" id="exampleInputName" placeholder="请输入手机号">
                    <span class="login_po login_po1" style="right:-175px"></span>
                </div>
                <div class="form-group login_css" style=" justify-content: flex-start;margin-left: 110px;">
                    <input type="text" class="form-control verify" placeholder="" v-model="fovaliCode" style="height: 36px;border-radius: 0;width: 160px;margin-right: 12px;">
                    <img src="../../assets/images/u17.png" v-on:click="getvaliCode" alt="" style="height: 36px;width:96px;" class="valiImg2">
                    <span class="login_po login_po3" style="right: -75px;"></span>
                </div>
                <div class="form-group login_css ">
                    <label for="forgetPwd_verifyCode" class="col-sm-3 login_label">短信验证：</label>
                    <input type="text" style="width: 194px;" v-model="fomsgCode" class="form-control col-sm-7 login_input verify2" name="forgetPwd_verifyCode" id="forgetPwd_verifyCode" placeholder="请输入短信验证码">
                    <a class="btn btn-primary a_bottom" v-on:click="getfomsgCode" style="width:73px;height: 36px;margin-left: 12px;padding: 0 19px;border: 0;line-height: 35px;">获取</a>
                    <span class="login_po login_po4" style="right: -75px;"></span>
                </div>
                <div class="form-group login_css ">
                    <label for="examplepos" class="col-sm-3 login_label">设置密码：</label>
                    <input type="password" v-model="fopwd" class="form-control col-sm-7 login_input pwd1" id="examplepos" placeholder="">
                    <span class="login_po login_po5"  style="right: -115px;"></span>
                </div>
                <div class="form-group login_css ">
                    <label for="examplepos2" class="col-sm-3 login_label">确认密码：</label>
                    <input type="password" v-model="fonewpwd" class="form-control col-sm-7 login_input pwd2" id="examplepos2" placeholder="">
                    <span class="login_po login_po5" style="right: -115px;"></span>
                </div>
                <div class="form-group" style="margin-top: 38px;">
                    <button type="submit" v-on:click="fosubmit" class="col-sm-12 btn btn-primary enter2">提交</button>
                </div>
                <div class="other_href media">
                    <a href="yf_login.html" class="pull-left ">登录</a>
                    <p  class="pull-right">没有账号<a href="yf_registered.html">立即注册</a></p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import top from '../../components/top'

export default {
  name: 'yf-editpwd',
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
.login_main .forget_password {
  width: 380px;
  margin: 39px auto 0 auto;
  min-height: 250px;
}
.login_main .forget_password .login_css {
  position: relative;
  display: flex;
}
.login_main .forget_password .login_css .login_input {
  border-radius: 0;
}
.login_main .forget_password .login_css .login_label {
  margin-top: 8px;
  width: 145px;
}
.login_main .forget_password .login_css .login_po {
  position: absolute;
  right: -81px;
  color: red;
  font-size: 15px;
  top: 5px;
}
.login_main .forget_password .other_href {
  width: 380px;
  margin: auto;
}
</style>



<!-- Add "scoped" attribute to limit CSS to this component only -->

