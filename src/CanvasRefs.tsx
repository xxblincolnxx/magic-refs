import { useRef, useState } from "react";
import { ColorChanging, ElementAPI } from "./ColorChanging";
import { v4 as uuidv4 } from "uuid";

export default function CanvasRefs() {
  const [thingsToRender, setThingsToRender] = useState<string[]>([]);
  const refs = useRef<Map<string, ElementAPI>>(new Map());

  const handleAddElement = () => {
    setThingsToRender((prev) => [uuidv4(), ...prev]);
  };

  const handleToggle = () => {
    for (let node of refs.current.values()) {
      node.toggle();
    }
  };

  return (
    <>
      <p>The useImperativeHandle Way</p>
      <div className="flex flex-row items-center gap-6">
        <button
          onClick={handleAddElement}
          className="bg-gray-300 px-3 py-2 rounded hover:bg-gray-400"
        >
          Add
        </button>
        <button
          onClick={handleToggle}
          className="bg-gray-300 px-3 py-2 rounded hover:bg-gray-400"
        >
          Toggle
        </button>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-6 max-w-md">
        {thingsToRender.map((key: string) => (
          <ColorChanging
            key={key}
            // If anyone knows how to get rid of this typescript flag, please message me
            ref={(node: ElementAPI) => {
              refs.current.set(key, node);
              return () => refs.current.delete(key);
            }}
          />
        ))}
      </div>
    </>
  );
}
