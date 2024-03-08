import React, { useState } from "react";
import ParentContainer from "./Components/ParentContainer";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import './App.css'


function App() {
   const [data,setData] = useState('');
  function handleClick(val){
   if(val === '='){
    setData(eval(data));
  }else if(val === 'C'){
     setData('');
  }else if(val === '<x'){
    let res = data+"";
    setData(res.slice(0,-1))
  }else{
    setData(data+val);
  }
}

  return (
    <>
    {/* <h1>Calculator</h1> */}
    <ParentContainer >
      
      <Display data={data}/>
      <Buttons btnClick={handleClick}/>
    </ParentContainer></>
  );
}

export default App;

                                                                        