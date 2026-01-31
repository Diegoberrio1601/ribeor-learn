"use client";

import React from "react";
import { Terminal, Instagram, Linkedin, Github, Code2 } from "lucide-react";

export const About = () => {
    return (
        <section className="relative py-20 bg-n-8 overflow-hidden transition-colors duration-500" id="about">
            <div className="container mx-auto px-6 relative z-2">

                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Lado Izquierdo: Visual / Avatar */}
                    <div className="relative w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                            {/* Círculos decorativos con rotación lenta */}
                            <div className="absolute inset-0 border border-n-1/10 rounded-full animate-spin-slow" />
                            <div className="absolute inset-8 border border-purple-500/20 rounded-full animate-spin-slow [animation-direction:reverse]" />

                            {/* Foto de Perfil */}
                            <div className="absolute inset-16 bg-n-7 rounded-3xl border border-n-1/10 flex items-center justify-center overflow-hidden shadow-2xl group transition-colors duration-500">
                                <img
                                    src="https://avatars.githubusercontent.com/u/166042870?v=4"
                                    alt="Diego Berrio"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-n-8/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                    <span className="font-code text-xs text-white tracking-widest">DIEGO BERRIO</span>
                                </div>
                            </div>

                            {/* Badges flotantes */}
                            <div className="absolute -top-4 -right-4 bg-n-6 p-4 rounded-2xl border border-n-1/10 shadow-xl animate-bounce [animation-duration:3s] transition-colors">
                                <svg width="24" height="24" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#61DAFB]">
                                    <circle cx="0" cy="0" r="2" fill="currentColor" />
                                    <g stroke="currentColor" strokeWidth="1" fill="none">
                                        <ellipse rx="10" ry="4.5" />
                                        <ellipse rx="10" ry="4.5" transform="rotate(60)" />
                                        <ellipse rx="10" ry="4.5" transform="rotate(120)" />
                                    </g>
                                </svg>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-n-6 p-4 rounded-2xl border border-n-1/10 shadow-xl animate-bounce [animation-duration:4s] transition-colors">
                                <Code2 className="text-color-3" size={24} />
                            </div>
                        </div>
                    </div>

                    {/* Lado Derecho: Contenido */}
                    <div className="w-full lg:w-1/2 text-left">
                        <div className="inline-block px-4 py-1.5 mb-6 border border-n-1/10 rounded-full font-code text-[10px] uppercase tracking-[0.3em] text-color-1 bg-n-8/50 transition-colors">
                            [ El Creador ]
                        </div>
                        <h2 className="text-5xl font-bold mb-8 leading-tight text-n-1 transition-colors">
                            Hola, soy <br className="block md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-purple-500">
                                Diego Berrio
                            </span>
                        </h2>
                        <div className="space-y-6 no-select">
                            <p className="text-n-3 text-lg leading-relaxed">
                                Pasé muchas noches intentando entender por qué un{" "}
                                <code className="text-color-1 font-code bg-color-1/5 px-1 rounded">useEffect</code> entraba en bucle infinito,
                                por qué el estado no se actualizaba como esperaba
                                o por qué React parecía hacer “lo que quería”.
                            </p>

                            <p className="text-n-3 text-lg leading-relaxed">
                                Esta plataforma nació de esa frustración.
                                No para memorizar Hooks, sino para entender
                                qué está pasando realmente en cada render.
                            </p>

                            <p className="text-n-3 text-lg md:mb-0 mb-4 leading-relaxed">
                                Mi objetivo es ayudarte a construir esa intuición
                                que normalmente solo llega después de muchos errores.
                            </p>
                        </div>

                        {/* Redes Sociales */}
                        <div className="flex gap-4 mt-10">
                            {[
                                { icon: <Github size={20} />, url: "https://github.com/diegoberrio1601" },
                                { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/diegoberrio1601" },
                                { icon: <Instagram size={20} />, url: "https://instagram.com/diegoberrio1601" }
                            ].map((social, i) => (
                                <a 
                                    key={i}
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="p-3 bg-n-7 rounded-xl border border-n-1/10 text-n-3 hover:text-n-1 hover:border-purple-500 transition-all shadow-sm"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        {/* Tarjetas de enfoque */}
                        <div className="grid grid-cols-2 gap-4 mt-10">
                            <div className="p-4 bg-n-7/50 rounded-2xl border border-n-1/10 group hover:border-color-1/30 transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <Terminal size={16} className="text-color-1 mr-2" />
                                    <span className="text-n-4 text-[10px] font-code uppercase tracking-widest">Filosofía</span>
                                </div>
                                <h4 className="text-xl font-bold text-n-1 transition-colors">Código abierto</h4>
                            </div>
                            <div className="p-4 bg-n-7/50 rounded-2xl border border-n-1/10 group hover:border-purple-500/30 transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <Code2 size={16} className="text-purple-500 mr-2" />
                                    <span className="text-n-4 text-[10px] font-code uppercase tracking-widest">Enfoque</span>
                                </div>
                                <h4 className="text-xl font-bold text-n-1 transition-colors">React moderno</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Glow de fondo - Sutilizado para modo claro */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none dark:opacity-100 opacity-50" />
        </section>
    );
};