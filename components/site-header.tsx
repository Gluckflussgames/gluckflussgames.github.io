"use client";

import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Menu, X } from "./icons";
import { LanguageSwitch, useLanguage } from "./language-provider";

type HeaderProps = { current?: "war" | "bulicho" };
export function SiteHeader({ current }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const home = !current;
  const links = home
    ? [
        { href: "#publisher", label: t.nav.publisher },
        { href: "#jogos", label: t.nav.games },
      ]
    : [
        { href: "/jogos/war-effort/", label: "War Effort", active: current === "war" },
        {
          href: "/jogos/bulicho-de-campanha/",
          label: "Bulicho de Campanha",
          active: current === "bulicho",
        },
      ];
  return (
    <>
      <a className="skip-link" href="#conteudo">
        {t.nav.skip}
      </a>
      <header className={"site-header" + (home ? "" : " game-header")}>
        <a
          className="brand"
          href={home ? "#inicio" : "/"}
          aria-label={t.nav.homeLabel}
          onClick={() => setOpen(false)}
        >
          <img src="/assets/brand/gluckfluss-logo-white.png" alt="" width="66" height="60" />
          <span>
            GLÜCKFLUSS<span className="brand-subtitle">GAMES · PUBLISHER</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label={t.nav.main}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={"active" in link && link.active ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-contact" href={home ? "#contato" : "/#jogos"}>
            {home ? (
              <>
                {t.nav.contact}
                <ArrowUpRight size={16} />
              </>
            ) : (
              <>
                <ArrowLeft size={15} />
                {t.nav.allGames}
              </>
            )}
          </a>
          <LanguageSwitch />
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav id="mobile-menu" className="mobile-nav" aria-label={t.nav.mobile}>
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
                <ArrowUpRight />
              </a>
            ))}
            <a href={home ? "#contato" : "/#jogos"} onClick={() => setOpen(false)}>
              {home ? t.nav.contact : t.nav.allGames}
              <ArrowUpRight />
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
