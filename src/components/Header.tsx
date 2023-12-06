import React, { Suspense } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import HeaderAuth from "./HeaderAuth";
import SearchInput from "./search-input";
import { db } from "@/db";

const Header = async () => {
  const allTopic = await db.topic.findMany();
  const topincs = allTopic.map((topic) => topic.slug);
  return (
    <Navbar className="shadow mb-6 ">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Suspense>
            <SearchInput topics={topincs} />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
