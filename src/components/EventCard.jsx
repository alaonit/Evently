function EventCard({ event }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white">

      {/* IMAGE SECTION */}
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={event.image}
          alt="event"
        />

        {/* ONLY title + price on image */}
        <div className="flex justify-between items-center gap-4 absolute top-4 left-4 right-4 text-white">
          <h2 className=" bg-blue-600 font-bold p-1.5 rounded-lg">{event.title}</h2>
          <p className=" bg-blue-600 font-bold p-1.5 rounded-lg">{event.price}</p>
        </div>
      </div>

      {/* INFO SECTION BELOW IMAGE */}
      <div className="p-4 bg-gray-300">
        <h2 className="font-bold">{event.location}</h2>

        <div className="flex justify-between mt-4">
          <div>
            <h3 className="font-semibold text-white">DATE</h3>
            <p>{event.date}</p>
          </div>

          <div>
            <h3 className="font-semibold text-white">TIME</h3>
            <p>{event.time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard