import React, { useEffect } from 'react'


const Timer = ({initialTime, endTime}) => {

  const [startTimer,setStartTimer] = React.useState(initialTime)
  
  useEffect(()=>{
    let id = setInterval(()=>{
      if(startTimer>=Number(endTime)){
        clearInterval(id)
      }
      else{
        setStartTimer((prev)=> prev+1)
      }
      
    },100)

    return()=>{
      clearInterval(id)
    }
  },[startTimer])
  return (
    <div>
      <h1> Timer </h1>
      <h2> {startTimer} </h2> 
    </div>
  )
}

export default Timer