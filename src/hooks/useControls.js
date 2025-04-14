import { create } from "zustand";

export const useControls = create((set, get) => ({
  currentRotation: 0,
  previousRotation: () => {
    const prev = get().currentRotation;
    if (prev - 1 < 0) {
      return set({ currentRotation: 5 });
    }

    return set({ currentRotation: prev - 1 });
  },
  nextRotation: () => {
    const prev = get().currentRotation;
    if (prev + 1 >= 6) {
      return set({ currentRotation: 0 });
    }

    return set({ currentRotation: prev + 1 });
  },
  showNumbers: true,
  toggleShowNumbers: () =>
    set(({ showNumbers: prev }) => ({ showNumbers: !prev })),
  showPosition: false,
  toggleShowPosition: () =>
    set(({ showPosition: prev }) => ({ showPosition: !prev })),
}));
