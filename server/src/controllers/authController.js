import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

// SignUp function ----------------------------------------->
export const userRegister = async (req, res) => {
  try {
    const { uname, uemail, upassword } = req.body;
    const existingUser = await User.findOne({ uemail });

    if (existingUser) {
      return res.json({ msg: "User already exist‼️" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(upassword, salt);

    const newUser = new User({
      uname: uname,
      uemail: uemail,
      upassword: hashedPassword,
    });
    await newUser.save();
    const token = jwt.sign(
      { uid: newUser._id, uname: newUser.uname, uemail: newUser.uemail },
      process.env.JWT_SECRET,
      { expiresIn: "4h" }
    );

    res.status(201).json({
      msg: "User created successfully ✅",
      token,
      user: {
        uid: newUser._id,
        uname: newUser.uname,
        uemail: newUser.uemail,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Login function ---------------------------------------->
export const userLogin = async (req, res) => {
  try {
    const { uemail, upassword } = req.body;
    const existingUser = await User.findOne({ uemail });

    if (!existingUser) {
      return res.status(400).json({ msg: "User doesn't exist ❌" });
    }

    const isMatching = await bcrypt.compare(upassword, existingUser.upassword);

    if (!isMatching) {
      return res
        .status(401)
        .json({ msg: "Invalid credentials, access denied 🚫" });
    }
    const token = jwt.sign(
      {
        uid: existingUser._id,
        uname: existingUser.uname,
        uemail: existingUser.uemail,
      },
      process.env.JWT_SECRET,
      { expiresIn: "4h" }
    );

    res.status(200).json({
      msg: "Login successfull ✔️",
      token,
      user: {
        uid: existingUser._id,
        uname: existingUser.uname,
        uemail: existingUser.uemail,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
