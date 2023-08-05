import "./index.css";

export default function App() {
  return (
    <div className="w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[5fr_1fr] bg-black">
      <div className="w-[1000px] bg-green-500">Sidebar</div>
      <div className="bg-red-500">Main Content</div>
      <div className="col-span-2 bg-yellow-500">Player</div>
    </div>
  );
}
