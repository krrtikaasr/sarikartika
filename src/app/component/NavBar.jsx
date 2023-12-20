"use client";
import Link from 'next/link';
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenusOverlay from "./MenusOverlay";

const navLinks = [
    {
        title: "Home",
        path: "#home",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",        
    },
    {
        title: "Contact",
        path: "#contact",
    }
]


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#projects'>Project</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};





const NavBar = () => {
    const [navbarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
            <a href={'/'} className="text-2xl md:text-5xl text-white font-semibold">
                KAR
            </a>
            <div className="mobile-menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavBarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <Bars3Icon className="h-5 w-5"/>
                        </button>
                    ):(
                        <button onClick={() => setNavBarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenusOverlay links={navLinks}/> : null}
    </nav>
  );
};

export default NavBar