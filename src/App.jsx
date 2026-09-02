import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import EventCard from "./components/EventCard"

function App() {

  const[username,setUsername] = useState({
    name: "Alhagie",
  })

  const event = {
    id: 1,
    title: "Afro Music Festival",
    price: "D500",
    location: "Banjul, The Gambia",
    date: "10 September 2026",
    time: "8 PM - 11 PM",
    image: "/concert.webp"
  }
  return (
    <>
      <Navbar user = {username.name}/>
      <main>
        <Hero>
          <EventCard event={event}/>
        </Hero>
      </main>
    </>
  )
}

export default App
