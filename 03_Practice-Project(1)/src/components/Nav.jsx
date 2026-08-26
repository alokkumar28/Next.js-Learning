"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Nav() {
  const pathname = usePathname();

  return (
    <div className="w-full h-20 bg-white flex justify-between items-center px-5 fixed top-0 z-50">
      <div className="text-black font-bold text-2xl">🌍 Travel Guide</div>

      <div>
        <ul className="flex justify-center items-center gap-5 px-5">
          <li>
            <Link
              href="/"
              className={pathname === "/" ? "text-blue-500" : "text-black"}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/destinations"
              className={
                pathname === "/destinations" ? "text-blue-500" : "text-black"
              }
            >
              Destinations
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={
                pathname === "/contact" ? "text-blue-500" : "text-black"
              }
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
