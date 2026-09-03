

function Navbar({user}) {

  return (
    <nav className="bg-white fixed p-5 z-50 top-0 w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-purple-600 text-2xl">Reserved</h1>

        <div>
          <ul className="flex gap-3 font-bold ">
            <li><a className="border-b-2 border-purple-600" href="#">Trending</a></li> 
            <li><a className="border-b-2 border-purple-600" href="#">Events</a></li>
            <li><a className="border-b-2 border-purple-600 " href="#">More</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <img className="h-6 w-6 rounded-full" src="./public/profile.jpeg" alt="profile" />
          <p>Hi,{user}</p>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
