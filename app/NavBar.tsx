"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    {
      href: "/",
      label: "Dashboard",
    },
    {
      href: "/issues/list",
      label: "Issues",
    },
  ];
  return (
    <nav className="flex space-x-6 mb-5 border-b h-14 items-center px-5">
      <Link href={"/"}>
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classNames({
                "text-zinc-700": currentPath === link.href,
                "text-zinc-400": currentPath !== link.href,
                "hover:text-zinc-900 transition-all": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
