<template>
  <div class="hello">
     <top></top>
     <div id="carousel-example-generic" class="carousel slide " data-ride="carousel">
         <!-- Indicators -->
         <ol class="carousel-indicators">
             <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
             <li data-target="#carousel-example-generic" data-slide-to="1"></li>
             <li data-target="#carousel-example-generic" data-slide-to="2"></li>
         </ol>

         <!-- Wrapper for slides -->
         <div class="carousel-inner" role="listbox">
             <div class="item active">
                 <img src="../assets/images/banner2.png" alt="...">
             </div>
             <div class="item">
                 <img src="../assets/images/banner3.png" alt="...">
             </div>
             <div class="item">
                 <img src="../assets/images/banner1.png" alt="...">
             </div>
         </div>

         <!-- Controls -->
         <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
             <!--<span class="glyphicon " aria-hidden="true">》</span>-->
             <!--<span class="sr-only">Previous</span>-->
         </a>
         <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
             <!--<span class="glyphicon " aria-hidden="true">《</span>-->
             <!--<span class="sr-only">Next</span>-->
         </a>
     </div>
     <!--banner e-->
     <div class="index_middle">
         <div class="container index_body">
             <div class="row">
                 <div class="col-lg-12 col-sm-12 col-md-12 index_middle_main">
                     <div class="index_middle_hint">
                         <p class="index_big_hint">垂直行业解决方案</p>
                         <p class="index_small_hint">面向不同行业，提供一站式产品服务支持</p>
                     </div>
                     <div class="index_middle_box ">
                         <div class="index_function col-lg-3 col-md-6 col-sm-12">
                             <img src="../assets/images/mentcont.png" alt="">
                             <p>门店管理</p>
                             <p>面向实体商家，完整打通线下线上经营渠道， 一站式管理。</p>
                         </div>
                         <div class="index_function col-lg-3  col-md-6 col-sm-12">
                             <img src="../assets/images/CY.png" alt="">
                             <p>智能餐饮</p>
                             <p>面向餐饮行业，实现餐饮智能化，电商化，多平台化， 减少人工，提升效率。</p>
                         </div>
                         <div class="index_function col-lg-3 col-md-6 col-sm-12">
                             <img src="../assets/images/wechatPublic.png" alt="">
                             <p>微信公众号</p>
                             <p>高效的使用微信公众号服务消费者，全方位打通微信，建立稳定的沟通桥梁</p>
                         </div>
                         <div class="index_function col-lg-3 col-md-6 col-sm-12">
                             <img src="../assets/images/wechat.png" alt="">
                             <p>微信小程序</p>
                             <p>一键生成小程序，提前布局微信新生态，抢占第一波红利。</p>
                         </div>
                         <div class="index_function col-lg-3 col-md-6 col-sm-12">
                             <img src="../assets/images/vip.png" alt="">
                             <p>会员管理</p>
                             <p>帮助商家实现线下会员及线上粉丝的统一管理，流畅的实现拉新维老。</p>
                         </div>
                         <div class="index_function col-lg-3 col-md-6 col-sm-12">
                             <img src="../assets/images/coupon.png" alt="">
                             <p>优惠券</p>
                             <p>各种券类型，满足各种场景的营销活动，丰富的节假日券海报模板，满足不同商家需求。</p>
                         </div>
                     </div>
                     <p class="index_more">更多软件服务请<a href="ykyf/yf_registered.html">注册</a>查看</p>
                 </div>
             </div>
         </div>
     </div>
     <div class="container index_partner">
         <div class="partner">
             <p class="partner_hint">合作伙伴</p>
             <div class="partner_logo">
                 <img src="../assets/images/MS.png" alt="">
                 <img src="../assets/images/MT.png" alt="">
                 <img src="../assets/images/ZFB.png" alt="" style="width: 93px;height: 27px;">
                 <img src="../assets/images/ELM.png" alt="" style="width: 93px;height: 27px;">
                 <img src="../assets/images/WX.png" alt="">
             </div>
         </div>
     </div>
     <div class="index_about">
         <div class="container">
             <div class="about_box">
                 <div class="about_left">
                     <div class="about_our">
                         <p>关于我们</p>
                         <p>深圳市易快科技有限公司，独立第三方云服务平台，易用，快捷，简单的操作模式。</p>
                         <p>致力于通过移动互联网，帮助商家更有效地管理提升餐饮行业整体信息化水平。</p>
                     </div>
                     <div class="contact_way">
                         <p>联系方式</p>
                         <p><img src="resources/common/images/phone.png" alt="">0755-82779330</p>
                         <p><img src="resources/common/images/address.png" alt="">深圳市福田区彩福路彩虹大厦1栋14B</p>
                     </div>
                 </div>
                 <div class="about_right">
                     <p>关于我们</p>
                     <img src="../assets/images/eaqul_ewm.jpg" alt="" style="width: 166px;">
                     <p>微信公众号</p>
                 </div>
             </div>
         </div>
     </div>
     <div class="footer">
         <div class="content_based">
             <a id="toMiitbeian" href="javascript:void(0)">
                 <p>Copyright@2016.Shen Zhen eaqul technology co.,ltd.All Rights Reserved.</p>
                 <p>粤ICP备16098581号-1</p>
             </a>
         </div>
     </div>
  </div>
</template>
<script>
import top from '../components/top'
export default {
  name: 'index',
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
.index_middle {
  background: #f5f5f5;
}
.index_middle .index_body .row .index_middle_main .index_middle_hint {
  text-align: center;
  margin-top: 20px;
}
.index_middle .index_body .row .index_middle_main .index_middle_hint .index_big_hint {
  font-size: 20px;
  color: #666;
}
.index_middle .index_body .row .index_middle_main .index_middle_hint .index_small_hint {
  color: #666;
}
.index_middle .index_body .row .index_middle_main .index_middle_box {
  margin-top: 33px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.index_middle .index_body .row .index_middle_main .index_middle_box .index_function {
  width: 29%;
  padding: 17px 25px;
  margin-right: 21px;
  margin-bottom: 21px;
  background: #fff;
  display: inline-block;
}
.index_middle .index_body .row .index_middle_main .index_middle_box .index_function p:nth-child(2) {
  margin-top: 12px;
  font-size: 17px;
}
.index_middle .index_body .row .index_middle_main .index_middle_box .index_function p:nth-child(3) {
  color: #666;
}
.index_middle .index_body .row .index_middle_main .index_more {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
}
.index_partner .partner {
  text-align: center;
}
.index_partner .partner .partner_hint {
  text-align: center;
  font-size: 24px;
  margin-top: 19px;
}
.index_partner .partner .partner_logo {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
}
.index_partner .partner .partner_logo img {
  margin-right: 30px;
  height: 35px;
}
.index_about {
  background: #f5f5f5;
  min-height: 360px;
}
.index_about .container .about_box {
  display: flex;
  justify-content: space-between;
  margin-top: 56px;
}
.index_about .container .about_box .about_left .about_our p:nth-child(1) {
  font-size: 23px;
}
.index_about .container .about_box .about_left .about_our p:nth-child(2) {
  color: #666;
}
.index_about .container .about_box .about_left .about_our p:nth-child(3) {
  color: #666;
}
.index_about .container .about_box .about_left .contact_way {
  margin-top: 50px;
}
.index_about .container .about_box .about_left .contact_way p:nth-child(1) {
  font-size: 23px;
}
.index_about .container .about_box .about_left .contact_way p:nth-child(2) {
  color: #666;
}
.index_about .container .about_box .about_left .contact_way p:nth-child(2) img {
  margin-right: 3px;
}
.index_about .container .about_box .about_left .contact_way p:nth-child(3) {
  color: #666;
}
.index_about .container .about_box .about_left .contact_way p:nth-child(3) img {
  margin-right: 3px;
}
.index_about .container .about_box .about_right {
  text-align: center;
}
.index_about .container .about_box .about_right p:nth-child(1) {
  font-size: 23px;
}
.index_about .container .about_box .about_right p:nth-child(3) {
  margin-top: 16px;
  font-size: 16px;
}
.footer {
  padding: 18px 0;
  line-height: 24px;
  font-size: 12px;
  background: #0d0d0d;
  color: #ccc;
  text-align: center;
}
.footer .content_based {
  font-size: 12px;
  background: #0d0d0d;
  color: #ccc;
  text-align: center;
}
.footer .content_based a {
  text-decoration: none;
  color: #fff;
}
.footer .content_based a p:nth-child(1) {
  margin-bottom: 0;
  color: #cccaca;
}
.footer .content_based a p:nth-child(2) {
  margin-bottom: 0;
  color: #cccaca;
}

.index_header {
  padding-bottom: 6px;
  margin-top: 12px;
  border-bottom: 1px solid #ddd;
}
.index_header .index_left {
  display: flex;
}
.index_header .index_left .logo_img {
  height: 35px;
}
.index_header .index_left .logo_message {
  border-left: 1px solid #ddd;
  margin-left: 18px;
  height: 32px;
}
.index_header .index_left .logo_message .logo_p {
  font-size: 19px;
  color: #666;
  line-height: 32px;
  padding-left: 13px;
}
.index_header .navbar-right .header_right {
  font-size: 19px;
  color: #666;
  line-height: 32px;
  padding-left: 13px;
}
.index_header .navbar-right .header_right a {
  line-height: 20px;
  position: relative;
  display: block;
  padding: 10px 15px;
  color: #428bca;
  text-decoration: none;
  font-size: 14px;
  float: left;
}
.index_header .navbar-right .header_right a:nth-child(1) {
  border-right: 1px solid;
  line-height: 10px;
  margin-top: 6px;
}
.index_header .navbar-right .header_right a:nth-child(2) {
  margin-left: 12px;
  border: 1px solid;
  border-radius: 3px;
  padding: 4px 14px;
  margin-top: 5px;
  background: #428bca;
  color: #fff;
}
.index_header .navbar-right .header_right a:nth-child(3) {
  margin-left: 12px;
  border: 1px solid #428bca;
  border-radius: 3px;
  padding: 4px 14px;
  margin-top: 5px;
}
.console .console_login .login_back {
  min-height: 520px;
 /* background: url("../images/gg.png");*/
}
.console .console_login .login_back .login_box {
  width: 380px;
  background: rgba(255, 255, 255, 0.58);
  min-height: 250px;
  margin-right: 9%;
  margin-top: 2%;
  margin-left: 22px;
}
.console .console_login .login_back .login_box .login_css {
  position: relative;
  display: flex;
}
.console .console_login .login_back .login_box .login_css .login_label {
  margin-top: 8px;
  width: 144px;
}
.console .console_login .login_back .login_box .login_css .login_input {
  font-size: 16px;
  border-radius: 0;
}
.console .console_login .login_back .login_box .login_po {
  position: absolute;
  right: -67px;
  color: red;
  font-size: 15px;
  top: 5px;
}
.console .console_login .login_back .login_box .login_checkbox {
  margin-left: 15px;
}
.console .console_login .login_back .login_box .other_href {
  width: 380px;
  margin: auto;
}
.footer {
  padding: 18px 0;
  line-height: 24px;
  font-size: 12px;
  background: #0d0d0d;
  color: #ccc;
  text-align: center;
}
.footer .content_based {
  font-size: 12px;
  background: #0d0d0d;
  color: #ccc;
  text-align: center;
}
.footer .content_based a {
  text-decoration: none;
  color: #fff;
}
.footer .content_based a p:nth-child(1) {
  margin-bottom: 0;
  color: #cccaca;
}
.footer .content_based a p:nth-child(2) {
  margin-bottom: 0;
  color: #cccaca;
}

select{
   width:75px;
   height:34px;
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->

