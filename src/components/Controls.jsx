import { useEffect } from "react";
import { MapPin, Hash, Shield } from "react-feather";

import { useControls } from "../hooks/useControls";

import { classnames } from "../utils/classnames";
import { bindEvents } from "../utils/events";

export function Controls() {
  const {
    showPosition,
    toggleShowPosition,
    showNumbers,
    toggleShowNumbers,
    defensivePosition,
    toggleDefensivePosition,
  } = useControls();

  useEffect(() => {
    const cleanup = bindEvents([
      {
        key: "1",
        cb: () => toggleShowPosition(),
      },
      {
        key: "2",
        cb: () => toggleDefensivePosition(),
      },
      {
        key: "3",
        cb: () => toggleShowNumbers(),
      },
    ]);

    return cleanup;
  }, [toggleShowPosition, toggleDefensivePosition, toggleShowNumbers]);

  const controls = [
    {
      id: "position",
      title: "Mostrar posição",
      active: showPosition,
      Icon: (
        <MapPin
          className={classnames({
            "h-6 w-6 transition": true,
            "text-white": showPosition,
          })}
        />
      ),
      cb: () => toggleShowPosition(),
    },
    {
      id: "defensive",
      title: "Posição de defesa",
      active: defensivePosition,
      Icon: (
        <Shield
          className={classnames({
            "h-6 w-6 transition": true,
            "text-white": defensivePosition,
          })}
        />
      ),
      cb: () => toggleDefensivePosition(),
    },
    {
      id: "numbers",
      title: "Mostrar números",
      active: showNumbers,
      Icon: (
        <Hash
          className={classnames({
            "h-6 w-6 transition": true,
            "text-white": showNumbers,
          })}
        />
      ),
      cb: () => toggleShowNumbers(),
    },
  ];

  return (
    <div className="fixed top-0 left-1/2 z-10 mt-4 flex -translate-x-1/2 gap-2 rounded-lg bg-white p-2">
      {controls.map(({ id, title, active, Icon, cb }, idx) => (
        <button
          key={id}
          type="button"
          title={title}
          onClick={() => cb()}
          className={classnames({
            "relative cursor-pointer rounded-md p-3 transition": true,
            "hover:bg-zinc-200": !active,
            "bg-indigo-900": active,
          })}
        >
          {Icon}
          <span
            className={classnames({
              "absolute right-1 bottom-0 text-sm font-thin transition select-none": true,
              "text-white": active,
              "text-zinc-600": !active,
            })}
          >
            {idx + 1}
          </span>
        </button>
      ))}
    </div>
  );
}
