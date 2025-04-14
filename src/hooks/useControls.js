import { create } from "zustand";

export const useControls = create((set, get) => ({
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
