
"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const links = [
    {
      id: 1,
      link: "/",
      name: "home",
    },
    {
      id: 2,
      link: "/about",
      name: "about",
    },
    {
      id: 3,
      link: "/service",
      name: "services",
    },
    // {
    //   id: 4,
    //   link: "/portfolio",
    //   name: "Portfolio",
    // },
    {
      id: 5,
      link: "/Frequent_asked_questions",
      name: "FAQs",
    },
    {
      id: 6,
      link: "/contact",
      name: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white backdrop-blur border-emerald-500/20 bg-emerald-300/10 fixed nav z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <img
            src="/static/images/icons/365GlobeAds.svg"
            alt="365GlobeAds Technologies Logo"
            className="h-10 w-auto mr-auto"
          />
        </Link>
        <ul className="hidden md:flex space-x-6">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className={`nav-links px-4 cursor-pointer capitalize font-bold ${
                currentPath === link
                  ? "text-blue-500"
                  : "text-white hover:text-blue-500"
              } transition-all duration-300`}
            >
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center  backdrop-blur-sm absolute top-0 left-0 w-full h-screen  bg-gradient-to-r from-green-400 to-blue-900 text-white">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-4xl transition-all duration-300 ${
                currentPath === link && "text-blue-500"
              }`}
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                <div>{name}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
