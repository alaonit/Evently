function Navbar({ user, selectedSection, setSelectedSection }) {
  return (
    <nav className="bg-white fixed p-5 z-50 top-0 w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-purple-600 text-2xl cursor-pointer">
          Reserved
        </h1>

        <div>
          <ul className="flex gap-3 font-bold ">
            <li>
              <a
                onClick={() => setSelectedSection("Trending")}
                className={
                  selectedSection === "Trending"
                    ? "cursor-pointer border-b-2 border-b-purple-600"
                    :"text-gray-700 cursor-pointer"
                }
                href="#"
              >
                Trending
              </a>
            </li>
            <li>
              <a
                onClick={() => setSelectedSection("Events")}
                className={
                  selectedSection === "Events"
                    ? "cursor-pointer border-b-2 border-b-purple-600"
                    : "text-gray-700 cursor-pointer"
                }
                href="#"
              >
                Events
              </a>
            </li>
            <li>
              <a
                onClick={() => setSelectedSection("More")}
                className={
                  selectedSection === "More"
                    ? "cursor-pointer border-b-2 border-b-purple-600"
                    : "text-gray-700 cursor-pointer"
                }
                href="#"
              >
                More
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <img
            className="h-6 w-6 rounded-full"
            src="./public/profile.jpeg"
            alt="profile"
          />
          <p>Hi,{user}</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
