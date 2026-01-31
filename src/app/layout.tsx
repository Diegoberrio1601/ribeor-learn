import type { Metadata } from "next";
import { Sora, Source_Code_Pro } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

/* ================================
   Fonts
================================ */

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "600"],
  display: "swap",
});

const code = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-code",
  display: "swap",
});

/* ================================
   SEO Metadata — Ribeor Learn
================================ */

export const metadata: Metadata = {
  metadataBase: new URL("https://learn.ribeor.com"),
  title: {
    default: "Ribeor Learn — Aprende React y Frontend Moderno",
    template: "%s | Ribeor Learn",
  },
  description:
    "Ribeor Learn es una plataforma open source para dominar React, Hooks y patrones modernos de frontend. Aprende desde fundamentos hasta nivel profesional con ejemplos reales.",
  keywords: [
    "React", "React Hooks", "Frontend", "JavaScript", "React 19",
    "useState", "useEffect", "Zustand", "Open Source", "Frontend avanzado", "Ribeor",
  ],
  authors: [{ name: "Diego Berrio", url: "https://github.com/diegoberrio1601" }],
  creator: "Diego Berrio",
  publisher: "Ribeor",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "https://learn.ribeor.com" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://learn.ribeor.com",
    siteName: "Ribeor Learn",
    title: "Ribeor Learn — Frontend Moderno desde Cero",
    description: "Plataforma educativa open source creada por Diego Berrio para aprender React, Hooks y arquitectura frontend moderna.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ribeor Learn — Plataforma educativa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ribeor Learn",
    description: "Aprende React y frontend moderno con una plataforma open source.",
    images: ["/og-image.png"],
    creator: "@diegoberrio",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`
          ${sora.variable}
          ${code.variable}
          font-sans
          bg-n-8
          text-n-1
          antialiased
          selection:bg-purple-500/30
          selection:text-white
          transition-colors duration-300
        `}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}