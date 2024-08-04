//@ts-nocheck
"use server";

import axios from "axios";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export const setCookie = () => {};

export const fetchAllOrders = async (userId: string) => {
  try {
    let { data } = await axios.get(`http://localhost:8000/orders/${userId}`);
    return {
      success: true,
      message: "order fetch successfully",
      orders: data.orders,
    };
  } catch (error) {
    return {
      success: false,
      message: "Network Error",
      orders: [],
    };
  }
};

export const getToken = (): string | undefined => {
  return cookies().get("auth-token")?.value;
};

export const getUser = async () => {
  let token = cookies().get("auth-token")?.value;

  if (!token) {
    return {
      message: "Token not found",
    };
  }

  let { userData } = await verify(token!, process.env.JWT_SECRET!);
  return {
    userData,
  };
};
