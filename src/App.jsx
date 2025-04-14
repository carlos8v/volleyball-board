import { Controls } from "./components/Controls";
import { Position } from "./components/Position";
import { PositionControls } from "./components/PositionControls";

import { useControls } from "./hooks/useControls";

import { positions } from "./data";

function App() {
  const { currentRotation, defensivePosition } = useControls();

  const currentPositions = positions[defensivePosition ? "receive" : "serve"];

  return (
    <main className="flex h-full min-h-dvh min-w-full items-center justify-center overflow-hidden bg-indigo-900">
      <div className="relative h-[500px] w-[500px] bg-white">
        <div className="absolute inset-0 grid grid-rows-3 border border-4 border-white">
          <div className="border-b-4 border-white bg-orange-600"></div>
          <div className="bg-amber-700/80"></div>
          <div className="bg-amber-700/80"></div>
        </div>
        {currentPositions[currentRotation - 1]
          .sort((a, b) => a.id - b.id)
          .map((props) => (
            <Position key={props.id} {...props} />
          ))}
      </div>
      <Controls />
      <PositionControls />
    </main>
  );
}

export default App;
