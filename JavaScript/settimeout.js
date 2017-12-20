// setTimeut and setInterval

/*

1. setTimeout allows you to execute statements ONCE after a given period of time.

        setTimeout(function, seconds)

2. setInterval allows you to execute statements REPEATEDLY after a given interval.

        setInterval(function, seconds)
        where seconds is the 

        stop by using the clearInterval function, and requires an id of the interval you want to stop.

*/

let counter = 0;
let setIntervalId = setInterval(function(){
    counter += 1;
    console.log('tik tock');
    if(counter===5){
        console.log('clearing the setInterval');
        clearInterval(setIntervalId);
    }
})

// there is also clearTimeout ... 

var timeID = window.setTimeout(someFunction, delayInMilliseconds);
// the setTimeout function returns a unique timestamp and unique IDs so you can refer to it later - really only want to do that if you are going to cancel it.

window.clearTimeout(timeID);

