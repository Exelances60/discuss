"use server";
import { signOut } from "@/auth";

export const signOutAction = async () => {
  return signOut();
};
