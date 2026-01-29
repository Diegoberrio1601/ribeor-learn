"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  LogIn,
  Instagram,
  Github,
  Linkedin,
  Terminal,
} from "lucide-react";

export const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => setOpenNavigation(!openNavigation);
  const handleClick = () => openNavigation && setOpenNavigation(false);

  const navigation = [
    { title: "RUTA DE APRENDIZAJE", url: "#roadmap" },
    { title: "SOBRE EL AUTOR", url: "#about" },
    { title: "APOYAR EL PROYECTO", url: "#pricing" },
  ];

  const socials = [
    {
      title: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/diegoberrio1601",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/diegoberrio1601",
    },
    {
      title: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://instagram.com/diegoberrio1601",
    },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 border-b border-n-1/10 transition-colors duration-500 ${openNavigation ? "bg-n-8" : "bg-n-8/80 backdrop-blur-sm"}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4 group xl:mr-8">
          <div className="w-10 h-10 bg-n-7 border border-n-1/10 rounded-xl flex items-center justify-center group-hover:border-purple-500 transition-colors">
            <Terminal size={20} className="text-purple-500" />
          </div>

          <span className="text-2xl font-bold uppercase tracking-tighter text-white">
            RIBEOR
            <span className="text-purple-500 ml-1">LEARN</span>
          </span>
        </Link>

        {/* NAV */}
        <nav
          className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                onClick={handleClick}
                className="block font-code text-xs uppercase text-n-1 px-6 py-6 md:py-8 transition-colors hover:text-purple-500 lg:text-n-1/60 lg:hover:text-n-1"
              >
                {item.title}
              </Link>
            ))}

            {/* Redes — solo móvil */}
            <div className="flex gap-6 mt-10 lg:hidden">
              {socials.map((social) => (
                <a
                  key={social.title}
                  href={social.url}
                  target="_blank"
                  className="text-n-3 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* ACTIONS */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#login"
            className="font-code text-xs font-bold uppercase text-n-1/50 hover:text-n-1 transition-colors mr-8"
          >
            Registrarse
          </Link>

          <button className="inline-flex items-center px-6 py-2 border border-n-1/10 rounded-xl font-code text-xs font-bold uppercase tracking-widest text-white hover:bg-n-7 transition-all">
            <LogIn size={14} className="mr-2 text-purple-500" />
            Ingresar
          </button>
        </div>

        {/* TOGGLE */}
        <button
          className="ml-auto lg:hidden text-n-1"
          onClick={toggleNavigation}
        >
          {openNavigation ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};
