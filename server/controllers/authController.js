import * as authService from '../services/authService.js';

export const register = async (req, res) => {
  try {
    const result = await authService.registerUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error("Registration Error Handler:", error.message);
    res.status(400).json({ message: error.message || 'Error occurred during registration setup' });
  }
};
export const login = async (req, res) => {
  try {
    const result = await authService.loginUser(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error("Login Error Handler:", error.message);
    res.status(400).json({ message: error.message || 'Login setup process failed' });
  }
};
