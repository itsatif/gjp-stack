import React,{ useState } from 'react'
import axios from "axios"

export default function App() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [response,setResponse] = useState("")
  async function handleSubmit(e){
    e.preventDefault();
    let data = await axios.post("http://localhost:4000/login",{
      username : username,
      password:password
    });
    console.log(data.data);
    setResponse(data.data);
  }
  return (
    <div className='App'>
      <form>
        <h1>Login</h1>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button onClick={handleSubmit}>Login</button>
      </form>
      {JSON.stringify(response)}
    </div>
  )
}
