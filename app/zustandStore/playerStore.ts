import create from "zustand";

type PlayerState = {
  money: number;
  locale: object;
  lemonStand: object;
  lemons: number;
  sugar: number;
  cups: number;
  ice: number;
  tools: [];
  staff: [];
  marketing: [];
};

export const usePlayerState = create<PlayerState>((set) => ({
  money: 0,
  locale: {},
  lemonStand: {},
  lemons: 0,
  sugar: 0,
  cups: 0,
  ice: 0,
  tools: [],
  staff: [],
  marketing: [],
}));
