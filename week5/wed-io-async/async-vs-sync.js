// sync code - code that runs predictably by time - no i/o

// console.log(1);
// console.log(2);
// console.log(3);

// if (true) {
//   console.log(4);
// }


// let file = getFileFromDrive("C:/file.txt")  // async

// let data = getWeather(apiUrl); //async 

// setTimeout - mimicks async

function returnsCurrentTime(){
    return "midnight";
}


function getTime(){
    let thisTime;
    let delay = 2000
    setTimeout(() => (thisTime = returnsCurrentTime()), delay); // mimicking async
    return thisTime;
}

let time;

time = getTime();

console.log("The time is ", time)