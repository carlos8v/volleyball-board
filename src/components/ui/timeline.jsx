import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "../../lib/utils";

function Timeline({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  );

  const _steps = React.useMemo(
    () => (max - min) / props.step + 1,
    [max, min, props.step],
  );

  return (
    <div className="bg-muted rounded-sm px-5">
      <SliderPrimitive.Root
        data-slot="slider"
        defaultValue={defaultValue}
        value={value}
        min={min}
        max={max}
        className={cn(
          "relative flex w-full touch-none items-center rounded-sm select-none data-[disabled]:opacity-50",
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="bg-muted relative h-[60px] w-full grow overflow-hidden sm:h-[80px]"
        >
          <SliderPrimitive.Range
            data-slot="slider-range"
            className="absolute h-[60px] sm:h-[80px]"
          />

          <div className="relative h-[60px] w-full sm:h-[80px]">
            {Array.from({ length: _steps }).map((_, index, arr) => {
              let leftPosition = `calc(${index}/${arr.length - 1} * 100%`;
              if (arr.length - 1 === index) {
                leftPosition += " - 1px)";
              } else {
                leftPosition += ")";
              }

              return (
                <span
                  key={index}
                  className="pointer-events-none absolute top-[5px] block h-[50px] w-px shrink-0 bg-zinc-500 opacity-50 shadow-sm sm:h-[70px]"
                  style={{
                    left: leftPosition,
                  }}
                ></span>
              );
            })}
          </div>
        </SliderPrimitive.Track>

        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb data-slot="slider-thumb" key={index} asChild>
            <span className="absolute top-0 block h-[60px] w-[2px] shrink-0 -translate-1/2 cursor-col-resize bg-indigo-900 shadow-sm outline-0 sm:h-[80px]">
              <span className="absolute top-0 left-1/2 mb-4 h-2 w-2 -translate-1/2 rounded-full bg-indigo-800"></span>
            </span>
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Root>
    </div>
  );
}

export { Timeline };
