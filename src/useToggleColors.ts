import { useState, useEffect } from "react";

export default function useToggleColors(
  defaultClass: string,
  externalToggled: boolean = false
) {
  const [toggled, setToggled] = useState<boolean>(externalToggled);
  const [currentClass, setCurrentClass] = useState<string>(defaultClass);
  const [selection, setSelection] = useState<string>(defaultClass);

  useEffect(() => {
    setToggled(externalToggled);
  }, [externalToggled]);

  useEffect(() => {
    if (toggled) {
      setCurrentClass(selection);
    } else {
      setCurrentClass(defaultClass);
    }
  }, [toggled]);

  return { toggled, currentClass, setSelection, setToggled } as const;
}
