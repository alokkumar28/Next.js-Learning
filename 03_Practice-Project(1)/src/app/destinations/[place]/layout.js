export default function Layout({ children, left, right }) {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-10">
      <div className="grid grid-cols-2 gap-20 max-w-6xl mx-auto">
        <div>{left}</div>

        <div>{right}</div>
      </div>

      {children}
    </div>
  );
}
