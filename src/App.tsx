import { useState } from "react";
import CanvasRefs from "./CanvasRefs";
import CanvasTrad from "./CanvasTrad";

function App() {
  const [showRefApproach, setShowRefApproach] = useState(false);
  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <button
        onClick={() => setShowRefApproach(!showRefApproach)}
        className="bg-black text-white px-3 py-2 rounded hover:bg-gray-700"
      >
        Switch Approach
      </button>
      <hr />
      {showRefApproach ? <CanvasRefs /> : <CanvasTrad />}
    </main>
  );
}

export default App;
