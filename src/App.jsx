import { Controls } from "./components/Controls";
import { Position } from "./components/Position";

import { useControls } from "./hooks/useControls";

import { currentPositions } from "./data";

function App() {
  const { currentRotation } = useControls();

  return (
    <main className="flex min-h-dvh min-w-full items-center justify-center bg-indigo-900">
      <div className="relative h-[500px] w-[500px] bg-white">
        <div className="absolute inset-0 grid grid-rows-3 border border-4 border-white">
          <div className="border-b-4 border-white bg-orange-600"></div>
          <div className="bg-amber-700/80"></div>
          <div className="bg-amber-700/80"></div>
        </div>
        {currentPositions[currentRotation]
          .sort((a, b) => a.id - b.id)
          .map((props) => (
            <Position key={props.id} {...props} />
          ))}
      </div>
      <Controls />
    </main>
  );
}

export default App;
