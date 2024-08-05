import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const response = NextResponse.json({
    message: "Login successful",
    success: true,
  });
  response.cookies.set("token", "value", {
    httpOnly: true,
  });
  return response;
};
