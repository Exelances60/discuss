import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import Link from "next/link";
import HeaderAuth from "./HeaderAuth";

const Header = async () => {
  return (
    <Navbar className="shadow mb-6 ">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Input size={"sm"} placeholder="Search" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
