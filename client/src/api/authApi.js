import axios from "axios";

const API = "http://localhost:5000/api/auth";


// REGISTER
export const registerUser = async (name, email, password) => {
  return axios.post(`${API}/register`, {
    name: name,
    email: email,
    password: password,
  });
};


// LOGIN
export const loginUser = async (email, password) => {
  return axios.post(`${API}/login`, {
    email: email,
    password: password,
  });
};


// FORGOT PASSWORD
export const forgotPassword = async (email) => {
  return axios.post(`${API}/forgot-password`, {
    email: email,
  });
};


// RESET PASSWORD
export const resetPassword = async (token, password) => {
  return axios.post(`${API}/reset-password/${token}`, {
    password: password,
  });
};
