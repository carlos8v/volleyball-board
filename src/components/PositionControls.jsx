import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { useControls } from "../hooks/useControls";

import { bindEvents } from "../utils/events";

export function PositionControls() {
  const { currentRotation, previousRotation, nextRotation, setRotation } =
    useControls();

  useEffect(() => {
    const cleanup = bindEvents([
      {
        key: "left",
        cb: () => previousRotation(),
      },
      {
        key: "right",
        cb: () => nextRotation(),
      },
    ]);

    return cleanup;
  }, [nextRotation, previousRotation]);

  return (
    <div className="fixed bottom-0 left-1/2 z-10 mb-4 flex -translate-x-1/2 items-center gap-2">
      <div className="flex items-center justify-center rounded-lg bg-white p-1">
        <button
          onClick={() => previousRotation()}
          className="cursor-pointer rounded-lg p-2 hover:bg-zinc-200"
        >
          <ArrowLeft />
        </button>
      </div>
      <div className="flex gap-2 rounded-lg bg-white p-1.5">
        <Select defaultValue="5x1">
          <SelectTrigger className="ml-auto w-[100px] sm:w-[150px]">
            <SelectValue placeholder="Selecionar sistema" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5x1">Sistema 5x1</SelectItem>
          </SelectContent>
        </Select>
        <Select
          defaultValue="1"
          value={currentRotation.toString()}
          onValueChange={(value) => setRotation(Number(value))}
        >
          <SelectTrigger className="ml-auto w-[100px] sm:w-[150px]">
            <SelectValue placeholder="Rotação" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Rotação 1</SelectItem>
            <SelectItem value="2">Rotação 2</SelectItem>
            <SelectItem value="3">Rotação 3</SelectItem>
            <SelectItem value="4">Rotação 4</SelectItem>
            <SelectItem value="5">Rotação 5</SelectItem>
            <SelectItem value="6">Rotação 6</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-center rounded-lg bg-white p-1">
        <button
          onClick={() => nextRotation()}
          className="cursor-pointer rounded-lg p-2 hover:bg-zinc-200"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
