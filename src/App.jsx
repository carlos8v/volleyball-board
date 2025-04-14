import { useEffect } from "react";
import { create } from "zustand";
import Mousetrap from "mousetrap";
import { CheckSquare, Square } from "react-feather";

import { classnames } from "./utils/classnames";
import { currentPositions } from "./data";

function Position({ player, position, from, to }) {
  const initialPosition = usePositionSettings((state) => state.initialPosition);

  return (
    <div
      className="absolute z-0 -translate-1/2 transition-[left,top] duration-[1s]"
      style={{
        left: `${initialPosition ? from.x : to.x}%`,
        top: `${initialPosition ? from.y : to.y}%`,
      }}
    >
      <div className="relative">
        <div className="absolute z-0 flex h-14 w-14 -translate-y-[20%] items-center justify-center">
          <span className="text-9xl font-extrabold text-white/50 select-none">
            {position}
          </span>
        </div>
      </div>
      <div
        className={classnames({
          "relative z-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-md shadow-black/80": true,
          [player.color]: true,
        })}
      >
        <span className="text-lg font-bold text-white uppercase select-none">
          {player.label}
        </span>
      </div>
    </div>
  );
}

function App() {
  const {
    initialPosition,
    toggleInitialPosition,
    currentRotation,
    nextRotation,
    previousRotation,
  } = usePositionSettings();

  useEffect(() => {
    Mousetrap.bind("left", () => previousRotation());
    Mousetrap.bind("right", () => nextRotation());

    return () => {
      Mousetrap.unbind("left");
      Mousetrap.unbind("right");
    };
  }, []);

  return (
    <main className="flex min-h-dvh min-w-full items-center justify-center bg-indigo-900">
      <div className="relative h-[500px] w-[500px] bg-white">
        <div className="absolute inset-0 grid grid-rows-3 border border-4 border-white">
          <div className="border-b-4 border-white bg-orange-600"></div>
          <div className="bg-amber-700/80"></div>
          <div className="bg-amber-700/80"></div>
        </div>
        {currentPositions[currentRotation]
          // .sort((a, b) => a.player.label - b.player.label)
          .map((props) => (
            <Position key={props.position} {...props} />
          ))}
      </div>
      <button
        onClick={() => toggleInitialPosition()}
        className="fixed top-10 left-1/2 flex -translate-1/2 cursor-pointer items-center rounded bg-white px-4 py-2 text-xl font-medium text-indigo-900"
      >
        {initialPosition ? (
          <CheckSquare className="mr-1 h-5 w-5" />
        ) : (
          <Square className="mr-1 h-5 w-5" />
        )}
        Posição inicial
      </button>
    </main>
  );
}

const usePositionSettings = create((set, get) => ({
  currentRotation: 0,
  previousRotation: () => {
    const prev = get().currentRotation;
    if (prev - 1 < 0) {
      return set({ currentRotation: 6 });
    }

    return set({ currentRotation: prev - 1 });
  },
  nextRotation: () => {
    const prev = get().currentRotation;
    if (prev + 1 >= 6) {
      return set({ currentRotation: 0 });
    }

    return set({ currentRotation: prev + 1 });
  },
  initialPosition: true,
  toggleInitialPosition: () =>
    set(({ initialPosition: prev }) => ({ initialPosition: !prev })),
}));

export default App;
