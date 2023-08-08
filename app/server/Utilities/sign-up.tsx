"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import from "next/router" instead of "next/navigation"
import { usePlayerState } from "@/app/zustandStores/playerStore";
import { IFormData } from "@/app/@types/global";

export function SignUpForm() {
  const router = useRouter();
  const { userSignUp } = usePlayerState();

  const [formData, setFormData] = useState<IFormData>({
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      const { error, confirm, email, password } = formData;
      const data = { email, password };
      const user = await userSignUp(data);
      router.replace("/player_screen");
      return user;
    } catch (error) {
      console.error("create user error:", error);
    }
  };
  const disable = formData.password !== formData.confirm;
  return (
    <div>
      <div>
        <form
          className="flex justify-center align-middle flex-col w-1/4 mx-auto"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />
          <button
            className="border-green-600 bg-green-900 justify-center mx-auto m-4"
            type="submit"
            disabled={disable}
          >
            SIGN UP
          </button>
        </form>
      </div>
      <p>&nbsp; {formData.error}</p>
    </div>
  );
}
