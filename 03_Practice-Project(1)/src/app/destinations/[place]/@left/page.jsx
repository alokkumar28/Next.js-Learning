import Image from "next/image";

const destinations = {
  bhubaneswar: {
    name: "Bhubaneswar",
    image: "/bhubaneswar.jpeg",
  },

  puri: {
    name: "Puri",
    image: "/puri.jpeg",
  },

  konark: {
    name: "Konark",
    image: "/konark.jpeg",
  },
};

export default async function Left({ params }) {
  const { place } = await params;

  const destination = destinations[place.toLowerCase()];

  if (!destination) {
    return <h1>Destination not found</h1>;
  }

  return (
    <>
      <h1 className="text-2xl mb-5">
        Welcome to {destination.name}! Discover amazing sights and culture here.
      </h1>

      <Image
        src={destination.image}
        alt={destination.name}
        width={300}
        height={200}
        className="w-[300px] h-[200px] object-cover rounded-lg"
      />
    </>
  );
}
