function calculate_time(){
    let time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    hour = hour <10 ? "0"+ hour : hour;
    minute = minute <10 ? "0"+ minute : minute;
    second = second <10 ? "0"+ second : second;
    
    let screenclock = hour + ":" + minute + ":" + second;
    let digitalclock1 = document.querySelector(".clock");
    digitalclock1.innerHTML = screenclock;
 }
 setInterval(calculate_time,1000);