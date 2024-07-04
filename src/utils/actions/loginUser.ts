"use server";

import { FormValues } from "@/app/(withCommonLayout)/login/page";

export const loginUser = async (data: FormValues) => {
  const res = await fetch(`${process.env.BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Something went wrong");
  }

  // return res.json();
  const userInfo = await res.json();
  return userInfo;
};
