
import EventCard from "./EventCard"

function Hero({children}) {
 
  return (
    <section className="pt-24 px-10">
      <div className="flex align-center justify-center pt-10 pb-20">
        <span className="text-5xl font-bold tracking-wide text-center">
          <span>EVERY EVENT IN </span>
          <span className="text-purple-700">ONE PLACE</span>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  )
}

export default Hero
