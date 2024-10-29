import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

const App = () => {
  return (
    <Routes>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route
        path="/"
        element={
          <div>
            <h1>Welcome to the Password Reset App</h1>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        }
      />
    </Routes>
  );
};

export default App;
