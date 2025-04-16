import { useControls } from "../hooks/useControls";
import { classnames } from "../utils/classnames";
import { Timeline } from "./ui/timeline";

export function AnimationControls() {
  const { isPlaying, animationFrame, setAnimationFrame, keyframes } =
    useControls();

  return (
    <div
      className={classnames({
        "fixed bottom-0 left-1/2 z-10 mb-4 w-[300px] -translate-x-1/2 rounded-lg bg-white p-3 transition duration-200": true,
        "animate-in slide-in-from-bottom": isPlaying,
        "opacity-0": !isPlaying,
      })}
    >
      <small className="mb-2 block">Linha do tempo</small>
      <Timeline
        max={keyframes}
        step={1}
        value={[animationFrame]}
        onValueChange={setAnimationFrame}
      />
    </div>
  );
}
