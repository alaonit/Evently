

function Navbar() {

  return (
    <nav className="bg-amber-100 fixed p-5 z-50 top-0 w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Reserved</h1>

        <div>
          <ul className="flex gap-3">
            <li><a href="#">Trending</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">More</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <img className="h-6 w-6 rounded-full" src="./public/profile.jpeg" alt="profile" />
          <p>Hi,Alhagie</p>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
