import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import usePasswordgenerator from './hooks';

function App() {
  
  const [checkboxdata, setCheckboxdata]=useState([
    {title:"include Uppercase letters", state:false}, 
    {title:"include lowercase letters", state:false}, 
    {title:"include numbers", state:false},
    {title:"include symbols ", state:false}
  ]

  )

  const [length, setLength]=useState(4);
 const handlecheckbox=(index)=>{
     const checkdata= [...checkboxdata];
     checkdata[index].state=!checkdata[index].state;
     setCheckboxdata(checkdata);
 }

 const {password, errormessage, generatepassword }=usePasswordgenerator();
 
 const [copied , setCopied]=useState(false);

 const handlecopy=()=>{
  navigator.clipboard.writeText(password);
  setCopied(true);
  setTimeout(()=>setCopied(false), 1000)
 }
 

  return (
    <div className="App">
     {password&&(<div className='pass-btn'>
       <p className='password'>{password}</p>
       <button className='copy' onClick={handlecopy}>{copied?"copied":"copy"}</button>
     </div>
     )}
     <div className='charlen'>
      <p>character Length</p>
      <p>{length}</p>
     </div>
     <div className='range'>
      <input type='range'  min="4" max="20" value={length} 
        onChange={(e)=> setLength(e.target.value)}
      />
      </div>
  <div className='checkboxx'>
    {
      checkboxdata.map((checkbox, index)=>{
        return (
        <div key={index}>
          <input  type='checkbox' onChange={()=>handlecheckbox(index)} />
          <label>{checkbox.title}</label>
        </div>
        )
      })
    }

  </div>
    
    {errormessage&&<div>{errormessage}</div>}

    <button className='generate' onClick={()=>generatepassword(checkboxdata, length)}>GENERATE PASSOWRD</button>

    </div>
  );
}

export default App;
