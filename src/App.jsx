import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import EventCard from "./components/EventCard"

function App() {

  const[username,setUsername] = useState({
    name: "Alhagie",
  })

  const events = [
  {
    id: 1,
    title: "Afro Music Festival",
    price: "D500",
    location: "Banjul, The Gambia",
    date: "10 September 2026",
    time: "8 PM - 11 PM",
    image: "/concert.webp"
  },
  {
    id: 2,
    title: "Sunset Beach Live",
    price: "D350",
    location: "Kololi, The Gambia",
    date: "18 September 2026",
    time: "6 PM - 10 PM",
    image: "/concert2.webp"
  },
  {
    id: 3,
    title: "Afrobeats Night",
    price: "D600",
    location: "Senegambia, The Gambia",
    date: "25 September 2026",
    time: "9 PM - 2 AM",
    image: "/concert3.webp"
  },
  {
    id: 4,
    title: "Coastal Vibes Festival",
    price: "D450",
    location: "Cape Point, The Gambia",
    date: "3 October 2026",
    time: "5 PM - 11 PM",
    image: "/concert4.webp"
  },
  {
    id: 5,
    title: "Urban Sound Experience",
    price: "D750",
    location: "Bakau, The Gambia",
    date: "12 October 2026",
    time: "8 PM - 1 AM",
    image: "/concert5.webp"
  },
  {
    id: 6,
    title: "Gambia Music Fest",
    price: "D1000",
    location: "Bijilo, The Gambia",
    date: "24 October 2026",
    time: "7 PM - 2 AM",
    image: "/concert6.webp"
  }
]
  return (
    <>
      <Navbar user = {username.name}/>
      <main className="bg-">
        <Hero>
          <EventCard event={event}/>
        </Hero>
      </main>
    </>
  )
}

export default App
