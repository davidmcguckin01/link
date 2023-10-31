import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import "./Login.css";

const Login = () => {
  function generateCodeword(): string {
    const date: any = new Date();
    const dateNumber: number = date.getDay() + date.getMonth();
    const words: string[] = [
      "ados",
    ];
    return "david";
  }

  const [codeword, setCodeword] = useState("");

  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Compare the entered password with the current codeword
    const correctCodeword = generateCodeword();
    if (codeword === correctCodeword) {
      nav("/Home");
    } else if (codeword === "2256") {
      alert(correctCodeword);
    } else {
      alert("Invalid codeword");
    }
  };

  return (
    <div className="Login">
      <Header headerProps="Login" />
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter word of the day"
          value={codeword}
          onChange={(e) => setCodeword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
