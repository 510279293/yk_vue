/**
 * Created by Administrator on 2017/3/8.
 */
//choicequan
$(function(){
    $("#choicequan .content .Use dl span").tap(function(e){
        e.preventDefault();
        $("#choicequan .content h1").find("i").removeClass("on");
        $("#choicequan .content .Use dl span").removeClass("on");
        $(this).addClass("on");
        window.location.href="paytoSH.html";
    })
    $("#choicequan .content h1").tap(function(e){
        e.preventDefault();
        $(this).children("i").addClass("on");
        $("#choicequan .content .Use dl").find("span").removeClass("on");
        window.location.href="paytoSH.html";
    })
})

//paytoSH
$(function(){
    var str='￥';
    //键盘操作
    $("#paytoSH .content .VRjianpan table tr td").on("touchend",function(e){
        if($(this).attr("class")=="del"){     //删除最后一个数字
            str=str.substring(0,str.length-1);
            if(str.length==0){
                str="￥";
            }
            $("#paytoSH .content .cen input").val(str);
            $("#paytoSH .content .cen input").focus();
            if(str=="￥"||str==''){
                $("#paytoSH .content .removeText").hide();
            }else{
                $("#paytoSH .content .removeText").show();
            }
        }
        else if($(this).html()=="确认支付"){   //确认支付
            if(str=="￥"){                        //确认支付时如果没有金额
                $("#paytoSH .content .ispay").addClass("isOpacity");
            }else{                                //确认支付时有金额
                $("#paytoSH .content .ispay").removeClass("isOpacity");
                $("#paytoSH .content .removeText").show();
                $("#paytoSH .popup_bg").show();
                $("#paytoSH .payMothend").show();
                $("#paytoSH .payMothend .popup_close").on("touchend",function(e){
                    $("#paytoSH .popup_bg").hide();
                    $("#paytoSH .payMothend").hide();
                })
            }
            str+="";
        }
        else{                                     //点击数字,逗号时
            str+=$(this).html();
            $("#paytoSH .content .cen input").val(str);
            $("#paytoSH .content .cen input").focus();
            if(str=="￥"){
                $("#paytoSH .content .removeText").hide();
            }else{
                $("#paytoSH .content .removeText").show();
            }
        }
        if(str=="￥"){                             //判断最后输入金额是否为空
            $("#paytoSH .content .ispay").addClass("isOpacity");
        }else{
            $("#paytoSH .content .ispay").removeClass("isOpacity");
        }
        e.preventDefault();
    })

    $("#paytoSH .content .removeText").on("touchend",function(e){ //清除所有金额的按钮
        str="￥";
        $("#paytoSH .content .cen input").val(str);
        if(str=="￥"){
            $("#paytoSH .content table .ispay").addClass("isOpacity");
        }else{
            $("#paytoSH .content table .ispay").removeClass("isOpacity");
        }
    })
    $("#paytoSH .payMothend .popup_main div b").on("touchend",function(e){  //会员支付是否抵扣
        $(this).children("i").toggleClass("on");
        if($(this).children("i").attr("class")=="on"){
            $(this).children("span").show();
        }else{
            $(this).children("span").hide();
        }
        e.preventDefault();
    })
    $("#paytoSH .content .cen .quan b").tap(function(e){       //当没有金额时，点击优惠券出现的提示弹框
        if(str=="￥"){
            $("#paytoSH .content .removeText").hide();
            $("#paytoSH .content .alterbg").fadeIn(800,function(){
                setTimeout(function(){ $("#paytoSH .content .alterbg").fadeOut(1000)},2000)
            });
        }else{
            window.location.href="choicequan.html";
        }
        e.preventDefault();
    })
})

//vippay
$(function(){
    var strmm=[];
    $("#vippay .content .VRjianpan table td").on("touchend",function(e){
        if($(this).text()=="."){
        }
        else if($(this).attr("class")=="del"){
            strmm.pop();
            $("#vippay .content .payMM .MMtext input").each(function(i,o){
                $("#vippay .content .payMM .MMtext input").eq(i).val(strmm[i]);
            })
        }
        else{
            if(strmm.length<6){
                strmm.push($(this).text());
                $("#vippay .content .payMM .MMtext input").each(function(i,o){
                    $("#vippay .content .payMM .MMtext input").eq(i).val(strmm[i]);
                })
            }
            if(strmm.length==6){
            }
        }
    })
})