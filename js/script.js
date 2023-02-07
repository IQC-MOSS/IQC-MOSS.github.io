var time = 5;
var timer = setInterval(function(){
    time--;
    if(time <= 0){
        clearInterval(timer);
        document.title = "正在跳转..."
        window.location.href = "moss.html";
    }
    document.querySelector(".time_h1").innerHTML = time;
    document.querySelector(".time_h3").innerHTML = time;
    if(time > 0){
        document.title = "跳转倒计时：" + time + "秒";
    }
    if(time < 2){
        document.querySelector(".distance_en_us_3").innerHTML = "SECOND";
    }
},1000);
