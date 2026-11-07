"use client";

import { ArrowDown, ArrowUpRight, ArrowRight, Play } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useLanguage } from "@/components/language-provider";

export function PublisherHomePage() {
  const { t } = useLanguage();
  const c = t.home;
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <section id="inicio" className="publisher-home-hero" aria-labelledby="publisher-home-title">
          <div className="publisher-home-top">
            <span className="eyebrow">
              <span className="small-cross" aria-hidden="true">
                ✳
              </span>{" "}
              GLÜCKFLUSS GAMES
            </span>
            <span className="publisher-home-edition">{c.publisherLabel}</span>
          </div>
          <div id="publisher" className="publisher-home-grid">
            <div className="publisher-home-copy">
              <span className="eyebrow">{c.greeting}</span>
              <h1 id="publisher-home-title">
                {c.headline}
                <br />
                <em>{c.headlineAccent}</em>
              </h1>
              <p>{c.intro}</p>
              <p>{c.about}</p>
              <a className="publisher-home-cta" href="#jogos">
                {c.discover}
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="publisher-home-mark">
              <img
                src="/assets/brand/gluckfluss-logo-white.png"
                alt={t.nav.logoAlt}
                width="1312"
                height="1199"
              />
              <span>{c.logoCaption}</span>
            </div>
          </div>
          <div className="publisher-home-bottom">
            <span>{c.universes}</span>
            <a href="#jogos">
              {c.explore}
              <ArrowDown size={14} />
            </a>
          </div>
        </section>
        <div className="manifesto-strip">
          <span>{c.stripStart}</span>
          <span className="strip-symbol" aria-hidden="true">
            ✳
          </span>
          <span>{c.stripEnd}</span>
          <a href="#jogos" aria-label={c.discover}>
            <ArrowDown size={24} />
          </a>
        </div>
        <section className="games-section section-shell" id="jogos" aria-labelledby="games-title">
          <div className="section-top">
            <span className="eyebrow">
              <span className="section-number">01 /</span>
              {c.catalog}
            </span>
            <span className="catalog-count">{c.catalogCount}</span>
          </div>
          <div className="section-heading">
            <h2 id="games-title">
              {c.catalogHeading}
              <br />
              <em>{c.catalogAccent}</em>
            </h2>
            <p>{c.catalogDescription}</p>
          </div>
          <div className="games-grid">
            <article className="game-card war-card">
              <a className="game-art war-art" href="/jogos/war-effort/" aria-label={c.discoverWar}>
                <img
                  src="/assets/war-effort/main-menu.webp"
                  alt={c.warAlt}
                  width="1578"
                  height="783"
                  loading="lazy"
                />
                <span className="art-shade" />
                <span className="art-top">
                  <span className="pill">{c.warLabel}</span>
                  <span>01 / 02</span>
                </span>
                <span className="war-wordmark">WAR EFFORT</span>
                <span className="card-play">
                  <Play size={22} fill="currentColor" />
                </span>
                <span className="art-bottom">
                  GLÜCKFLUSS GAMES<span>01 / 02</span>
                </span>
              </a>
              <div className="game-meta">
                <div>
                  <span className="eyebrow game-kicker">{c.warLabel}</span>
                  <h3>
                    <a href="/jogos/war-effort/">War Effort</a>
                  </h3>
                </div>
                <a className="round-link" href="/jogos/war-effort/" aria-label={c.discoverWar}>
                  <ArrowUpRight size={23} />
                </a>
              </div>
              <p className="game-description">{c.warDescription}</p>
            </article>
            <article className="game-card bulicho-card">
              <a
                className="game-art bulicho-art has-gameplay"
                href="/jogos/bulicho-de-campanha/"
                aria-label={c.discoverBulicho}
              >
                <img
                  className="bulicho-card-scene"
                  src="/assets/bulicho-de-campanha/chimarrao.jpg"
                  alt={c.bulichoAlt}
                  width="1920"
                  height="1080"
                  loading="lazy"
                />
                <span className="art-shade" />
                <span className="art-top">
                  <span className="pill">{c.development}</span>
                  <span>02 / 02</span>
                </span>
                <img
                  className="bulicho-card-logo"
                  src="/assets/bulicho-de-campanha/logo.webp"
                  alt="Bulicho de Campanha"
                  width="128"
                  height="128"
                  loading="lazy"
                />
                <span className="art-bottom">
                  {c.welcome}
                  <span>GG.</span>
                </span>
              </a>
              <div className="game-meta">
                <div>
                  <span className="eyebrow game-kicker">{c.bulichoLabel}</span>
                  <h3>
                    <a href="/jogos/bulicho-de-campanha/">Bulicho de Campanha</a>
                  </h3>
                </div>
                <a
                  className="round-link"
                  href="/jogos/bulicho-de-campanha/"
                  aria-label={c.discoverBulicho}
                >
                  <ArrowUpRight size={22} />
                </a>
              </div>
              <p className="game-description">{c.bulichoDescription}</p>
            </article>
          </div>
        </section>
        <section
          id="contato"
          className="contact-section section-shell"
          aria-labelledby="contact-title"
        >
          <span className="eyebrow">
            <span className="section-number">02 /</span>
            {c.follow}
          </span>
          <div className="contact-content">
            <h2 id="contact-title">
              {c.contactHeading}
              <br />
              <em>{c.contactAccent}</em>
            </h2>
            <div className="contact-aside">
              <p>{c.followDescription}</p>
              <a
                className="light-button"
                href="https://github.com/Gluckflussgames"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.nav.github}
                <ArrowUpRight size={20} />
                <span className="sr-only">{t.nav.external}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter home />
    </>
  );
}
