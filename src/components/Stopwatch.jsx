import React from 'react'

const Stopwatch = () => {
    
    const [watch,setWatch] = React.useState(0)
    const [timerId,setTimerId] = React.useState(null)
    const start = ()=>{
        if(!timerId){
            let id = setInterval(()=>{
                setWatch((prev)=>prev+1)
            },1000)
            setTimerId(id) 
        }
           
    }
    const pause = ()=>{
        clearInterval(timerId)
        setTimerId(null)
    }
    const reset = ()=>{
        clearInterval(timerId)
        setTimerId(null)
        setWatch(0)
    }
  return (
    <div>
        <h2>Stopwatch</h2>
        <h3>{watch}</h3>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch