import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface credentials {
  email: string;
  password: string;
}
export default function Login() {
  //const {userLogin}= playerStore()
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt: any) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    try {
      // await userLogin(credentials)
      console.log("submitted credentials:", credentials);
      router.replace("/main_menu");
    } catch (error) {
      console.error("login error:", error);
      setError("Log in failed, please try again");
    }
  };

  return (
    <div>
      <div>
        <form
          className="flex justify-center align-middle flex-col w-1/4 mx-auto"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label>Email:</label>
          <input
            className=""
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password" // Change input type to "password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button
            className="border-green-600 bg-green-900 justify-center mx-auto m-4"
            type="submit"
          >
            LOG IN
          </button>
        </form>
      </div>
      <p>&nbsp;{error}</p>
    </div>
  );
}
