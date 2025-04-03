import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useToggleColors from "./useToggleColors";

export default function CanvasTrad() {
  const [toggled, setToggled] = useState(false);
  const [thingsToRender, setThingsToRender] = useState<string[]>([]);

  const handleAddElement = () => {
    setThingsToRender((prev) => [uuidv4(), ...prev]);
  };

  return (
    <>
      <p>This way passes toggled state as a prop.</p>
      <div className="flex flex-row items-center gap-6">
        <button
          onClick={handleAddElement}
          className="bg-gray-300 px-3 py-2 rounded hover:bg-gray-400"
        >
          Add
        </button>
        <button
          onClick={() => setToggled(!toggled)}
          className="bg-gray-300 px-3 py-2 rounded hover:bg-gray-400"
        >
          Toggle
        </button>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-6 max-w-md">
        {thingsToRender.map((thing) => {
          return <ColorChangingTrad key={thing} toggled={toggled} />;
        })}
      </div>
    </>
  );
}

const defaultClass = "bg-gray-300";

type ColorChangingProps = {
  toggled: boolean;
};

function ColorChangingTrad({ toggled }: ColorChangingProps) {
  const { currentClass, setSelection } = useToggleColors(defaultClass, toggled);

  return (
    <div className={`${currentClass} p-3 rounded-md`}>
      <select
        className="bg-transparent"
        name="toggle color"
        onChange={(e) => setSelection(e.target.value)}
      >
        <option value={defaultClass}>None</option>
        <option value="bg-green-300">Green</option>
        <option value="bg-red-300">Red</option>
        <option value="bg-blue-300">Blue</option>
      </select>
    </div>
  );
}
