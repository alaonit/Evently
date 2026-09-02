import { useState } from "react"
import Navbar from "./components/Navbar"

function App() {

  const[username,setUsername] = useState({
    name: "Alhagie",
  })
 
  return (
    <>
      <main>
        <Navbar user = {username.name}/>
      </main>
    </>
  )
}

export default App
