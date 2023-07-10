import { create } from "zustand";

type PlayerState = {
  money: number;
  locale: object;
  lemonStand: object;
  lemonsStock: number;
  sugarStock: number;
  cupsStock: number;
  iceStock: number;
  tools: [];
  staff: [];
  marketing: [];
  recipeLemons: number;
  recipeSugar: number;
  recipeIce: number;
};

export const usePlayerState = create<PlayerState>((set) => ({
  money: 20,
  locale: {},
  lemonStand: {},
  lemonsStock: 0,
  sugarStock: 0,
  cupsStock: 0,
  iceStock: 0,
  recipeLemons: 0,
  recipeSugar: 0,
  recipeIce: 0,
  tools: [],
  staff: [],
  marketing: [],
}));
