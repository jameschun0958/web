var topic=[
    "尚未開學",
    "國定假日",
    "環境準備",
    "重複性",
    "隨機性",
]

var startData = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startData.setMonth(startMonth-1, startDay);
    startData.setHours(0);
    startData.setMinutes(0);
    startData.setSeconds(0);
}

function changeDate()
{
    var dateControl = document.querySelector('input[type="date"]');
    var dateArray=dateControl.value.split("-");
    //alert(dateArray[1]+dateArray[2]);
    setMonthAndDay(dateArray[1],dateArray[2]);
    
    //var numOfTableRow = $("#courseTable").rows.length;
    $("#courseTable").empty();
    
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
}


setMonthAndDay(7,1)