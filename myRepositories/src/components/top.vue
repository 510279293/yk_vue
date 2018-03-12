<template>
     <div class="container index">
         <div class="row">
             <div class="col-lg-12 col-sm-12 col-md-12">
                 <div class="container  index_header" style="border-bottom:0;">
                     <div class="index_left navbar-left">
                         <img src="../assets/images/logo.png" alt="" class="img-responsive logo_img">
                         <div class="logo_message">
                             <p class="logo_p">易快智能云服务平台</p>
                         </div>
                     </div>
                     <div class="navbar-right">
                         <div class="header_right">
                             <a href="console_login.html">控制台</a>
                             <router-link to="/yfLogin">登录</router-link>
                             <router-link to="/yfRegister">注册</router-link>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
html,body{
   width:100%;
   height:100%;
}
.index{
    border-bottom:1px solid #ddd;
    margin: 0 auto;
}
.index .row {
  margin-top: 8px;
  margin-bottom: 8px;
}
.index .row .index_header {
  padding-bottom: 0;
  margin-top: 0;
  border-bottom: 0;
}
.index .row .index_header .index_left {
  display: flex;
}
.index .row .index_header .index_left .logo_img {
  height: 35px;
}
.index .row .index_header .index_left .logo_message {
  border-left: 1px solid #ddd;
  margin-left: 18px;
  height: 32px;
}
.index .row .index_header .index_left .logo_message .logo_p {
  font-size: 19px;
  color: #666;
  line-height: 32px;
  padding-left: 13px;
}
.index .row .index_header .navbar-right .header_right {
  font-size: 19px;
  color: #666;
  line-height: 32px;
  padding-left: 13px;
}
.index .row .index_header .navbar-right .header_right a {
  line-height: 20px;
  position: relative;
  display: block;
  padding: 10px 15px;
  color: #428bca;
  text-decoration: none;
  font-size: 14px;
  float: left;
}
.index .row .index_header .navbar-right .header_right a:nth-child(1) {
  border-right: 1px solid;
  line-height: 10px;
  margin-top: 6px;
}
.index .row .index_header .navbar-right .header_right a:nth-child(2) {
  margin-left: 12px;
  border: 1px solid #428bca;
  border-radius: 3px;
  padding: 4px 14px;
  margin-top: 5px;
  color: #428bca;
  background: #fff;
}
.index .row .index_header .navbar-right .header_right a:nth-child(3) {
  margin-left: 12px;
  border: 1px solid #428bca;
  border-radius: 3px;
  padding: 4px 14px;
  margin-top: 5px;
  background: #428bca;
  color: #fff;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

