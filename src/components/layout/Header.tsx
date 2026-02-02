"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Menu,
  X,
  LogIn,
  UserPlus,
  Instagram,
  Github,
  Linkedin,
  Terminal,
  Sun,
  Moon,
  Languages,
} from "lucide-react";
import { AuthModal } from "../auth/AuthModal";

// Definición de tipos para el diccionario completo
interface FullDict {
  auth: {
    title: string;
    subtitle: string;
    googleBtn: string;
    githubBtn: string;
  };
  header: {
    navigation: {
      roadmap: string;
      about: string;
      pricing: string;
    };
    buttons: {
      login: string;
      register: string;
    };
  };
}

interface HeaderProps {
  dict: FullDict;
  lang: string;
}

export const Header = ({ dict, lang }: HeaderProps) => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleNavigation = () => setOpenNavigation(!openNavigation);
  
  const currentLang = lang;
  const targetLang = currentLang === "es" ? "en" : "es";
  const targetPath = pathname.replace(`/${currentLang}`, `/${targetLang}`);

  const navigation = [
    { title: dict.header.navigation.roadmap, url: "#roadmap" },
    { title: dict.header.navigation.about, url: "#about" },
    { title: dict.header.navigation.pricing, url: "#pricing" },
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
    <>
      <header className={`fixed top-0 left-0 w-full z-50 border-b border-n-1/10 transition-colors duration-500 ${openNavigation ? "bg-n-8" : "bg-n-8/80 backdrop-blur-sm"}`}>
        <div className="flex items-center px-5 xl:px-10 py-4">

          {/* LOGO */}
          <Link href={`/${lang}`} className="flex items-center gap-4 group mr-4 xl:mr-8 shrink-0">
            <div className="w-10 h-10 bg-n-7 border border-n-1/10 rounded-xl flex items-center justify-center group-hover:border-purple-500 transition-colors">
              <Terminal size={20} className="text-purple-500" />
            </div>
            <span className="text-2xl font-bold uppercase tracking-tighter text-n-1 whitespace-nowrap">
              RIBEOR
              <span className="text-purple-500 ml-1">LEARN</span>
            </span>
          </Link>

          {/* NAV */}
          <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 xl:static xl:flex xl:mx-auto xl:bg-transparent`}>
            <div className="relative z-2 flex flex-col items-center justify-center m-auto xl:flex-row">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  onClick={() => setOpenNavigation(false)}
                  className="block font-code text-xs uppercase text-n-1 px-6 py-6 md:py-8 transition-colors hover:text-purple-500 xl:text-n-1/60 xl:hover:text-n-1 whitespace-nowrap"
                >
                  {item.title}
                </Link>
              ))}

              {/* BOTONES (Solo Móvil) */}
              <div className="flex flex-col gap-4 w-full px-6 mt-4 xl:hidden">
                <button 
                  onClick={() => { setIsAuthOpen(true); setOpenNavigation(false); }}
                  className="inline-flex items-center justify-center px-6 py-3 border border-n-1/10 rounded-xl font-code text-xs font-bold uppercase tracking-widest text-n-1"
                >
                  <LogIn size={14} className="mr-2 text-purple-500" />
                  {dict.header.buttons.login}
                </button>
                <button 
                  onClick={() => { setIsAuthOpen(true); setOpenNavigation(false); }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-n-1 text-n-8 rounded-xl font-code text-xs font-bold uppercase tracking-widest transition-all"
                >
                  <UserPlus size={14} className="mr-2" />
                  {dict.header.buttons.register}
                </button>
              </div>

              {/* REDES SOCIALES (Solo Móvil) */}
              <div className="flex gap-6 mt-10 xl:hidden">
                {socials.map((social) => (
                  <a key={social.title} href={social.url} target="_blank" rel="noreferrer" className="text-n-3 hover:text-n-1 transition-colors">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* ACTIONS & THEME TOGGLE */}
          <div className="flex items-center ml-auto xl:ml-0 gap-2 md:gap-3 shrink-0">
            
            <a href={targetPath} className="flex items-center gap-2 px-3 h-10 border border-n-1/10 rounded-xl text-n-1 font-code text-[10px] uppercase tracking-widest hover:bg-n-7 transition-colors">
              <Languages size={18} className="text-purple-500" />
              <span className="hidden sm:block">{currentLang === "es" ? "EN" : "ES"}</span>
            </a>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 flex items-center justify-center border border-n-1/10 rounded-xl text-purple-500 hover:bg-n-7 transition-colors"
              aria-label="Cambiar tema"
            >
              {mounted ? (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />) : <div className="w-5 h-5" />}
            </button>

            {/* BOTONES (Desktop) */}
            <div className="hidden xl:flex items-center gap-3">
               <button 
                className="inline-flex items-center px-4 py-2 border border-n-1/10 rounded-xl font-code text-[11px] font-bold uppercase tracking-widest text-n-1 hover:bg-n-7 transition-all whitespace-nowrap" 
                onClick={() => setIsAuthOpen(true)}
               >
                <LogIn size={14} className="mr-2 text-purple-500" />
                {dict.header.buttons.login}
              </button>
              <button 
                className="inline-flex items-center px-4 py-2 bg-n-1 text-n-8 rounded-xl font-code text-[11px] font-bold uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all whitespace-nowrap"
                onClick={() => setIsAuthOpen(true)}
              >
                <UserPlus size={14} className="mr-2" />
                {dict.header.buttons.register}
              </button>
            </div>

            <button className="xl:hidden text-n-1 ml-2" onClick={toggleNavigation}>
              {openNavigation ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header> 

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        dict={dict.auth} 
      />
    </>
  );
};