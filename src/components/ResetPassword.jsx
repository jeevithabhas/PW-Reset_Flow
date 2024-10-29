import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { resetPassword } from "../api"; 

const ResetPassword = () => {
  const [token, setToken] = useState(""); // State for the token
  const [password, setPassword] = useState(""); // State for the new password
  const [showPassword, setShowPassword] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await resetPassword(token, password);
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required
        />
        <input
          type={showPassword ? "text" : "password"} 
          placeholder="Enter your new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
        <button type="submit">Reset Password</button>
      </form>
      {/* Link to go back to the Welcome page */}
      <Link to="/">Go to Welcome Page</Link>
    </div>
  );
};

export default ResetPassword;
