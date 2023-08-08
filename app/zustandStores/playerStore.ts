import { create } from "zustand";
import { IUser } from "../@types/global";
import User from "@/app/server/models/user";
import jwt from "jsonwebtoken";

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
  userSignUp: (data: any) => Promise<void>;
  pUser: IUser | null;
  pToken: string | null;
};

export const usePlayerState = create<PlayerState>((set) => ({
  money: 0,
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
  pUser: null,
  pToken: null,
  userSignUp: async (data: any) => {
    try {
      const user = await User.create(data);
      const token = createJWT(user);
      set({
        pUser: user,
        pToken: token,
      });
    } catch (error) {
      console.error("create user error:", error);
    }
  },
}));

function createJWT(user: IUser) {
  const secret = process.env.SECRET || "default_secret";
  return jwt.sign({ user }, secret, { expiresIn: "24h" });
}
