import { create } from "zustand";
import { positions } from "../data";

export const useControls = create((set, get) => ({
  isPlaying: false,
  keyframes: 0,
  animationFrame: 0,
  setAnimationFrame: (frame) => set({ animationFrame: frame }),
  playAnimations: () => {
    const { isPlaying, defensivePosition, currentRotation } = get();
    const { keyframes } =
      positions[defensivePosition ? "receive" : "serve"][currentRotation - 1];

    set({
      isPlaying: !isPlaying,
      keyframes: !isPlaying ? Math.max(keyframes - 1, 0) : 0,
      animationFrame: 0,
    });
  },
  currentRotation: 1,
  previousRotation: () => {
    const prev = get().currentRotation;
    if (prev - 1 <= 0) {
      return set({ currentRotation: 6 });
    }

    return set({ currentRotation: prev - 1 });
  },
  nextRotation: () => {
    const prev = get().currentRotation;
    if (prev + 1 > 6) {
      return set({ currentRotation: 1 });
    }

    return set({ currentRotation: prev + 1 });
  },
  setRotation: (currentRotation) => set({ currentRotation }),
  defensivePosition: false,
  toggleDefensivePosition: () =>
    set(({ defensivePosition: prev }) => ({ defensivePosition: !prev })),
  showNumbers: true,
  toggleShowNumbers: () =>
    set(({ showNumbers: prev }) => ({ showNumbers: !prev })),
  showPosition: false,
  toggleShowPosition: () =>
    set(({ showPosition: prev }) => ({ showPosition: !prev })),
}));
