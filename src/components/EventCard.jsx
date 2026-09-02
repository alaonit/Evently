

function EventCard({event}){
  return(
    <>
      <div className="rounded-2xl overflow-hidden bg-white">

        {/* IMAGE SECTION */}
        <div>
          <img src={event.image} alt="event image" />
        </div>

        {/* Info SECTION */}
        <div>
          <h2>{event.location}</h2>
        </div>

      </div>
    </>    
  )
}

export default EventCard