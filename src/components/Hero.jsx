

function Hero() {
 
  return (
    <section className="pt-24 px-10">

      <div className="flex justify-center">
        <div className="flex align-center justify-center pt-10 pb-20">
          <div>
            <img className="h-100 w-90 object-cover rounded-sm"  src="./hero-image.jpg" alt="hero image" />
          </div>
          

          <div className="text-start mt-3 ml-15">
            <span>
              <p className="text-purple-600 mb-2 font-bold">Gambian Festivals 2026</p>
              <span className="block text-6xl font-bold tracking-wide">EVERY EVENT IN </span>
              <span className="text-purple-700 block text-6xl font-bold tracking-wide">ONE PLACE</span>
              <button className="bg-purple-600 border-none rounded-full p-3 text-white font-bold mt-3 cursor-pointer">Book Event</button>
            </span>

            <div className="mt-3 rounded-md">
              <p className="p-10 font-bold text-white bg-gray-400 rounded-md">Up for some fun this summer?</p>
            </div>
          </div>          
        </div>
      </div>
    </section>
  )
}

export default Hero
