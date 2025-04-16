import { positions } from "../data";

export function getPositions({ defensivePosition, currentRotation }) {
  const rotations =
    positions[defensivePosition ? "receive" : "serve"][currentRotation - 1];

  return rotations.positions;
}

export function getKeyframes({ defensivePosition, currentRotation }) {
  const { keyframes } =
    positions[defensivePosition ? "receive" : "serve"][currentRotation - 1];

  return Math.max(keyframes - 1, 0);
}
