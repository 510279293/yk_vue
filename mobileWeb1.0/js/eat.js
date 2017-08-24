/**
 * Created by Administrator on 2017/3/8.
 */
//beizhuInfo
$(function(){
    var str="";
    $("#beizhuInfo .tipBox .offenUse span").on("touchend",function(e){
        if(str.indexOf($(this).html())>=0){
            str+="";
        }else{
            str+=$(this).html()+"、";
        }
        $("#beizhuInfo .tipBox textarea").html(str);
        e.preventDefault();
    })
    $("#beizhuInfo .ok  span").tap(function(e){
        window.location.href='sureOrder.html?str='+str;
        e.preventDefault();
    })
})
/*-------------------end---------------------*/


//eat_mine
$(function(){
    //ban导航切换
    $("#eat_mine .ban span").on("touchend",function(e){
        var n=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $("#eat_mine .content .list").hide();
        $("#eat_mine .content .list").eq(n).show();
        e.preventDefault();
    })
    //所有订单详情展现
    var clickNum=0;
    $("#eat_mine .content .list .totShow .showAll").on("touchend",function(e){
        if(clickNum%2==0){
            $(this).find("img").css("transform","rotateX(180deg)");
            $(this).parent().prev().show();
        }else{
            $(this).find("img").css("transform","rotateX(0deg)");
            $(this).parent().prev().hide();
        }
        ++clickNum;
        e.preventDefault();
    })
    //操作选择
    $("#eat_mine .content .list .item .operate span").on("touchend",function(e){
        $(this).addClass("on").siblings().removeClass("on");
        //删除订单
        if($(this).html()=="删除订单"){
            $("#eat_mine .popup_bg").show();
            $("#eat_mine .popdel").show();
        }
        if($(this).html()=="取消订单"){
            $("#eat_mine .popup_bg").show();
            $("#eat_mine .canclepop").show();
        }
        //删除订单的确定与取消
        $("#eat_mine .popdel p a").on("touchend",function(e){
            if($(this).html()=="取消"){
                $("#eat_mine .popup_bg").hide();
                $("#eat_mine .popdel").hide();
            }
            else if($(this).html()=="确定"){
                $("#eat_mine .popup_bg").hide();
                $("#eat_mine .popdel").hide();
            }
            e.preventDefault();
        })
        $("#eat_mine .canclepop  p a").on("touchend",function(e){
            $("#eat_mine .popup_bg").hide();
            $("#eat_mine .canclepop").hide();
            e.preventDefault();
        })
        e.preventDefault();
    })
})
/*-------------------end-----------------------*/

//eatVipPay
var strmm=[];
$("#eatVipPay .content .VRjianpan table td").on("touchend",function(e){
    if($(this).text()=="."){
    }
    else if($(this).attr("class")=="del"){
        strmm.pop();
        $("#eatVipPay .content .payMM .MMtext input").each(function(i,o){
            $("#eatVipPay .content .payMM .MMtext input").eq(i).val(strmm[i]);
        })
    }
    else{
        if(strmm.length<6){
            strmm.push($(this).text());
            $("#eatVipPay .content .payMM .MMtext input").each(function(i,o){
                $("#eatVipPay .content .payMM .MMtext input").eq(i).val(strmm[i]);
            })
        }
        if(strmm.length==6){
        }
    }
})
/*------------------end-----------------------*/

//sureOrder
$(function(){
    $("#sureOrder .cont .edit").on("touchend",function(e){
        if($(this).html()=="编辑"){
            $("#sureOrder .cont .items .item .editing").show();
            $("#sureOrder .cont .items .item .editOk").hide();
            $(this).html("完成");
        }
        else if($(this).html()=="完成") {
            $("#sureOrder .cont .items .item .editing").hide();
            $("#sureOrder .cont .items .item .editOk").show();
            $(this).html("编辑");
            $("#sureOrder .items .item").each(function(){
                var dx=$(this).find(".editing").find(".on").html();
                var sl=$(this).find(".editing").find(".num").html();
                $(this).find(".editOk").find(".num").html("x"+sl);
                $(this).find(".editOk").find(".p2").find("b").html(dx);
            })
        }
        e.preventDefault();
    });
    //大小份选择
    $("#sureOrder .cont .items .item .editing dd span").on("touchend",function(e){
        $(this).addClass("on").siblings().removeClass("on");
        e.preventDefault();
    })
    //数量加减
    //数量加
    $("#sureOrder .cont .items .item .editing .editNum .add").on("touchend",function(e){
        var n=parseInt($(this).prev().html());
        if(n>=0){
            $(this).prev().html(n+1);
        }else{
            $(this).prev().html(0);
        }
        e.preventDefault();
    })
    //数量减
    $("#sureOrder .cont .items .item .editing .editNum .sub").on("touchend",function(e){
        var n=parseInt($(this).next().html());
        if(n>0){
            $(this).next().html(n-1);
        }else{
            $(this).next().html(0);
        }
        e.preventDefault();
    })
    //删除
    $("#sureOrder .cont .items .item .editing  .del").tap(function(e){
        e.preventDefault();
        $(this).parent().parent().remove();
    })
    //订单备注
    var bzhref=window.location.href;
    if(bzhref.split("?")[1]){
        if(bzhref.split("?")[1].split("=")[1]){
            var bzArr=bzhref.split("?")[1].split("=")[1];
            $("#sureOrder .beizhu span").html(decodeURI(bzArr));
        }
    }

})
/*------------------end----------------------*/


//tuikuan
$(function(){
    //选择建议意见
    $("#tuikuan .content .TkWhy h3 b").on("touchend",function(e){
        $("#tuikuan .popup_bg").show();
        $("#tuikuan .botTipBox").show();
        //点击取消
        $("#tuikuan .botTipBox .tipcancle").on("touchend",function(e){
            $("#tuikuan .popup_bg").hide();
            $("#tuikuan .botTipBox").hide();
            e.preventDefault();
        })
        //点击建议
        $("#tuikuan .botTipBox .tipBox p").on("touchend",function(e){
            var str="";
            str=$(this).html();
            $("#tuikuan .content .TkWhy h3 input").val(str);
            str="";
            $("#tuikuan .popup_bg").hide();
            $("#tuikuan .botTipBox").hide();
            e.preventDefault();
        })
        e.preventDefault();
    })
    //选择退款类型
    var clicknum1=0;
    $("#tuikuan .choseTKLX p").on("touchend",function(e){
        if(clicknum1%2==0){
            $(this).find("span").addClass("on")
        }else{
            $(this).find("span").removeClass("on");
        }
        ++clicknum1;
    })
})
/*------------------end----------------------*/


//usequan
$(function(){
    $("#useQuan .content .Use dl span").tap(function(e){
        e.preventDefault();
        $("#useQuan .content h1").find("i").removeClass("on");
        $(this).parent().parent().parent().siblings().children("dd").children("p").children("span").removeClass("on");
        $(this).addClass("on");
        window.location.href="sureOrder.html"
    })
    $("#useQuan .content h1 i").tap(function(e){
        e.preventDefault();
        $(this).addClass("on");
        $("#useQuan .content .Use dl").find("span").removeClass("on");
        window.location.href="sureOrder.html"
    })
})
/*--------------------end---------------------*/

//wmIndex
function  addCarNum(){
    var num=parseInt($(".posi i").html());
    num++;
    console.log(num);
    $(".posi i").html(num)
}
//购物车数量减1
function subCarNum(){
    var num=parseInt($(".posi i").html());
    num--;
    if(num<=0){
        num=0;
    }
    console.log(num);
    $(".posi i").html(num)
}
$(function(){
    //判断是否有数量，有则显示,无则隐藏
    $("#wmIndex .cont .rightBox .boxItem .num").each(function(i,o){
        if(parseInt($(this).html())>0){
            $(this).show();
            $(this).prev().show();
        }else{
            $(this).hide();
            $(this).prev().hide();
        }
    })
    //点击飞入购物车效果
    var scTop=0;
    $(document).on("scrollstart",function(e){
        scTop=$(window).scrollTop();
    });
    $(function() {

        function  flyToMyCar(obj,fn){
            var o={
                str1:"",
                str2:"#wmSIndex .boot2",
                flag:true,
                //imgSrc:"",
            }
            //对象的继承
            for(var i in obj){
                o[i]=obj[i];
            }
            //判断第二个参数是否为函数
            var isFn=false;
            if(typeof arguments[1]=='function'){
                isFn= true;
            }
            $(o.str1).tap(function(event){
                //点击添加数量
                event.preventDefault();
                $(this).prev().show();
                $(this).prev().prev().show();
                if($(this).prev().html()==""){
                    $(this).prev().html(0);
                }
                if(o.flag){
                    var num=parseInt($(this).prev().html())+1;
                    $(this).prev().html(num);
                }
                //飞入效果
                var offset = $(o.str2).offset();
                var addcar = $(this);
                var img;
                if(o.imgSrc){
                    img= o.imgSrc;
                }else{
                    img = addcar.parent().find('img').attr('src');
                }
                var flyer = $('<img class="u-flyer" src="'+img+'">').css({"width":"30px","heigth":"30px","border-radius":"50%"});
                flyer.fly({
                    start: {
                        left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed
                        top: event.pageY-scTop //开始位置（必填）
                    },
                    end: {
                        left: offset.left+10, //结束位置（必填）
                        top: offset.top+10, //结束位置（必填）
                        width: 0, //结束时宽度
                        height: 0 //结束时高度
                    },
                    onEnd: function(){ //结束回调
                        addcar.css("cursor","default").removeClass('orange').unbind('click');
                        flyer.remove(); //移除dom
                    }
                });
                //回调函数
                if(isFn){
                    fn();
                }

            })
        }

        flyToMyCar({
            str1:"#wmIndex .cont .rightBox .boxItem .add",
            str2:"#wmIndex .boot2",
            flag:true
        },addCarNum);
        flyToMyCar({
            str1:"#wmIndex .cont .seach_box dl .add",
            str2:"#wmSIndex .boot2",
            flag:true
        },addCarNum);
        flyToMyCar({
            str1:"#wmIndex #myPopup1 .ui-btn",
            str2:"#wmIndex .boot2",
            flag:false,
            imgSrc:'../img/eat1.png'
        },addCarNum);



       /* function  flyToMyCar(str1,str2){
            $(str1).tap(function(event){
                //点击添加数量
                $(this).prev().show();
                $(this).prev().prev().show();
                if($(this).prev().html()==""){
                    $(this).prev().html(0);
                }
                var num=parseInt($(this).prev().html())+1;
                $(this).prev().html(num);
                event.preventDefault();
                //飞入效果
                var offset = $(str2).offset();
                var addcar = $(this);
                var img = addcar.parent().find('img').attr('src');
                var flyer = $('<img class="u-flyer" src="'+img+'">').css({"width":"30px","heigth":"30px","border-radius":"50%"});
                flyer.fly({
                    start: {
                        left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed
                        top: event.pageY-scTop //开始位置（必填）
                    },
                    end: {
                        left: offset.left+20, //结束位置（必填）
                        top: offset.top+10, //结束位置（必填）
                        width: 0, //结束时宽度
                        height: 0 //结束时高度
                    },
                    onEnd: function(){ //结束回调
                        addcar.css("cursor","default").removeClass('orange').unbind('click');
                        flyer.remove(); //移除dom
                    }
                });
            })
        }
        flyToMyCar("#wmIndex .cont .rightBox .boxItem .add","#wmIndex .boot2");
        flyToMyCar("#wmIndex .cont .seach_box dl .add","#wmIndex .boot2");*/
    });
    //点击减少数量
    function subNum(str,fn){
        var isFn=false;
        if(typeof arguments[1]=='function'){
            isFn= true;
        }
        $(str).tap(function(e){
            if(parseInt($(this).next().html())<=1){
                $(this).hide();
                $(this).next().hide();
                var num=parseInt($(this).next().html())-1;
                $(this).next().html(num);
            }else{
                var num=parseInt($(this).next().html())-1;
                $(this).next().html(num);
            }
            e.preventDefault();
            if(isFn){
                fn();
            }
        })
    }
    //subNum("#wmSIndex .cont .rightBox .boxItem .sub",subCarNum);
   // subNum("#wmSIndex .cont .seach_box dl .sub",subCarNum);
    subNum("#wmIndex .cont .rightBox .boxItem .sub",subCarNum);
    subNum("#wmIndex .cont .seach_box dl .sub",subCarNum);
    //点击规格，选规格
    function showChose(str){
        $(str).on("touchend",function(e){
            $("#wmIndex .popbg").show();
            $("#wmIndex #myPopup1").show();
            e.preventDefault();
        })
    }
    showChose("#wmIndex .rightBox .boxItem .canChose");
    showChose("#wmIndex .seach_box dl .canChose");
    //选规格
    $("#wmIndex #myPopup1 div span").on("touchend",function(e){
        $("#wmIndex #myPopup1 div span").removeClass("on");
        $(this).addClass("on");
    })
    //点击选规格隐藏
    $("#wmIndex #myPopup1 .popup_close").on("touchend",function(e){
        $("#wmIndex .popbg").hide();
        $("#wmIndex #myPopup1").hide();
        e.preventDefault();
    })
    //加入购物车
  /*  $("#wmIndex #myPopup1 .ui-btn").on("touchend",function(e){
        $(this).hide();
        $(this).next().show();
        if($(this).next().find(".num").html()==""){
            $(this).next().find(".num").html(0);
        }
        var num=parseInt($(this).next().find(".num").html())+1;
        $(this).next().find(".num").html(num);
        e.preventDefault();
    })*/
    //加入购物车的数量控制
    $("#wmIndex #myPopup1 .add").on("touchend",function(e){
        var num=parseInt($(this).prev().html())+1;
        $(this).prev().html(num);
        e.preventDefault();
    })
    $("#wmIndex #myPopup1 .sub").on("touchend",function(e){
        if(parseInt($(this).next().html())<=1){
            $(this).parent().hide();
            $(this).parent().prev().show();
            var num=parseInt($(this).next().html())-1;
            $(this).next().html(num);
        }else{
            var num=parseInt($(this).next().html())-1;
            $(this).next().html(num);
        }
        e.preventDefault();
    })
    //底部显示
    $("#wmIndex .boot2 .mm .posi img").on("touchend",function(e){
        $(this).parent().hide();
        $("#wmIndex .popbg").show();
        $("#wmIndex .boot2 .listBox").animate({"height":"136px"},function(){
            $("#wmIndex .listBox .eqlo").show();
        });
        e.preventDefault();
    })
    //底部影藏
    $("#wmIndex .boot2 .listBox .eqlo").on("touchend",function(e){
        $("#wmIndex .boot2 .listBox").animate({"height":"0px"},function(){
            $("#wmIndex .listBox .eqlo").hide();
            $("#wmIndex .boot2 .mm .posi").show();
            $("#wmIndex .popbg").hide();
        });
        e.preventDefault();
    })
    //底部数量统计----数量加
    $("#wmIndex .boot2 .height180 .add").on("touchend",function(e){
        var num=parseInt($(this).prev().html());
        $(this).prev().html(num+1);
        var tot=0;
        $("#wmIndex .boot2 .height180 .num").each(function(i,o){
            tot+=parseInt($(this).html());
        })
        $("#wmIndex .boot2 .mm .left i").html(tot);
        $("#wmIndex .boot2 .listBox .eqlo i").html(tot);
        e.preventDefault();
    })
    //底部数量统计----数量减
    $("#wmIndex .boot2 .height180 .sub").on("touchend",function(e){
        var num=parseInt($(this).next().html());
        if(num<1){
            $(this).parent().parent().remove();
        }else{
            $(this).next().html(num-1);
        }
        var tot=0;
        $("#wmIndex .boot2 .height180 .num").each(function(i,o){
            tot+=parseInt($(this).html());
        })
        $("#wmIndex .boot2 .mm .left i").html(tot);
        $("#wmIndex .boot2 .listBox .eqlo i").html(tot);
        e.preventDefault();
    })
    //清除购物车
    $("#wmIndex .boot2 .listBox h3 span").on("touchend",function(e){
        $("#wmIndex .boot2 .height180 tbody").html("");
        var tot=0;
        $("#wmIndex .boot2 .height180 .num").each(function(i,o){
            tot+=parseInt($(this).html());
        })
        $("#wmIndex .boot2 .mm .left i").html(tot);
        $("#wmIndex .boot2 .listBox .eqlo i").html(tot);
        e.preventDefault();
    })

    //滑梯效果
    var oNav = $('.leftBan');//导航壳
    var aNav = oNav.find('span');//导航
    var aDiv = $('.rightBox .boxItem');//楼层
    var  aDiv0=document.getElementsByClassName("titItem");
    if(aDiv0[0]){
        aDiv0[0].addEventListener("touchmove", function(event) {
            var winH = $(window).height();//可视窗口高度
            var iTop = $(window).scrollTop();//鼠标滚动的距离
            if(iTop>=0){
                oNav.fadeIn();
                //oTop.fadeIn();
                //鼠标滑动式改变
                aDiv.each(function(){
                    if(winH+iTop - $(this).offset().top>winH/2){
                        aNav.removeClass('on');
                        aNav.eq($(this).index()).addClass('on');
                    }
                })
            }else{
                oNav.fadeOut();
                //oTop.fadeOut();
            }
        })
    }
    //点击回到当前楼层
    var arr=[];
    for(var i=0;i<$(".boxItem").length;i++){
        arr.push($(".boxItem").eq(i).offset().top);
    }
    aNav.click(function(){
        var t = arr[$(this).index()];
        var titTiem=document.getElementsByClassName("rightBox");
        $(".rightBox").animate({"scrollTop":t},500);
       // console.log(titTiem[0].scrollTop);
        $(this).addClass('on').siblings().removeClass('on');
    });

})
/*------------------end--------------------*/

//zxpay
$(function(){
    $("#zxpay .fot").on("touchend",function(e){
        $(this).hide();
        $("#zxpay .popup_bg").show();
        $("#zxpay .payMothend").show();
        e.preventDefault();
    })
    $("#zxpay .payMothend .popup_close").on("touchend",function(e){
        $("#zxpay .popup_bg").hide();
        $("#zxpay .payMothend").hide();
        $("#zxpay .fot").show();
    })
})
/*-----------------end-------------------*/