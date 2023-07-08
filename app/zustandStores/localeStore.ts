import { create } from "zustand";

type LocaleState = {
  name: string;
  rent: number;
  info: string;
  people: number;
  popularity: number;
  maxPrice: number;
  targetLemons: number;
  targetSugar: number;
  targetIce: number;
};

export const useLocaleState = create<LocaleState>((set) => ({
  name: "",
  rent: 0,
  info: "",
  people: 0,
  popularity: 0,
  maxPrice: 0,
  targetLemons: 0,
  targetSugar: 0,
  targetIce: 0,
}));
