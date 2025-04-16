import { useEffect } from "react";
import { useControls } from "../hooks/useControls";
import { classnames } from "../utils/classnames";
import { bindEvents } from "../utils/events";
import { Timeline } from "./ui/timeline";

export function AnimationControls() {
  const { isPlaying, animationFrame, setAnimationFrame, keyframes } =
    useControls();

  useEffect(() => {
    if (!isPlaying) return;

    const cleanup = bindEvents([
      {
        key: "left",
        cb: () => setAnimationFrame(Math.max(animationFrame - 1, 0)),
      },
      {
        key: "right",
        cb: () => setAnimationFrame(Math.min(animationFrame + 1, keyframes)),
      },
    ]);

    return cleanup;
  }, [isPlaying, setAnimationFrame, animationFrame, keyframes]);

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
