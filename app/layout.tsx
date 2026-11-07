import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { en } from "@/lib/i18n/en";

export const metadata: Metadata = {
  metadataBase: new URL("https://gluckflussgames.github.io"),
  title: en.home.title,
  description: en.home.description,
  openGraph: {
    title: "Glückfluss Games",
    description: en.home.description,
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
