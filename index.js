// // let number = `00`;
// // document.getElementById("hr").innerText = number;
// // document.getElementById("min").innerText = number;
// // document.getElementById("sec").innerText = number;
// // function startTime() {

// //     let date = new Date()
// //     let hour = date.getHours();
// //     document.getElementById("hr").innerText = hour;
// //     let minutes = date.getMinutes();
// //     document.getElementById("min").innerHTML = minutes;
// //     let second = date.getSeconds();
// //     document.getElementById("sec").innerHTML = second

// // }
let sec = 0;
let min = 0;
let hr = 0;
let clear;



// function stop() {
//     clearInterval(startWatch);
// }




// $(document).ready(function () {
//     $("#tostart").click(function () {
//         setInterval(function () {
//             sec = sec + 1
//             document.getElementById("sec").innerHTML = sec;
//             if (sec >= 60) {
//                 sec = sec - 60
//                 // sec = sec + 1
//                 min = min + 1
//                 document.getElementById("min").innerHTML = min;
//             }
//             if (min >= 60) {
//                 min = min - 60;
//                 hr = hr + 1;
//                 document.getElementById("hr").innerHTML = hr;
//             }


//             // document.getElementById("hr").innerHTML = "helo";
//             console.log(sec)
//         }, 1000);
//     });
// });
function startTimer() {
    clear = setInterval(function () {
        sec = sec + 1;
        if (sec < 10) {
            document.getElementById("sec").innerHTML = "0" + sec;
        } else {
            document.getElementById("sec").innerHTML = sec;
        }

        if (sec >= 60) {
            // sec = sec - 60
            sec = 0;
            // sec = sec + 1
            min = min + 1;
            if (min < 10) {
                document.getElementById("min").innerHTML = "0" + min;
            } else {
                document.getElementById("min").innerHTML = min;
            }

        }
        if (min >= 60) {
            min = min - 60;
            hr = hr + 1;
            if (hr < 10) {
                document.getElementById("hr").innerHTML = "0" + hr;
            } else {
                document.getElementById("hr").innerHTML = hr;
            }

        }


        // document.getElementById("hr").innerHTML = "helo";
        console.log(sec)
    }, 1000);
}
function stopTimer() {
    clearInterval(clear)
}

function resetTimer() {
    clearInterval(clear);
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";

}