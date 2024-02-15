// src/App.js
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import LoginForm from "./LoginForm";

function App() {

  
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
