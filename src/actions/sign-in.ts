"use server";
import { signIn } from "@/auth";

export const signInAction = async () => {
  return signIn("github");
};
