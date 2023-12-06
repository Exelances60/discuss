"use server";
import { redirect } from "next/navigation";

export const search = async (formData: FormData) => {
  const term = formData.get("term");
  console.log(term);

  if (typeof term !== "string" || !term) {
    redirect("/");
  }

  redirect(`/search?term=${term}`);
};
