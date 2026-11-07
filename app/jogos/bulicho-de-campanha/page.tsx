import type { Metadata } from "next";
import { BulichoGamePage } from "@/features/bulicho-de-campanha/game-page";
import { en } from "@/lib/i18n/en";

export const metadata: Metadata = {
  title: en.bulicho.title,
  description: en.bulicho.description,
  openGraph: {
    title: en.bulicho.title,
    description: en.bulicho.description,
    images: [
      {
        url: "/assets/bulicho-de-campanha/chimarrao.jpg",
        width: 1920,
        height: 1080,
        alt: en.bulicho.heroAlt,
      },
    ],
  },
};

export default function BulichoDeCampanha() {
  return <BulichoGamePage />;
}
