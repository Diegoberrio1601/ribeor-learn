"use client";

import Link from "next/link";
import React from "react";

const ReactLogo = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg 
    viewBox="-11.5 -10.23174 23 20.46348" 
    className={`react-bubble ${className}`} 
    style={style}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1.2">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-n-8 z-1">
      
      <div className="container relative z-20 mx-auto px-6">
        <div className="relative max-w-[62rem] mx-auto text-center">
          
          {/* Resplandor de fondo */}
          <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FFC876_0%,_#AC6AFF_35%,_#FF776E_70%,_transparent_100%)] opacity-20 blur-[130px]" />
          </div>

          <div className="relative z-30">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight text-white">
              Aprende cómo funcionan realmente los <br />
              <span className="relative inline-block mt-4">
                React Hooks
                <svg className="absolute left-0 top-full w-full" viewBox="0 0 438 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10C50 3 150 3 219 5.5C288 8 380 12 437 3" stroke="url(#paint0_linear)" strokeWidth="4" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="1" y1="6.5" x2="437" y2="6.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFC876" />
                      <stop offset="0.5" stopColor="#AC6AFF" />
                      <stop offset="1" stopColor="#FF776E" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mb-12 text-n-3 text-lg md:text-2xl leading-relaxed">
                Comprende el estado, los efectos y el ciclo de render de React. Aprende a escribir lógica predecible, escalable y fácil de mantener.
              
            </p>
            <Link href="#roadmap">
            <button className="relative inline-flex items-center justify-center px-12 py-5 font-code text-sm font-bold uppercase tracking-widest text-n-8 bg-white rounded-2xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]" >
              Ver roadmap
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* --- ANZUELOS CON BURBUJAS DE REACT --- */}

      {/* Anzuelo 1 - Blanco (Izquierda) */}
      <div className="absolute top-0 left-[5%] md:left-[10%] animate-hook-entry pointer-events-none z-10" style={{ animationDelay: '0s, 1.5s' }}>
        <div className="w-[1px] h-[30vh] lg:h-[40vh] bg-gradient-to-b from-transparent via-white/20 to-white/60 mx-auto" />
        <div className="relative -mt-1 flex flex-col items-center">
          <svg viewBox="0 0 50 70" fill="none" className="relative z-10 w-[45px] h-[60px] lg:w-[60px] lg:h-[80px] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            <path d="M25 0V45C25 58.8071 13.8071 70 0 70M0 70L8 62" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <ReactLogo className="w-8 h-8 text-white/40" style={{ position: 'absolute', bottom: '20px', left: '-10px', animationDelay: '1s' }} />
          <ReactLogo className="w-5 h-5 text-white/30" style={{ position: 'absolute', bottom: '40px', right: '-5px', animationDelay: '3s' }} />
        </div>
      </div>

      {/* Anzuelo 2 - Púrpura (Derecha) */}
      <div className="absolute top-0 right-[25%] animate-hook-entry pointer-events-none z-10" style={{ animationDelay: '0.4s, 1.9s' }}>
        <div className="w-[1px] h-[20vh] lg:h-[25vh] bg-gradient-to-b from-transparent via-purple-500/20 to-purple-500 mx-auto" />
        <div className="relative -mt-1 flex flex-col items-center">
          <svg viewBox="0 0 50 70" fill="none" className="relative z-10 w-[40px] h-[55px] lg:w-[50px] lg:h-[70px] text-purple-500 drop-shadow-[0_0_15px_rgba(172,106,255,0.6)]">
            <path d="M25 0V45C25 58.8071 13.8071 70 0 70M0 70L8 62" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          </svg>
          <ReactLogo className="w-6 h-6 text-purple-500/40" style={{ position: 'absolute', bottom: '15px', right: '0px', animationDelay: '0.5s' }} />
          <ReactLogo className="w-4 h-4 text-purple-500/30" style={{ position: 'absolute', bottom: '30px', left: '5px', animationDelay: '2.5s' }} />
        </div>
      </div>

      {/* Anzuelo 3 - Naranja (Derecha Extrema) */}
      <div className="absolute top-0 right-[8%] animate-hook-entry pointer-events-none z-10" style={{ animationDelay: '0.8s, 2.3s' }}>
        <div className="w-[1px] h-[40vh] lg:h-[50vh] bg-gradient-to-b from-transparent via-color-2/20 to-color-2 mx-auto" />
        <div className="relative -mt-1 flex flex-col items-center">
          <svg viewBox="0 0 50 70" fill="none" className="relative z-10 w-[50px] h-[70px] lg:w-[70px] lg:h-[90px] text-color-2 drop-shadow-[0_0_15px_rgba(255,119,110,0.5)]">
            <path d="M25 0V45C25 58.8071 13.8071 70 0 70M0 70L8 62" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <ReactLogo className="w-10 h-10 text-color-2/40" style={{ position: 'absolute', bottom: '25px', left: '-15px', animationDelay: '1.5s' }} />
          <ReactLogo className="w-6 h-6 text-color-2/30" style={{ position: 'absolute', bottom: '10px', right: '-10px', animationDelay: '4s' }} />
        </div>
      </div>

      {/* Cruces Decorativas */}
      <div className="absolute top-10 left-10 w-4 h-4 text-n-6 opacity-40">+</div>
      <div className="absolute top-10 right-10 w-4 h-4 text-n-6 opacity-40">+</div>
      <div className="absolute bottom-10 left-10 w-4 h-4 text-n-6 opacity-40">+</div>
      <div className="absolute bottom-10 right-10 w-4 h-4 text-n-6 opacity-40">+</div>
    </section>
  );
};