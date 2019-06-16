
$(document).ready(function(){ //(ready)當文件載入完成時
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    var topicCount = topic.length;
    var dayUnit=1000*60*60*24;
    for(var x=0;x<topicCount;x++)
    {

        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+(x+1)+"</td>");
        $("#courseTable").append("<td>"+
            (new Date(startData.getTime()+x*7*dayUnit).toLocaleDateString().slice(5))+"</td>");
        
        $("#courseTable").append("<td>"+topic[x]+"</td>");
        $("#courseTable").append("</tr>");
    }
    
});

