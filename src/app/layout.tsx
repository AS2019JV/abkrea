import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ABKREA Ingeniería | Capacitación Técnica y Certificación SETEC",
  description: "Centro de capacitación técnica avanzada de élite en Ambato, Ecuador. Cursos oficiales de SolidWorks, Rhinoceros, Electricidad, Soldadura y Mecánica con acreditación legal MDT/SETEC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full bg-brand-navy text-brand-silver font-sans flex flex-col selection:bg-brand-blue/30 selection:text-brand-silver">
        {children}
      </body>
    </html>
  );
}
