import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface credentials {
  email: string;
  password: string;
}
export default function Signup() {
  //const {userSignup}= playerStore()
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });
  const [error, setError] = useState("");

  const handleChange = (evt: any) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    try {
      const { error, confirm, ...data } = formData;
      console.log("submitted form data:", data);
      // const user = await userSignup(data)
      router.replace("/main_menu");
    } catch (error) {
      console.error("sign-up error:", error);
      setFormData({ ...formData, error: "sign up failed" });
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
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
