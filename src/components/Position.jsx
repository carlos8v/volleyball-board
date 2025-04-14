import { useControls } from "../hooks/useControls";
import { classnames } from "../utils/classnames";

export function Position({ color, label, position, from, to }) {
  const showPosition = useControls((state) => state.showPosition);
  const showNumbers = useControls((state) => state.showNumbers);

  return (
    <div
      className="absolute z-0 -translate-1/2 transition-[left,top] duration-[1s]"
      style={{
        left: `${showPosition ? to.x : from.x}%`,
        top: `${showPosition ? to.y : from.y}%`,
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
