"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Profile = () => {
  const session = useSession();
  if (session.data?.user) {
    return <h1>Profile client:user signIn</h1>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Sign in to view your profile</p>
    </div>
  );
};

export default Profile;
