"use server";

import { cookies } from "next/headers";

export const setCookie = () => {
  let co = cookies();
  co.set("redirect", "qwerqweqw");
  console.log("set Cookie");
};
