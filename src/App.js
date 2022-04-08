import React, { useState } from 'react'
import Card from './Component/Card'
import "./App.css"

function App() {
const [cardno,setCardno]=useState("1234 5555  8888")
const [name,setName]=useState("ritesh")
const [date,setDate]=useState("08/28")
const [cvv,setCvv]=useState("08/28")

function handleChange(e){
   setCardno(e.target.value)
}


function handleName(e){
  setName(e.target.value)
}
function handledate(e){
  setDate(e.target.value)
}
function handlecvv(e){
  setCvv(e.target.value)
}
  return (
    <>
    <div className='appmain' >
     
      <Card cardno={cardno} name={name} date={date} cvv={cvv}/>


      
      <div className='form'>
        <label>CARD NUMBER</label><br/>
        
        < input placeholder='Enter card no' value={cardno} maxLength={16} onChange={handleChange} /><br/>
        <label> CARD HOLDER NAME </label><br/>
        
<input placeholder='Enter Name' value={name} onChange={handleName} /><br/>
<label>EX DATE</label><br/>
<input placeholder='EX Date' value={date} onChange ={handledate}/><br/>
<label>CVV NUMBER</label><br/>
<input placeholder='CVV Number' value={cvv} onChange ={handlecvv}/>
      </div>
      </div>

    
    </>
    
  )
}

export default App