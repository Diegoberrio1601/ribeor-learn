"use client";

import { Sparkles, Terminal, Code2, ArrowRight } from "lucide-react";

const roadmapData = [
  { 
    id: "0", 
    level: "NIVEL 1",
    title: "Fundamentales", 
    text: "Domina la base esencial de React. Estos Hooks son el 90% de lo que usarás en el día a día para gestionar estado y ciclos de vida.", 
    hooks: [
      "useState",
      "useEffect",
      "useContext",
      "useRef",
    ],
  },
  { 
    id: "1", 
    level: "NIVEL 2",
    title: "Avanzados", 
    text: "Lleva tu lógica a otro nivel. Aprende a manejar estados complejos, referencias imperativas y sincronización externa.", 
    hooks: [
      "useLayoutEffect",
      "useId",
      "useReducer",
      "useImperativeHandle",
      "useSyncExternalStore",
    ],
  },
  { 
    id: "2", 
    level: "NIVEL 3",
    title: "Rendimiento", 
    text: "Evita re-renders innecesarios y mejora la experiencia con renderizado prioritario y memorización inteligente.", 
    hooks: [
      "useMemo",
      "useCallback",
      "useDeferredValue",
      "useTransition",
    ],
  },
  { 
    id: "3", 
    level: "NIVEL 4",
    title: "Moderno / React 19", 
    text: "La vanguardia del desarrollo. Domina las nuevas APIs de formularios y estados optimistas de la nueva era.", 
    hooks: [
      "useActionState",
      "useOptimistic",
    ],
    badge: "NUEVO",
  },
];

export const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="relative py-20 bg-grid overflow-hidden transition-colors duration-500"
    >
      {/* Glow ambiental - Ajustado para ser sutil en ambos modos */}
      <div className="absolute top-0 left-1/4 w-full h-full pointer-events-none opacity-20 dark:opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-purple-500/20 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-2">

        {/* Encabezado */}
        <div className="text-center max-w-[50rem] mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 border border-n-1/10 rounded-full font-code text-xs uppercase tracking-widest text-n-3 bg-n-8/50">
            <Terminal size={14} className="mr-2 text-purple-500" />
            [ Guía de Aprendizaje ]
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-n-1 transition-colors">
            Tu ruta para ser <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 via-purple-500 to-color-2">
              Experto en Hooks
            </span>
          </h2>
        </div>

        {/* Grid de tarjetas */}
        <div className="relative grid gap-10 md:grid-cols-2 md:gap-x-12 md:pb-[7rem]">
          {roadmapData.map((item) => (
            <div
              key={item.id}
              className="group relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-n-6 to-n-8 even:md:translate-y-[7rem] transition-all duration-500"
            >
              <div className="relative p-8 md:p-14 bg-n-13 rounded-[2.4rem] overflow-hidden flex flex-col border border-transparent group-hover:border-n-1/10 transition-all duration-500">

                <div className="relative z-1 w-full">

                  {/* Header tarjeta */}
                  <div className="flex items-center justify-between w-full mb-8">
                    <span className="font-code text-xs text-color-1 tracking-widest px-3 py-1 bg-color-1/10 rounded-lg border border-color-1/20">
                      {item.level}
                    </span>

                    {item.badge && (
                      <div className="inline-flex items-center px-3 py-1 bg-color-2 rounded-full text-[10px] font-code uppercase text-white font-bold">
                        <Sparkles size={12} className="mr-2" />
                        {item.badge}
                      </div>
                    )}
                  </div>

                  {/* Contenido */}
                  <h3 className="text-3xl md:text-4xl font-bold mb-5 text-n-1 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-n-3 text-lg leading-relaxed mb-8">
                    {item.text}
                  </p>

                  {/* Hooks */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 no-select">
                    {item.hooks.map((hook, index) => (
                      <div
                        key={index}
                        className="flex items-center px-4 py-3 bg-n-8 border border-n-1/10 rounded-xl font-code text-[13px] text-n-2 hover:border-purple-500/40 hover:text-n-1 transition-all"
                      >
                        <Code2
                          size={14}
                          className="mr-3 text-purple-500 opacity-70 flex-shrink-0"
                        />
                        <span className="truncate">{hook}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20 md:mt-40">
          <button className="relative group p-[1.5px] rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-color-1 via-purple-500 to-color-2" />
            <div className="relative px-12 py-4 bg-n-13 rounded-[11px] group-hover:bg-transparent transition-all duration-300">
              <span className="flex items-center font-code text-sm font-bold uppercase tracking-[0.25em] text-n-1 group-hover:text-white transition-colors">
                Comenzar ahora
                <ArrowRight
                  size={18}
                  className="ml-3 group-hover:translate-x-1 transition-transform"
                />
              </span>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};