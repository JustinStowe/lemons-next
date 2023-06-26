import { create } from "zustand";

type hirelingState = {
  name: string;
  cost: number;
  payrate: number;
  bonus: number;
};

export const useHirelingState = create<hirelingState>((set) => ({
  name: "string",
  cost: 1,
  payrate: 0,
  bonus: 0,
}));
