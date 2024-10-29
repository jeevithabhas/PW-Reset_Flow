import axios from "axios";


const API = axios.create({
  baseURL: "https://pw-reset-b.onrender.com/api/auth",
});

export const forgotPassword = async (email) => {
  try {
    const response = await API.post("/forgot-password", { email });
    return response;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (token, password) => {
  try {
    const response = await API.post(`/reset-password/${token}`, { password });
    return response;
  } catch (error) {
    throw error;
  }
};
