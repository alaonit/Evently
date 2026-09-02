
import EventCard from "./EventCard"

function Hero({children}) {
 
  return (
    <section className="pt-24 pl-10 pr-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
      </div>
    </section>
  )
}

export default Hero
