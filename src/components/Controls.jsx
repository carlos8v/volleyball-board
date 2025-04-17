import React, { useEffect, useState } from "react";
import { MapPin, Hash, Shield, HelpCircle, Play, Pause } from "react-feather";

import { NumberHelper } from "./Help/NumberHelper";
import { DefenceHelper } from "./Help/DefenceHelper";
import { PositionHelper } from "./Help/PositionHelper";

import { useControls } from "../hooks/useControls";

import { classnames } from "../utils/classnames";
import { bindEvents } from "../utils/events";

export function Controls() {
  const [helperIdx, setHelperIdx] = useState(-1);

  const {
    showPosition,
    toggleShowPosition,
    showNumbers,
    isPlaying,
    playAnimations,
    toggleShowNumbers,
    defensivePosition,
    toggleDefensivePosition,
  } = useControls();

  useEffect(() => {
    const cleanup = bindEvents([
      {
        key: "p",
        cb: () => playAnimations(),
      },
      {
        key: "1",
        cb: () => !isPlaying && toggleShowPosition(),
      },
      {
        key: "2",
        cb: () => !isPlaying && toggleDefensivePosition(),
      },
      {
        key: "3",
        cb: () => toggleShowNumbers(),
      },
    ]);

    return cleanup;
  }, [
    isPlaying,
    playAnimations,
    toggleShowPosition,
    toggleDefensivePosition,
    toggleShowNumbers,
  ]);

  const controls = [
    {
      id: "position",
      keyMap: 1,
      active: showPosition,
      disabled: isPlaying,
      Icon: (
        <MapPin
          className={classnames({
            "h-6 w-6 transition": true,
            "text-white": showPosition && !isPlaying,
          })}
        />
      ),
      wrapper: PositionHelper,
      onClick: toggleShowPosition,
    },
    {
      id: "defensive",
      keyMap: 2,
      disabled: isPlaying,
      active: defensivePosition,
      Icon: (
        <Shield
          className={classnames({
            "h-6 w-6 transition": true,
            "text-white": defensivePosition && !isPlaying,
          })}
        />
      ),
      wrapper: DefenceHelper,
      onClick: toggleDefensivePosition,
    },
    {
      id: "numbers",
      keyMap: 3,
      active: showNumbers,
      disabled: false,
      Icon: (
        <Hash
          className={classnames({
            "h-6 w-6 transition": true,
            "text-white": showNumbers,
          })}
        />
      ),
      wrapper: NumberHelper,
      onClick: toggleShowNumbers,
    },
  ];

  return (
    <div className="fixed top-0 left-1/2 z-10 mt-4 flex -translate-x-1/2 gap-2 rounded-lg bg-white p-2">
      <button
        className={classnames({
          "relative cursor-pointer rounded-md p-3 transition": true,
          "hover:bg-zinc-200": !isPlaying,
          "bg-indigo-900": isPlaying,
        })}
        onClick={() => playAnimations()}
      >
        {isPlaying ? (
          <Pause
            className={classnames({
              "h-6 w-6 transition": true,
              "text-white": isPlaying,
            })}
          />
        ) : (
          <Play
            className={classnames({
              "h-6 w-6 transition": true,
              "text-white": isPlaying,
            })}
          />
        )}
      </button>
      <span className="my-2 w-px bg-zinc-200"></span>
      {controls.map((props, index) => (
        <ControlButton
          key={props.id}
          {...props}
          wrapperActive={helperIdx === index}
          onWrapperClick={() => setHelperIdx(index + 1)}
        />
      ))}
      <span className="my-2 w-px bg-zinc-200"></span>
      <button
        className="relative cursor-pointer rounded-md p-3 transition hover:bg-zinc-200"
        onClick={() => setHelperIdx(0)}
      >
        <HelpCircle className="h-6 w-6" />
      </button>
    </div>
  );
}

function ControlButton({
  active,
  disabled,
  keyMap,
  Icon,
  onClick,
  wrapper,
  wrapperActive,
  onWrapperClick,
}) {
  const Wrapper = wrapper;

  return (
    <Wrapper active={wrapperActive} onNext={onWrapperClick}>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={classnames({
          "relative cursor-pointer rounded-md p-3 transition disabled:cursor-not-allowed disabled:bg-zinc-200": true,
          "hover:bg-zinc-200": !active,
          "bg-indigo-900": active,
        })}
      >
        {Icon}
        <span
          className={classnames({
            "absolute right-1 bottom-0 text-sm font-thin transition select-none": true,
            "text-white": active && !disabled,
            "text-zinc-600": !active,
          })}
        >
          {keyMap}
        </span>
      </button>
    </Wrapper>
  );
}
