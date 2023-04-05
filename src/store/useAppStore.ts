import { create } from "zustand";

export const useAppStore = create((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
