
import { useEffect, useState } from 'react'
import Paths from './routes/Paths';
function App() {
  const [count,setCount] =useState(0);
  const [count2,setCount2] =useState(0);

  useEffect (()=>{
    console.log("user effect foi chamado") 
  })


  function boasvindas(){
    alert("boasvindo ao React Hooks! Count: {count}  ")
  }

  useEffect(()=>{
    boasvindas()

    console.log("user effect foi chamado novamente") 
  },[])

  useEffect(()=>{
    console.log(`use Effect foi chamado somente por depencia`)
  },[count])

  return (
    <>
     
      <h1>Aprendo user effet</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum praesentium suscipit error ex ab eveniet nesciunt magnam optio qui illum sapiente, doloremque perferendis modi assumenda quis vitae dicta nam laboriosam!</p>
      <h2>Contador: {count}</h2>
      <button onClick={( )=> setCount(count+1)}></button>
      <h2>Contador: {count}</h2>

      <button onClick={( )=> setCount2(count2+1)}></button>
      <Paths />
    </>
  )
}

export default App
