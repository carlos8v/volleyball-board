import { useControls } from "../hooks/useControls";
import { classnames } from "../utils/classnames";

export function Position({ color, label, position, from, to, animations }) {
  const { animationFrame, isPlaying, showPosition, showNumbers } =
    useControls();

  let playerPosition = from;

  if (isPlaying) {
    if (!animations) {
      playerPosition = to;
    } else {
      playerPosition =
        animations[animationFrame] ?? animations[animations.length - 1];
    }
  } else if (showPosition) {
    playerPosition = to;
  }

  return (
    <div
      className="absolute z-0 -translate-1/2 transition-[left,top] duration-[1s]"
      style={{
        left: `${playerPosition.x}%`,
        top: `${playerPosition.y}%`,
      }}
    >
      {position ? (
        <div className="relative">
          <div
            className={classnames({
              "absolute z-0 flex h-14 w-14 items-center justify-center transition": true,
              "opacity-0": !showNumbers,
            })}
          >
            <span className="text-9xl font-extrabold text-white/50 select-none">
              {position}
            </span>
          </div>
        </div>
      ) : null}
      <div
        className={classnames({
          "relative z-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-md shadow-black/80": true,
          [color]: true,
        })}
      >
        <span className="text-lg font-bold text-white uppercase select-none">
          {label}
        </span>
      </div>
    </div>
  );
}
