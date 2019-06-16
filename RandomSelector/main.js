$(document).ready(function(){ //(ready)當文件載入完成時
    $("input").click(function()
    {
        var numberOListItem = $("#food_choice li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOListItem);
        
        $("H1").text($("#food_choice li").eq(randomChildNumber).text());
        var img=randomChildNumber+1;
        document.getElementById("image").src = 'RandomSelector/' +img + '.jpg'
    });
});