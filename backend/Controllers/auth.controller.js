import { User } from "../Models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../Utils/generateToken.js";
export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      throw new Error("All fields required");
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiredAt: Date.now() + 24 * 60 * 60 * 1000,
    });
    await user.save();
    //jwt
    generateTokenAndSetCookie(res, user._id);
    return res.status(201).json({ success: true, message: "User created" });
    sendVerificationEmail(user.email, verificationToken);
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
export const login = async (req, res) => {
  res.send("login route");
};
export const logout = async (req, res) => {
  res.send("logout route");
};
