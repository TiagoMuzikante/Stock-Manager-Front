import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOW Brasil",
  description: "Indústria com experiencia em lanças zero grau e plataformas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
