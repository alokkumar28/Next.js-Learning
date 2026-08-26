const destinations = {
  bhubaneswar: {
    name: "Bhubaneswar",
    description:
      "Bhubaneswar is the capital of Odisha and is famous for its ancient temples, rich history, beautiful architecture, and vibrant culture.",
  },

  puri: {
    name: "Puri",
    description:
      "Puri is famous for the Jagannath Temple, beautiful beaches, and the annual Rath Yatra.",
  },

  konark: {
    name: "Konark",
    description:
      "Konark is famous for the magnificent Sun Temple, known for its incredible stone architecture and sculptures.",
  },
};

export default async function Right({ params }) {
  const { place } = await params;

  const destination = destinations[place.toLowerCase()];

  if (!destination) {
    return <h1>Destination not found</h1>;
  }

  return (
    <>
      <h2 className="text-2xl mb-5">Description</h2>

      <p className="text-lg leading-8">{destination.description}</p>
    </>
  );
}
