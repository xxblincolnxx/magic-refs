import { useImperativeHandle, RefObject } from "react";
import useToggleColors from "./useToggleColors";

export interface ElementAPI {
  toggle: () => void;
}

type Props = {
  ref: RefObject<ElementAPI>;
};

const defaultClass = "bg-gray-300";

export const ColorChanging = ({ ref }: Props) => {
  const { toggled, currentClass, setSelection, setToggled } =
    useToggleColors(defaultClass);

  useImperativeHandle(ref, () => {
    return {
      toggle() {
        setToggled(!toggled);
      },
    };
  });

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
};
