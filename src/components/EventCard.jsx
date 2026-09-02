function EventCard({ event }) {
  return (
    <>
      <div className="rounded-2xl overflow-hidden bg-white pt-24 pl-10 pr-10">
        {/* IMAGE SECTION */}
        <div className="relative rounded-2xl overflow-hidden">
          <img className="w-full" src={event.image} alt="event image" />

          {/* Info SECTION */}
          <div className="absolute bottom-4 left-4  font-bold bg-white80 p-4 rounded-xl">
            <h2>{event.location}</h2>

            <div className="flex justify-between items-center">
              <div className="mt-2">
                <h2>DATE</h2>
                <p>{event.date}</p>
              </div>

              <div className="mt-2">
                <h2>Time</h2>
                <p>{event.time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
