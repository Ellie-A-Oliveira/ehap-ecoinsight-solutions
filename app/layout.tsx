import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./components";
import { UserContextProvider } from "./contexts/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Environmental Health Analytics Platform (EHAP)",
  description: "A Environmental Health Analytics Platform (EHAP) da EcoInsight Solutions é uma ferramenta inovadora que integra dados de poluição oceânica e qualidade do ar para fornecer insights detalhados sobre a saúde ambiental. Ideal para pesquisadores, formuladores de políticas e empresas, a EHAP ajuda a melhorar práticas de sustentabilidade, apoiar decisões informadas e promover um futuro sustentável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black"}>
      <UserContextProvider>
        <Header />
          {children}
        <Footer />
      </UserContextProvider>
      </body>
    </html>
  );
}
