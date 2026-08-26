import Link from "next/link";

export default function Destinations() {
  const destinations = [
    {
      name: "Bhubaneswar",
      slug: "bhubaneswar",
    },
    {
      name: "Puri",
      slug: "puri",
    },
    {
      name: "Konark",
      slug: "konark",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-7">Choose Your Destination</h1>

      <div className="flex flex-col gap-4">
        {destinations.map((place) => (
          <Link
            key={place.slug}
            href={`/destinations/${place.slug}`}
            className="w-[215px] h-[110px] bg-white text-black rounded-2xl flex items-center justify-center text-xl hover:bg-gray-200 transition"
          >
            {place.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
