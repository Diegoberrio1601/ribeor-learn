"use client";

import { Instagram, Github, Linkedin, Terminal } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      id: "0",
      title: "LinkedIn",
      icon: <Linkedin size={18} />,
      url: "https://linkedin.com/in/diegoberrio1601",
    },
    {
      id: "1",
      title: "GitHub",
      icon: <Github size={18} />,
      url: "https://github.com/diegoberrio1601",
    },
    {
      id: "2",
      title: "Instagram",
      icon: <Instagram size={18} />,
      url: "https://instagram.com/diegoberrio1601",
    },
  ];

  const footerNav = [
    { title: "Ruta de Aprendizaje", url: "#roadmap" },
    { title: "Sobre el Autor", url: "#about" },
    { title: "Apoyar el Proyecto", url: "#pricing" },
  ];

  return (
    <footer className="relative border-t border-n-1/10 bg-n-8 py-12 lg:py-16 transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-10 relative z-2">

        {/* TOP: Logo y Navegación */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-12">

          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-n-7 border border-n-1/10 rounded-xl flex items-center justify-center transition-colors group-hover:border-purple-500/50">
              <Terminal size={20} className="text-purple-500" />
            </div>

            <span className="text-2xl font-bold uppercase tracking-tighter text-n-1">
              RIBEOR
              <span className="text-purple-500 ml-1">LEARN</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {footerNav.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className="font-code text-xs uppercase tracking-widest text-n-3 hover:text-n-1 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Línea divisoria */}
        <div className="h-px w-full bg-n-1/10 mb-10" />

        {/* BOTTOM: Copyright y Redes */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="flex flex-col gap-4 md:max-w-[60%]">
            <p className="font-code text-[11px] text-n-4 uppercase tracking-wider text-center md:text-left leading-relaxed">
              © {currentYear} 
              <span className="inline-flex items-center mx-2 font-bold tracking-tighter text-n-1">
                 RIBEOR
                <span className="text-purple-500 ml-1">LEARN</span>
              </span>
              — Proyecto de código abierto bajo licencia MIT.
            </p>
            <p className="font-code text-[10px] text-n-4/60 uppercase tracking-widest text-center md:text-left">
              El código es libre; la marca Ribeor™ pertenece a su autor.
            </p>
          </div>

          <ul className="flex gap-4">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={item.title}
                className="flex items-center justify-center w-10 h-10 bg-n-13 rounded-full border border-n-1/10 text-n-3 hover:text-n-1 hover:border-purple-500 transition-all shadow-sm"
              >
                {item.icon}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};