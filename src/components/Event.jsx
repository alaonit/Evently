function Event({ children, setSelectedCategory, selectedCategory }) {
  return (
    <section className="px-5 py-16">
      <div className="mb-8">
        <p className="text-purple-600 font-bold tracking-widest text-sm">
          DISCOVER EVENTS
        </p>

        <h2 className="text-6xl font-bold mt-2">Events Near You</h2>

        <p className="text-gray-500 mt-2">
          Explore concerts, festivals and experiences happening around The
          Gambia.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setSelectedCategory("All")}
          className={
            selectedCategory === "All"
              ? "bg-purple-600 text-white px-5 py-2 rounded-full cursor-pointer"
              : "bg-white text-gray-700 px-5 py-2 rounded-full cursor-pointer"
          }
        >
          All
        </button>

        <button
          onClick={() => setSelectedCategory("Concert")}
          className={
            selectedCategory === "Concerts"
              ? "bg-purple-600 text-white px-5 py-2 rounded-full cursor-pointer"
              : "bg-white text-gray-700 px-5 py-2 rounded-full cursor-pointer"
          }
        >
          Concerts
        </button>

        <button
          onClick={() => setSelectedCategory("Festival")}
          className={
            selectedCategory === "Festivals"
              ? "bg-purple-600 text-white px-5 py-2 rounded-full cursor-pointer"
              : "bg-white text-gray-700 px-5 py-2 rounded-full cursor-pointer"
          }
        >
          Festivals
        </button>

        <button
          onClick={() => setSelectedCategory("Sport")}
          className={
            selectedCategory === "Sports"
              ? "bg-purple-600 text-white px-5 py-2 rounded-full cursor-pointer"
              : "bg-white text-gray-700 px-5 py-2 rounded-full cursor-pointer"
          }
        >
          Sports
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
}

export default Event;
