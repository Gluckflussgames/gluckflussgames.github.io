"use client";

import { ArrowUpRight } from "./icons";
import { useLanguage } from "./language-provider";

export function SiteFooter({ home = false }: { home?: boolean }) {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <a className="footer-brand" href={home ? "#inicio" : "/"}>
        Glückfluss<span>GAMES</span>
      </a>
      <span>© {new Date().getFullYear()} Glückfluss Games.</span>
      <a className="back-top" href={home ? "#inicio" : "/#jogos"}>
        {home ? t.nav.backTop : t.nav.allGames}
        <ArrowUpRight size={15} />
      </a>
    </footer>
  );
}
