$(document).ready(function(){ //(ready)當文件載入完成時
    
    var currentQuiz=null;
    var finalResult=0;
    
    $("#startButton").click(function()
    {
        if(currentQuiz==null)
        {
            currentQuiz=0;
            
            $("#question").text(questions[0].question);
            $("#options").empty();
            
            for(var x=0;x<questions[0].answers.length;x++)
            {
                $("#options").append("<input name='options' type='radio' value="+x+">"+
                                    "<label>"+questions[0].answers[x][0]+"</label><br><br>");
            }
            
            $("#startButton").attr("value","Next");
        }
        else
        {
            $.each($(":radio"),function(i,val){
                if(val.checked)
                {
                    finalResult+= questions[currentQuiz].answers[i][1]
                    currentQuiz++;
                    $("#question").text(questions[currentQuiz].question);
                    $("#options").empty();
                    for(var x=0;x<questions[0].answers.length;x++)
                    {
                        $("#options").append("<input name='options' type='radio' value="+x+">"+
                                    "<label>"+questions[0].answers[x][0]+"</label><br><br>");
                    }
                    if(i==10)
                    {
                        if(finalResult>=5)
                            $("#question").text("通過測驗!");
                    }
                    /*
                    if(isNaN(questions[currentQuiz].answers[i][1]))
                    {
                        if(finalResult>=5)
                            $("#question").text("通過測驗!");
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始")
                        return false;
                    }
                    else
                    {
                     ;
                        currentQuiz=questions[currentQuiz].answers[i][1]-1;
                        
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        for(var x=0;x<questions[0].answers.length;x++)
                        {
                            $("#options").append("<input name='options' type='radio' value="+x+">"+
                                    "<label>"+questions[0].answers[x][0]+"</label><br><br>");
                        }
                    }
                    */
                  
                }
            })
        }
    })
    
});
