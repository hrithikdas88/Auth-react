// LoginForm.js

import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Suceess, setSucesss] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

    //   if (!response.ok) {
    //     throw new Error("Invalid credentials");
    //   }
   

      const data = await response.json();
      if(data?.message === "Login successful"){
        setSucesss("loginsuccess")
        const link = document.createElement('a');
        link.href = `react-electron://response=success`;
        document.body.appendChild(link);
        link.click();
      }
      console.log(data)
      
      
    } catch (error) {
      console.error("Error:", error.message);
      setSucesss("failed")
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
    
      <form>
        <label htmlFor="username">Username:</label>
        <p>{Suceess}</p>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
