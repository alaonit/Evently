import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import EventCard from "./components/EventCard"
import Event from "./components/Event"

function App() {

  const[username,setUsername] = useState({
    name: "Alhagie",
  })

  const [selectedCategory, setSelectedCategory] = useState("All")

  const [selectedSection,setSelectedSection] = useState("Trending")

  const events = [
  {
    id: 1,
    title: "Afro Music Festival",
    price: "D500",
    category: "Festival",
    location: "Banjul, The Gambia",
    date: "10 September 2026",
    time: "8 PM - 11 PM",
    image: "/concert.webp"
  },
  {
    id: 2,
    title: "Sunset Beach Live",
    category: "Festival",
    price: "D350",
    location: "Kololi, The Gambia",
    date: "18 September 2026",
    time: "6 PM - 10 PM",
    image: "/concert2.jpg"
  },
  {
    id: 3,
    title: "Afrobeats Night",
    category: "Festival",
    price: "D600",
    location: "Senegambia, The Gambia",
    date: "25 September 2026",
    time: "9 PM - 2 AM",
    image: "/concert3.jpg"
  },
  {
    id: 4,
    title: "Coastal Vibes Festival",
    category: "Festival",
    price: "D450",
    location: "Cape Point, The Gambia",
    date: "3 October 2026",
    time: "5 PM - 11 PM",
    image: "/concert4.jpg"
  },
  {
    id: 5,
    title: "Urban Sound Experience",
    category: "Festival",
    price: "D750",
    location: "Bakau, The Gambia",
    date: "12 October 2026",
    time: "8 PM - 1 AM",
    image: "/concert5.jpg"
  },
  {
    id: 6,
    title: "Gambia Music Fest",
    category: "Festival",
    price: "D1000",
    location: "Bijilo, The Gambia",
    date: "24 October 2026",
    time: "7 PM - 2 AM",
    image: "/concert6.webp"
  }
]

  const filtered = events.filter((event)=>{
      if(selectedCategory === "All"){
      return event
    }else{
      return event.category === selectedCategory
    }
    
  })

  return (
    <>
      <Navbar setSelectedSection={setSelectedSection} selectedSection={selectedSection} user = {username.name}/>
      <main className="bg-cover bg-no-repeat bg-center min-h-screen" style={{background: "url('bg-image.png')"}}>
        <Hero/> 
        <Event selectedCatergory={selectedCategory} setSelectedCategory={setSelectedCategory}>
          {filtered.map((event)=>{
            return <EventCard key={event.id} event={event}/>
          })}
        </Event>
      </main>
    </>
  )
}

export default App
