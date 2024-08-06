import dbConnect from "@/lib/config/dbConnect";
import User from "@/lib/model/user.model";
import { generateToken } from "@/utils";
import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
dbConnect();
export const POST = async (request: NextRequest) => {
  const { email, username, profilePicture, password } = await request.json();

  try {
    let user = await User.findOne({ email: email });
    if (user) {
      const userData = {
        _id: user._id,
        email: user.email,
        username: user.username,
        profilePicture: user.profilePicture,
      };
      //create token
      const token = await jwt.sign(userData, process.env.JWT_SECRET!, {
        expiresIn: "1d",
      });

      const response = NextResponse.json(
        {
          message: "User Signed in successfully",
          success: true,
        },
        { status: 200 }
      );
      response.cookies.set("auth-token", token, {
        httpOnly: true,
      });
      return response;
    } else {
      const newUser = await User.create({
        username,
        email,
        password,
        profilePicture: profilePicture,
        provider: "google",
      });
      let savedUser = await newUser.save();

      const userData = {
        _id: savedUser._id,
        email: savedUser.email,
        username: savedUser.username,
        profilePicture: savedUser.profilePicture,
      };
      //create token
      const token = await jwt.sign(userData, process.env.JWT_SECRET!, {
        expiresIn: "1d",
      });
      const response = NextResponse.json(
        {
          message: "User Signed in successfully",
          success: true,
        },
        { status: 200 }
      );
      response.cookies.set("auth-token", token, {
        httpOnly: true,
      });
      return response;
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "error from backend code",
      },
      { status: 500 }
    );
  }
};
