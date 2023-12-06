import { cookies } from "next/dist/client/components/headers";
import React from "react";

const IsLogin = async () => {
  const cookieStore = cookies();
  const cookie = cookieStore.get("authjs.session-token");
  if (!cookie || !cookie.value) {
    return (
      <div className="w-full h-[10vh] flex items-center justify-center border rounded">
        <h1>Not logged in</h1>
      </div>
    );
  }
  return (
    <div className="w-full  flex items-center justify-center">
      <h1>Logged in</h1>
    </div>
  );
};

export default IsLogin;
