var plyer; //播放器
var currentPlay = 0; //目前撥到第幾首

//當youtube API 準備好時
function onYouTubeIframeAPIReady(){
    
    player = new YT.Player("player",
    {
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
            "autoplay":0,
            "controls":0,
            "start":playTime[currentPlay][0],
            "end":playTime[currentPlay][1],
            "showinfo":0,
            "rel":0,
            "iv_load_policy":3
        },
    events:{
        "onReady":onPlayerReady,
        "onStateChange":onPlayerStateChange
    }
            
        
    })
}

//當Youtuber播放器準備好時
function onPlayerReady(event){
    
    $("#playButton").click(function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

//當播放器狀態改變時
function onPlayerStateChange(event){
    
    if(event.data == 0 && (Math.floor(player.getCurrentTime())==playTime[currentPlay][1]))
    {
        //還沒播到最後一首，就去播下一首
        if(currentPlay < playList.length-1)
        {
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
        else//播到最後一首
        {
            currentPlay=0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            })
        }
    }
    if(player.getVideoLoadedFraction()>0)
    {
        $("h2").text(player.getVideoData().title);
    }
}
