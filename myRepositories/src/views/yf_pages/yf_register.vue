<template>
  <div class="hello">
    <top></top>
    <div class="row signin">
        <div class="col-lg-12 col-sm-12 col-md-12 signin_main">
            <!--注册 s-->
            <div class="forget_password" id="register">
                <div class="media" style="text-align: center;font-size: 18px;border-bottom: 1px solid #ddd; padding-bottom: 7px;margin-bottom: 24px;">
                    <p class="" style="color: #666;margin-bottom:0;display: inline-block">免费注册</p>
                    <a href="yf_login.html" class="pull-right" style="font-size: 14px;margin-top: 5px;">已有账号</a>
                </div>
                <div class="form-group login_css ">
                    <label for="exampleInputName" class="col-sm-3 login_label" >企业简称：</label>
                    <input type="text" class="form-control col-sm-7 login_input verify_1" v-model="reshortName" id="exampleInputName" placeholder="请输入企业简称">
                    <span class="login_po login_po3_1"></span>
                </div>
                <div class="form-group login_css ">
                    <label for="target" class="col-sm-3 login_label" style="width:116px;">省/市/区：</label>
                    <div class="city_chose" id="target" data-toggle="distpicker">
                        <select  class="province" ></select>
                        <select  class="city" ></select>
                        <select  class="area"></select>
                    </div>
                </div>
                <div class="form-group login_css ">
                    <label for="exampleInputName3" class="col-sm-3 login_label">手机号：</label>
                    <input type="text" class="form-control col-sm-7 login_input phoneNumber"  v-model="rephone" id="exampleInputName3" placeholder="请输入手机号">
                    <span class="login_po login_po1" style="right:-175px"></span>
                </div>
                <div class="form-group login_css" style=" justify-content: flex-start;margin-left: 116px;">
                    <input type="text" class="form-control verify_3" v-model="revaliCode" placeholder="" style="height: 36px;border-radius: 0;width: 130px;margin-right: 12px;">
                    <img src="../../assets/images/u17.png" alt="" class="valiImg3" v-on:click="getvaliCode" style="height: 36px;width:96px;">
                    <span class="login_po login_po3_3" style="right: -150px;"></span>
                </div>
                <div class="form-group login_css ">
                    <label for="smsVerifyCode" class="col-sm-3 login_label">短信验证：</label>
                    <input type="text" class="form-control col-sm-7 login_input verify_4" v-model="remsgCode"  placeholder="请输入短信验证码" style="height: 36px;border-radius: 0;width: 144px;margin-right: 12px;" name="smsVerifyCode" id="smsVerifyCode">
                    <a class="btn btn-primary a_bottom" v-on:click="getfomsgCode" style="width:73px;height: 36px;margin-left: 12px;padding: 0 19px;border: 0;line-height: 35px;">获取</a>
                    <span class="login_po login_po3_4"></span>
                </div>
                <div class="form-group login_css ">
                    <label for="exampleposs4" class="col-sm-3 login_label">联系人：</label>
                    <input type="text" v-model="recontact" class="form-control col-sm-7 login_input verify_5" id="exampleposs4" placeholder="">
                    <span class="login_po login_po3_5"></span>
                </div>
                <div class="form-group login_css ">
                    <label for="examplepos" class="col-sm-3 login_label">设置密码：</label>
                    <input type="password" v-model="repwd" class="form-control col-sm-7 login_input pwd1" id="examplepos" placeholder="">
                    <span class="login_po login_po5" style="right: -115px;"></span>
                </div>
                <div class="form-group login_css ">
                    <label for="examplepos2" class="col-sm-3 login_label">确认密码：</label>
                    <input type="password" v-model="reconpwd" class="form-control col-sm-7 login_input pwd2" id="examplepos2" placeholder="">
                    <span class="login_po login_po5"  style="right: -115px;"></span>
                </div>
                <div class="checkbox login_checkbox" style="margin-left: 135px;">
                        <input type="checkbox" name="agree" id="blankCheckbox" value="0" v-model="checked">
                        <label v-on:clcik="isAgree" style="font-size:12px;padding-left:0;" for="blankCheckbox" class="control-label">我已阅读并接受<span><a href="#" target="_blank">《易快云服注册协议》</a></span></label>
                </div>
                <div class="form-group" style="margin-top: 38px;">
                    <button type="submit" class="col-sm-12 btn btn-primary" v-on:click="registerSubmit" :disabled="!checked">注册</button>
                </div>
            </div>
            <!--注册 e-->
        </div>
    </div>
  </div>
</template>

<script>
import top from '../../components/top'

export default {
  name: 'yf-register',
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
<style>
.signin {
  width: 380px;
  margin: 116px auto;
  min-height: 250px;
}
.signin .login_css {
  position: relative;
  display: flex;
}
.signin .login_css .login_input {
  border-radius: 0;
}
.signin .login_css .login_label {
  margin-top: 8px;
  width: 164px;
}
.signin .login_css .login_po {
  position: absolute;
  right: -81px;
  color: red;
  font-size: 15px;
  top: 5px;
}
.signin .other_href {
  width: 380px;
  margin: auto;
}
</style>



<!-- Add "scoped" attribute to limit CSS to this component only -->

