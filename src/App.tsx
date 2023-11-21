import React from 'react';
import Stag0 from './pages/Stag0';
import {useState} from 'react'
import Terminal1 from './components/Terminal1';



function App() {
  const [time, setTime] = useState("");
  const [cmd, setCmd] = useState("");
  const [labelColor, setLabelColor] = useState("");
  return (   
    <> 
    <div className='Appy'>   
    <div style={{"display":"flex"}}>
    <div className='foot_mark'>
      <Stag0 cmd={setCmd} clr={labelColor} t={time}></Stag0>
    <div>
    <Terminal1 c={cmd} sclr={setLabelColor} st={setTime}></Terminal1>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default App;
