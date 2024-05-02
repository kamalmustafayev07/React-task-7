import { useState } from 'react'
import './App.css'
import CustomButton from './CustomButton'

function App(){
  let [text,setText]=useState('Click me!');
  let [warnMessage,setWarnMessage]=useState('THIS IS A WARNING MESSAGE!');
  let [hint,setHint]=useState('THIS IS A HINT');  

  return (
    <>
    <div className='buttons-container'>
      <CustomButton text={text} warnMessage={warnMessage} hint={hint}/>
      <CustomButton text={text} warnMessage={warnMessage}/>
      <CustomButton text={text} hint={hint}/>  
    </div>
    </>
  )
}

export default App
