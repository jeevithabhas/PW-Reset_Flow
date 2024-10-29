import React, { useState } from "react";
import { forgotPassword } from "../api"; // Ensure this is pointing to the correct file
import { Link } from "react-router-dom"; // Import Link for navigation

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await forgotPassword(email);
      alert(response.data.message);
      // After sending the reset link, you can navigate to the reset password page
      // Optionally, you can uncomment the line below to redirect after submission
      // window.location.href = `/reset-password/${token}`; // You will need to get the token from the response
    } catch (error) {
      alert(error.response.data.message || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {/* Link to go to the Reset Password page */}
      <Link to="/reset-password/someToken">Go to Reset Password Page</Link>
      {/* Link to go back to the Welcome page */}
      <Link to="/">Go to Welcome Page</Link>
    </div>
  );
};

export default ForgotPassword;
