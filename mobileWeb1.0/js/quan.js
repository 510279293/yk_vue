/**
 * Created by Administrator on 2017/3/23.
 */
function telTap(str){
    $(str).tap(function(e){
        e.preventDefault();
        $(".alertPhone").show();
        $(".alertPhone .cancle").tap(function(e){
            e.preventDefault();
            $(".alertPhone").hide();
        })
    })
}
//yhQuan_fill
$(function(){
    telTap("#yhQuan_fill .fot .fot_dl a img");
})

//yhQuan
$(function(){
    telTap("#yhQuan .fot .fot_dl a img");
})

//yhQuan_temp2
$(function(){
    telTap("#yhQuan_temp2 .con .titBox .phone");
})

//yhQuan_temp3
$(function(){
    telTap("#yhQuan_temp3 .con .titBox .phone");
})