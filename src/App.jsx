import { Controls } from "./components/Controls";
import { Position } from "./components/Position";
import { PositionControls } from "./components/PositionControls";
import { AnimationControls } from "./components/AnimationControls";

import { useControls } from "./hooks/useControls";

import { getPositions } from "./utils/positions";

function App() {
  const { isPlaying, currentRotation, defensivePosition } = useControls();

  return (
    <main className="flex h-full min-h-dvh min-w-full items-center justify-center overflow-hidden bg-indigo-900">
      <div className="relative h-[500px] w-[500px] bg-white">
        <div className="absolute inset-0 grid grid-rows-3 border border-4 border-white">
          <div className="border-b-4 border-white bg-orange-600/90"></div>
          <div className="bg-orange-500/75"></div>
          <div className="bg-orange-500/75"></div>
        </div>
        {getPositions({
          currentRotation,
          defensivePosition,
        })
          .sort((a, b) => a.id - b.id)
          .map((props) => (
            <Position key={props.id} {...props} />
          ))}
      </div>
      <Controls />
      {isPlaying ? <AnimationControls /> : <PositionControls />}
    </main>
  );
}

export default App;
