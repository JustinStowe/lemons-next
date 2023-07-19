"use client";
import { useState } from "react";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import Signup from "../components/Signup";
import Login from "../components/Login";
export default function AuthenticationPage() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="m-8">
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "CLICK HERE TO SIGN UP" : "CLICK HERE TO LOG IN"}
      </button>
      {showLogin ? <Login /> : <Signup />}
      <button onClick={() => router.push("/main_menu")}> DEV BUTTON</button>
    </div>
  );
}
