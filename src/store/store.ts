import { create } from "zustand";

type SearchStore = {
  title: string;
  year: string;
  setTitle: (title: string) => void;
  setYear: (year: string) => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
    title: "",
    year: "",
    setTitle: (title) => set({ title }),
    setYear: (year) => set({ year }),
}));