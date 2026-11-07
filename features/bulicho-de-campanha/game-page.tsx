"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useLanguage } from "@/components/language-provider";
import { GameplayGallery } from "./gameplay-gallery";
import { ArrowDown, ArrowRight, Play, Plus } from "@/components/icons";

export function BulichoGamePage() {
  const { t } = useLanguage();
  const c = t.bulicho;
  return (
    <>
      <SiteHeader current="bulicho" />
      <main id="conteudo" className="bulicho-page">
        <section className="bulicho-live-hero" aria-labelledby="game-title">
          <nav className="breadcrumbs" aria-label={t.nav.main}>
            <a href="/">{t.nav.home}</a>
            <span aria-hidden="true">/</span>
            <a href="/#jogos">{t.nav.games}</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Bulicho de Campanha</span>
          </nav>
          <div className="bulicho-live-grid">
            <div className="bulicho-live-copy">
              <span className="eyebrow">{c.greeting}</span>
              <h1 id="game-title">
                Bulicho
                <br />
                <em>de Campanha.</em>
              </h1>
              <p>
                {c.heroLine1}
                <br />
                {c.heroLine2}
              </p>
              <a href="#gameplay" className="bulicho-play-link">
                <span className="play-circle">
                  <Play size={16} fill="currentColor" />
                </span>
                <span>
                  {c.watch}
                  <span className="button-note">{c.realVideos}</span>
                </span>
                <ArrowDown size={18} />
              </a>
              <div className="bulicho-hero-tags">
                <span>{c.pixel}</span>
                <span>{c.countryGames}</span>
              </div>
            </div>
            <figure className="bulicho-live-art">
              <img
                className="bulicho-scene"
                src="/assets/bulicho-de-campanha/chimarrao.jpg"
                alt={c.heroAlt}
                width="1920"
                height="1080"
              />
              <img
                className="bulicho-game-logo"
                src="/assets/bulicho-de-campanha/logo.webp"
                alt={c.logoAlt}
                width="128"
                height="128"
              />
              <figcaption>
                <span>{c.heroCaption}</span>
                <span>{c.development}</span>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="bulicho-welcome section-shell" aria-labelledby="welcome-title">
          <span className="eyebrow">
            <span className="section-number">01 /</span>
            {c.welcome}
          </span>
          <div className="bulicho-welcome-grid">
            <h2 id="welcome-title">
              {c.welcomeHeading}
              <br />
              <em>{c.welcomeAccent}</em>
            </h2>
            <div>
              <p>{c.welcomeIntro}</p>
              <p>{c.welcomeGames}</p>
              <p>{c.welcomeFriendship}</p>
            </div>
          </div>
        </section>
        <section
          id="gameplay"
          className="bulicho-gameplay-section section-shell"
          aria-labelledby="gameplay-title"
        >
          <div className="section-top">
            <span className="eyebrow">
              <span className="section-number">02 /</span>
              {c.gameplay}
            </span>
            <span className="catalog-count">{c.gameplayNote}</span>
          </div>
          <div className="section-heading">
            <h2 id="gameplay-title">
              {c.gameplayHeading}
              <br />
              <em>{c.gameplayAccent}</em>
            </h2>
            <p>{c.gameplayDescription}</p>
          </div>
          <GameplayGallery />
        </section>
        <section className="bulicho-compadrio section-shell" aria-labelledby="compadrio-title">
          <div className="bulicho-partnership-art">
            <img
              src="/assets/bulicho-de-campanha/compadrio.jpg"
              alt={c.partnershipImage}
              width="1920"
              height="1080"
              loading="lazy"
            />
            <span className="eyebrow">{c.partnershipCaption}</span>
          </div>
          <div className="bulicho-partnership-copy">
            <span className="eyebrow">
              <span className="section-number">03 /</span>
              {c.partnership}
            </span>
            <h2 id="compadrio-title">
              {c.partnershipHeading}
              <br />
              <em>{c.partnershipAccent}</em>
            </h2>
            <p>{c.partnershipFirst}</p>
            <p>{c.partnershipSecond}</p>
            <a className="text-link" href="#medidores">
              {c.discoverMeters}
              <ArrowDown size={17} />
            </a>
          </div>
        </section>
        <section
          id="medidores"
          className="bulicho-conditions section-shell"
          aria-labelledby="conditions-title"
        >
          <span className="eyebrow">
            <span className="section-number">04 /</span>
            {c.choices}
          </span>
          <div className="conditions-grid">
            <div>
              <h2 id="conditions-title">
                {c.conditionHeading}
                <br />
                <em>{c.conditionAccent}</em>
              </h2>
              <p>{c.conditionIntro}</p>
              <span className="conditions-note">{c.conditionNote}</span>
            </div>
            <div className="conditions-list">
              {c.conditions.map((condition, index) => (
                <details key={condition.name} open={index === 0}>
                  <summary>
                    <span className="condition-index">0{index + 1}</span>
                    <span>
                      <span className="condition-label">{condition.label}</span>
                      <span className="condition-name">{condition.name}</span>
                    </span>
                    <Plus className="condition-plus" size={19} />
                  </summary>
                  <p>{condition.description}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="bulicho-scenes section-shell" aria-labelledby="scenes-title">
          <div className="section-top">
            <span className="eyebrow">
              <span className="section-number">05 /</span>
              {c.portraits}
            </span>
            <span className="catalog-count">{c.realScenes}</span>
          </div>
          <div className="frames-heading">
            <h2 id="scenes-title">
              {c.scenesHeading} <em>{c.scenesAccent}</em>
            </h2>
          </div>
          <div className="bulicho-scenes-grid">
            {c.scenes.map((scene) => (
              <figure key={scene.file}>
                <img
                  src={"/assets/bulicho-de-campanha/" + scene.file + ".jpg"}
                  alt={scene.title + " — Bulicho de Campanha"}
                  width="1920"
                  height="1080"
                  loading="lazy"
                />
                <figcaption>
                  <h3>{scene.title}</h3>
                  <p>{scene.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="development-caption">{c.disclaimer}</p>
        </section>
        <section className="next-game section-shell">
          <span className="eyebrow">{c.next}</span>
          <a className="next-game-link" href="/jogos/war-effort/">
            <h2 className="next-war-title">
              WAR EFFORT<span>.</span>
            </h2>
            <span className="next-game-arrow">
              <ArrowRight size={32} />
            </span>
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
