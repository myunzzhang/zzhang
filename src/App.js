import { useState } from 'react';
import './App.css';


function App() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const onSubmit = (e) => {
    //form은 전송후에 refresh(새로고침)
    e.preventDefault();
    console.log(username, password)
  }
  return (
  <>
  <form onSubmit={onSubmit}>
    <input placeholder="Usrname" value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br/>
    <input placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
    <button type='submit'>Update</button>
    </form>
  </>
  
  );
}

export default App;
