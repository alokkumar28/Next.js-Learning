export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          About Our Travel Guide 🌍
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-8 mb-6">
          Welcome to our Travel Guide, your companion for discovering
          beautiful destinations around the world. We help travelers
          explore new places, discover exciting experiences, and plan
          memorable journeys.
        </p>

        <p className="text-lg md:text-xl text-gray-300 leading-8 mb-8">
          From popular tourist destinations to hidden gems, our goal is
          to provide useful information that makes your travel planning
          simple, enjoyable, and inspiring.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">🌎 Explore</h2>
            <p className="text-gray-400">
              Discover amazing destinations and new places around the world.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">✈️ Plan</h2>
            <p className="text-gray-400">
              Get useful information to make your travel planning easier.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">❤️ Experience</h2>
            <p className="text-gray-400">
              Create unforgettable memories wherever your journey takes you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}