/**
 * Created by Administrator on 2017/6/12.
 */
$(function(){
    /*-----------------------五折卡公用js--------------------------------*/
    //弹窗
    $(".popdel h3 .colsePop").tap(function(){
        $(this).parent().parent().hide();
        $(this).parent().parent().prev().hide();
    })
    $(".popup_bg").tap(function(){
       // $(this).next().hide();
    })

    //五折与非五折的切换
    function tableSwitch(str1,str2){
        $(str1).tap(function(){
            $(this).addClass("onspan").siblings().removeClass("onspan");
            var n=$(this).index();
            $(str2).hide();
            $(str2).eq(n).show();
        })
    }

    //是否喜欢
    function isLove(str){
        $(str).tap(function(){
            if($(this).hasClass("Loven")){
                $(this).removeClass("Loven").addClass("Lovey").attr("src","../img/fiveOffCardImg/lovey.png");
            }else if($(this).hasClass("Lovey")){
                $(this).removeClass("Lovey").addClass("Loven").attr("src","../img/fiveOffCardImg/loven.png");
            }
        })
    }

    //直接购买的选择
    function buyChose(str){
        $(str).tap(function(){
            $(str).find("i").removeClass("ion");
            $(this).find("i").addClass("ion");
        })
    }

    //键盘将底部顶上去的问题解决
    $('input[type="number"]').focus(function(){
         // $(".bot").hide();
          $(this)[0].scrollIntoView();
    })
    $('input[type="number"]').blur(function(){
        $(".bot").show();
    })

    //日历
    function GetDateStr(AddDayCount,dateArr) {
        var dd = new Date();
        dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
        var y = dd.getFullYear();
        var m = dd.getMonth()+1;//获取当前月份的日期
        var d = dd.getDate();
        var w = dd.getDay();
        var obj={};
        var x=0;
        switch (w)
        {
            case 0:
                x="周日";
                break;
            case 1:
                x="周一";
                break;
            case 2:
                x="周二";
                break;
            case 3:
                x="周三";
                break;
            case 4:
                x="周四";
                break;
            case 5:
                x="周五";
                break;
            case 6:
                x="周六";
                break;
        }
        obj.rq=m+"-"+d;
        obj.wek=w;
        obj.wekX=x;
        dateArr.push(obj);
    }
    function showDate(){
        var dateArr=[];
        for(var i=0;i<30;i++){
            GetDateStr(i,dateArr);
        }
        var daHtml='<dl class="on all" data-chose="all"><dd>全部</dd></dl>';
        for(var j=0;j<dateArr.length;j++){
            if(j==0){
                daHtml+='<dl data-chose="'+dateArr[j].rq+'"><dd>'+dateArr[j].rq+'<br/>今天</dd></dl>'
            }else{
                daHtml+='<dl data-chose="'+dateArr[j].rq+'"><dd>'+dateArr[j].rq+'<br/>'+dateArr[j].wekX+'</dd></dl>'
            }
        }
        $(".choseDateBox .riLiBox").html(daHtml);
        $(".choseDateBox .riLiBox dl").tap(function(){
            $(this).addClass("on").siblings().removeClass("on");
        })
    }
    showDate();

    /*------------------------end------------------------------*/


    /*----------fcIndex---------*/
    //五折与非五折的切换
    tableSwitch("#fcIndex .showBox .banTit span","#fcIndex .listItemBox");
    isLove("#fcIndex .listItemBox .isLove");
    //立即领取现弹框
    $("#fcIndex .doGet").tap(function(){
         $("#fcIndex .popup_bg").show();
         $("#fcIndex .popdel").show();
    })

    /*------fcIndex_Vip------*/
    //五折与非五折的切换
    tableSwitch("#fcIndex_Vip .showBox .banTit span","#fcIndex_Vip .listItemBox");
    isLove("#fcIndex_Vip .listItemBox .isLove");

    /*--------fcIndex_buy--------*/
    tableSwitch("#fcIndex_buy .showBox .banTit span","#fcIndex_buy .listItemBox");
    //直接购买的选择
    buyChose("#fcIndex_buy .listItemBox .cardTypeList .ctype");

    /*--------fcIndex_buyXf--------*/
    tableSwitch("#fcIndex_buyXf .showBox .banTit span","#fcIndex_buyXf .listItemBox");
    //直接购买的选择
    buyChose("#fcIndex_buyXf .listItemBox .cardTypeList .ctype");


    /*--------fcIndex_me------*/
    $("#fcIndex_me .fcMeCon .banTit span").tap(function(){
        $(this).addClass("onspan").siblings().removeClass("onspan");
        var $n=$(this).index();
        $("#fcIndex_me .cardListBox .cardList").eq($n).show().siblings().hide();
    })

    /*----------fcIndex_xf---------*/
    //五折与非五折的切换
    tableSwitch("#fcIndex_xf .showBox .banTit span","#fcIndex_xf .listItemBox");
    //是否喜欢
    isLove("#fcIndex_xf .listItemBox .isLove");

})