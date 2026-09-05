import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventCard from "./components/EventCard";
import Event from "./components/Event";

function App() {
  const [username, setUsername] = useState({
    name: "Alhagie",
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedSection, setSelectedSection] = useState("Trending");

  const [events,setEvents] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8000/api/events").
    then((response)=> response.json()).
    then((data)=>{setEvents(data)}).
    catch((error)=>console.log(error))
  },[])

  const filtered = events.filter((event) => {
    if (selectedCategory === "All") {
      return event;
    } else {
      return event.category === selectedCategory;
    }
  });

  return (
    <>
      <Navbar
        setSelectedSection={setSelectedSection}
        selectedSection={selectedSection}
        user={username.name}
      />
      <main
        className="bg-cover bg-no-repeat bg-center min-h-screen"
        style={{ background: "url('bg-image.png')" }}
      >
        <Hero />
        <Event
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        >
          {filtered.map((event) => {
            return <EventCard key={event.id} event={event} />;
          })}
        </Event>
      </main>
    </>
  );
}

export default App;
