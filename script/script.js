$(function () {

    /* ////////////// GNB 메뉴 //////////////*/
    $("ul#mainMenu>li").mouseover(function () {
        $("ul.subMenu").stop().slideDown(700);
        $("#bgArea>#subMenuBG").stop().slideDown(700);
    });

    $("ul#mainMenu>li").mouseout(function () {
        $("ul.subMenu").stop().slideUp(400);
        $("#bgArea>#subMenuBG").stop().slideUp(400);
    });

    /* ////////////// 슬라이드 쇼 //////////////*/
//    setInterval(fnSlide, 3000);
//
//    function fnSlide() {
//        $("#shuttleFrame a").fadeOut(600);
//        $("#shuttleFrame a:nth-child(2)").fadeIn(3000,
//            function () {
//                $("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child")
//            });
//    }

    /* ////////////// 레이어 팝업 //////////////*/
    $("#notice li>a.layerPopupTxt").click(function() {
        $("#layerPopup").css({
            "display":"block"
        });
    });

    $("#layerPopup button").click(function() {
        $("#layerPopup").css({
            "display":"none"
        });
    });

    /* ////////////// 패밀리 사이트 펼침메뉴 //////////////*/
    $("#familySite>p").click(function() {
        $("#Site").css({
            "display":"block"
        });
    });

    $("#familySite span").click(function() {
        $("#Site").css({
            "display":"none"
        });
    });

}); /* $(function() {   }*/
