

function EventCard({event}){
  return(
    <>
      <div className="rounded-2xl overflow-hidden bg-white pt-24">

        {/* IMAGE SECTION */}
        <div>
          <img src={event.image} alt="event image" />
        </div>

        {/* Info SECTION */}
        <div>
          <h2>{event.location}</h2>

          <div className="flex justify-between items-center">
            <div>
              <h2>DATE</h2>
              <p>{event.date}</p>
            </div>
            

            <div>
              <h2>Time</h2>
              <p>{event.time}</p>
            </div>
          </div>
        </div>

      </div>
    </>    
  )
}

export default EventCard