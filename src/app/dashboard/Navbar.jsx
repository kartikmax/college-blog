// components/Navbar.js

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { Menu } from '@headlessui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-300">
      <div className="container mx-auto px-4 flex items-center justify-around h-16">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="text-lg  flex">
              <Image
                src="/images/image 7.png"
                alt="Brand"
                width={98}
                height={24}
              />
              {/* <div>test</div> */}
            </div>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/dashboard">
              <div className="hover:underline">Dashboard</div>
            </Link>
            <Link href="/">
              <div className="hover:underline">Home</div>
            </Link>
            <Link href="/colleges">
              <div className="hover:underline">Colleges</div>
            </Link>
            <Link href="/exams">
              <div className="hover:underline">Exams</div>
            </Link>
            <Link href="/courses">
              <div className="hover:underline">Courses</div>
            </Link>
            <Link href="/news">
              <div className="hover:underline">News</div>
            </Link>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Image
              src="/images/Search.png"
              alt="Search"
              width={20}
              height={20}
            />
          </div>
          <input
            type="text"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for Colleges, Exams, Courses & more..."
          />
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link href="/dashboard">
              <div className="block hover:underline">Dashboard</div>
            </Link>
            <Link href="/university">
              <div className="block hover:underline">University</div>
            </Link>
            <Link href="/colleges">
              <div className="block hover:underline">Colleges</div>
            </Link>
            <Link href="/exams">
              <div className="block hover:underline">Exams</div>
            </Link>
            <Link href="/courses">
              <div className="block hover:underline">Courses</div>
            </Link>
            <Link href="/news">
              <div className="block hover:underline">News</div>
            </Link>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Image
                  src="/search-icon.png"
                  alt="Search"
                  width={20}
                  height={20}
                />
              </div>
              <input
                type="text"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search for Colleges, Exams, Courses & more..."
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
