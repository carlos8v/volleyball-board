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

  const _steps = (max - min) / props.step + 1;

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center rounded-sm select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative h-[80px] w-full grow overflow-hidden rounded-sm",
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute h-[80px]"
        />

        <div className="relative h-[80px] w-full">
          {Array.from({ length: _steps }).map((_, index, arr) => {
            if (index === 0 || index + 1 === arr.length) return null;

            return (
              <span
                key={index}
                className="pointer-events-none absolute top-[5px] block h-[70px] w-px shrink-0 bg-zinc-500 opacity-50 shadow-sm"
                style={{
                  left: `calc(${index}/${arr.length - 1} * 100%)`,
                }}
              ></span>
            );
          })}
        </div>
      </SliderPrimitive.Track>

      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb data-slot="slider-thumb" key={index} asChild>
          <span className="absolute top-0 block h-[80px] w-[2px] shrink-0 -translate-1/2 cursor-col-resize bg-indigo-900 shadow-sm">
            <span className="absolute top-0 left-1/2 mb-4 h-2 w-2 -translate-1/2 rounded-full bg-indigo-800"></span>
          </span>
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
  );
}

export { Timeline };
