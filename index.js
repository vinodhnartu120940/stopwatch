

// let number = `00`;
// document.getElementById("hr").innerText = number;
// document.getElementById("min").innerText = number;
// document.getElementById("sec").innerText = number;
// function startTime() {

//     let date = new Date()
//     let hour = date.getHours();
//     document.getElementById("hr").innerText = hour;
//     let minutes = date.getMinutes();
//     document.getElementById("min").innerHTML = minutes;
//     let second = date.getSeconds();
//     document.getElementById("sec").innerHTML = second

// }
let sec = 0;
let min = 0;
let hr = 0;



setInterval(startTimer, 1000);
function startTimer() {

    sec = sec + 1
    document.getElementById("sec").innerHTML = sec;
    if (sec >= 60) {
        sec = sec - 60
        // sec = sec + 1
        min = min + 1
        document.getElementById("min").innerHTML = min;
    }
    if (min >= 60) {
        min = min - 60;
        hr = hr + 1;
        document.getElementById("hr").innerHTML = hr;
    }


    // document.getElementById("hr").innerHTML = "helo";
    console.log(sec)


}


