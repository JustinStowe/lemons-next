import { create } from "zustand";

type standState = {
  name: string;
  cost: number;
  lemonCapacity: number;
  sugarCapacity: number;
  iceCapacity: number;
  cupsCapacity: number;
  repModifier: number;
  lemons: number;
  ice: number;
  cups: number;
};

export const useStandState = create<standState>((set) => ({
  name: "string",
  cost: 1,
  lemonCapacity: 1,
  sugarCapacity: 1,
  iceCapacity: 1,
  cupsCapacity: 1,
  repModifier: 1,
  lemons: 0,
  ice: 0,
  cups: 0,
}));
