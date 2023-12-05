"use client";
import { useSession } from "next-auth/react";
import React from "react";
import {
  Navbar,
  NavbarItem,
  Avatar,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { signInAction, signOutAction } from "@/actions";
import Link from "next/link";
const HeaderAuth = () => {
  const session = useSession();
  let authConent: React.ReactNode;
  if (session.status === "loading") {
    authConent = null;
  } else if (session.data?.user) {
    authConent = (
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Avatar
            src={session.data.user.image || ""}
            className="cursor-pointer"
          />
        </PopoverTrigger>
        <PopoverContent>
          <Navbar>
            <NavbarItem>
              <Link href="/profile">Profile</Link>
            </NavbarItem>
            <NavbarItem>
              <form action={signOutAction}>
                <Button type="submit" color="danger" variant="shadow">
                  Sign Out
                </Button>
              </form>
            </NavbarItem>
          </Navbar>
        </PopoverContent>
      </Popover>
    );
  } else {
    authConent = (
      <>
        <NavbarItem>
          <form action={signInAction}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={signInAction}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return <>{authConent}</>;
};

export default HeaderAuth;
