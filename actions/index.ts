//@ts-nocheck
"use server";

import { delay } from "@/utils";
import axios from "axios";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export const setCookie = () => {};

export const fetchAllOrders = async (userId: string) => {
  try {
    let { data } = await axios.get(
      `${process.env.BACKEND_URL}/orders/${userId}`
    );
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

  let { _id, email, username, profilePicture } = await verify(
    token!,
    process.env.JWT_SECRET!
  );
  return { _id, email, username, profilePicture };
};

export const getSearchResult = async (q) => {
  try {
    let { data } = await axios.get(
      `${process.env.BACKEND_URL}/products/search/${q}`
    );
    return {
      success: true,
      message: "search result fetch successfully",
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Network Error",
      data: [],
    };
  }
};

export const fetchProduct = async () => {
  try {
    let res = await fetch(`${process.env.BACKEND_URL}/products/all`);
    let data = await res.json();
    return {
      success: true,
      message: "product fetch successfully",
      product: data,
    };
  } catch (error) {
    return {
      success: false,
      message: "network error",
      product: [],
    };
  }
};

export const getProductDetails = async (id) => {
  try {
    let res = await fetch(`${process.env.BACKEND_URL}/products/${id}`);
    let data = await res.json();
    return {
      success: true,
      message: "product fetch successfully",
      product: data,
    };
  } catch (error) {
    return {
      success: false,
      message: "network error",
      product: null,
    };
  }
};

export const getOrderDetails = async (id: string) => {
  try {
    let { data } = await axios.get(`${process.env.BACKEND_URL}/order/${id}`);
    return {
      success: true,
      message: "order fetch successfully",
      order: data.order,
    };
  } catch (error) {
    return {
      success: false,
      message: "Network Error",
      order: [],
    };
  }
};

export const logoutUser = async () => {
  await delay(1000);
  try {
    let cookie = cookies();
    cookie.delete("auth-token");
    return { success: true, message: "User Logout successfully" };
  } catch (error) {
    return { success: false, message: "User Logout Error" };
  }
};
