import React, { useEffect, useState } from "react";
import { MapPin, Hash, Shield, HelpCircle } from "react-feather";

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
      active: showPosition,
      Icon: (
        <MapPin
          className={classnames({
            "h-6 w-6 transition": true,
            "text-white": showPosition,
          })}
        />
      ),
      wrapper: PositionHelper,
      cb: () => toggleShowPosition(),
    },
    {
      id: "defensive",
      active: defensivePosition,
      Icon: (
        <Shield
          className={classnames({
            "h-6 w-6 transition": true,
            "text-white": defensivePosition,
          })}
        />
      ),
      wrapper: DefenceHelper,
      cb: () => toggleDefensivePosition(),
    },
    {
      id: "numbers",
      active: showNumbers,
      Icon: (
        <Hash
          className={classnames({
            "h-6 w-6 transition": true,
            "text-white": showNumbers,
          })}
        />
      ),
      wrapper: NumberHelper,
      cb: () => toggleShowNumbers(),
    },
  ];

  return (
    <div className="fixed top-0 left-1/2 z-10 mt-4 flex -translate-x-1/2 gap-2 rounded-lg bg-white p-2">
      {controls.map(({ id, active, Icon, cb, wrapper }, idx) => {
        const Wrapper = wrapper;

        return (
          <Wrapper
            key={id}
            active={helperIdx === idx}
            onNext={() => setHelperIdx(idx + 1)}
          >
            <button
              type="button"
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
          </Wrapper>
        );
      })}
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
