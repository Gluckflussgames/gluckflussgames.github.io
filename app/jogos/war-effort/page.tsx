import type { Metadata } from "next";
import { WarEffortGamePage } from "@/features/war-effort/game-page";
import { en } from "@/lib/i18n/en";

export const metadata: Metadata = {
  title: en.war.title,
  description: en.war.description,
  openGraph: {
    title: en.war.title,
    description: en.war.description,
    images: [
      { url: "/assets/war-effort/main-menu.webp", width: 1578, height: 783, alt: en.war.menuAlt },
    ],
  },
};

export default function WarEffort() {
  return <WarEffortGamePage />;
}
