export default function stopwatch(timer, sec){ 
    const myInterval = setInterval(() => { 
        if(sec >= 1){
        sec--
        timer.textContent = `0:${sec >= 10 ? sec: "0"+sec}`
        }
        if(sec === 0){
            clearInterval(myInterval)
        }
    }, 1000)
}




