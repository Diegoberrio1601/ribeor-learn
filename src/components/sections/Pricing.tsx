"use client";

import {
  Github,
  Heart,
  CheckCircle2,
  MessageSquare,
  Coffee,
} from "lucide-react";

interface ContributionItem {
  id: string;
  title: string;
  description: string;
  action: string;
  url: string;
  features: string[];
  highlight: boolean;
}

interface PricingProps {
  dict: {
    tag: string;
    title: string;
    titleLine2: string;
    titleAccent: string;
    description: string;
    footer: string;
    cards: ContributionItem[];
  };
}

export const Pricing = ({ dict }: PricingProps) => {
  return (
    <section
      id="pricing"
      className="relative py-20 lg:py-40 bg-n-8 overflow-hidden transition-colors duration-500"
    >
      {/* Glow de fondo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-purple-500/10 blur-[150px] rounded-full dark:opacity-100 opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-[50rem] mx-auto mb-16 text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 border border-n-1/10 rounded-full font-code text-xs uppercase tracking-widest text-n-3 bg-n-8/50 transition-colors">
            <MessageSquare size={14} className="mr-2 text-purple-500" />
            [ {dict.tag} ]
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-n-1 transition-colors">
            {dict.title} <br />
            {dict.titleLine2}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-purple-500">
              {dict.titleAccent}
            </span>
          </h2>

          <p className="text-n-3 text-lg md:text-xl leading-relaxed">
            {dict.description}
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-8 max-lg:flex-col justify-center items-stretch">
          {dict.cards.map((item) => (
            <div
              key={item.id}
              className={`relative flex flex-col w-full lg:w-[35rem] p-[1px] rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${
                item.highlight
                  ? "bg-gradient-to-b from-purple-500 to-n-8"
                  : "bg-n-6"
              }`}
            >
              <div className="relative flex flex-col h-full p-8 lg:p-12 bg-n-13 rounded-[2.4rem] overflow-hidden z-10 transition-colors duration-500">
                {/* Header */}
                <div className="mb-10 flex justify-between items-start">
                  <div>
                    <h4 className="text-4xl font-bold mb-4 text-n-1 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-n-4 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="p-4 bg-n-8 rounded-2xl border border-n-1/10 shadow-sm transition-colors">
                    {item.id === "0" ? (
                      <Github className="text-color-1 animate-pulse" size={32} />
                    ) : (
                      <Heart className="text-purple-500 animate-pulse" size={32} />
                    )}
                  </div>
                </div>

                {/* Botón CTA */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`mb-12 w-full text-center py-5 rounded-2xl font-code text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                    item.highlight
                      ? "bg-purple-500 text-white hover:bg-purple-600 shadow-[0_10px_30px_rgba(172,106,255,0.3)]"
                      : "border border-n-1/20 hover:bg-n-6 text-n-1 hover:text-n-1"
                  }`}
                >
                  {item.action}
                </a>

                {/* Features */}
                <ul className="space-y-6 no-select">
                  {item.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start pt-6 border-t border-n-1/10"
                    >
                      <CheckCircle2
                        size={22}
                        className="text-purple-500 mt-1 mr-4 flex-shrink-0"
                      />
                      <p className="text-n-2 text-[15px] leading-relaxed font-medium transition-colors">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Decoración de fondo */}
                <div className="absolute bottom-0 right-0 opacity-[0.05] pointer-events-none text-n-1">
                  {item.id === "1" ? (
                    <Coffee size={200} />
                  ) : (
                    <Github size={200} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer message */}
        <p className="text-center mt-16 font-code text-xs uppercase tracking-[0.3em] text-n-4">
          {dict.footer}
        </p>
      </div>
    </section>
  );
};