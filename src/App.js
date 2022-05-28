
import './App.css';
import React, { useState } from "react"
import Todo from './components/todo';
import Timer from './components/Timer';
import Stopwatch from './components/Stopwatch';


function App() {

  return (
    <div className="App">
      {/* <Todo /> */}
      <Timer initialTime = {1} endTime = {100}/>
      {/* <Stopwatch /> */}
    </div>
  );
}

export default App;
