"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useLanguage } from "@/components/language-provider";
import { ArrowDown, ArrowRight, Play } from "@/components/icons";

export function WarEffortGamePage() {
  const { t } = useLanguage();
  const c = t.war;
  return (
    <>
      <SiteHeader current="war" />
      <main id="conteudo">
        <section className="detail-hero war-detail" aria-labelledby="game-title">
          <img
            className="detail-backdrop"
            src="/assets/war-effort/main-menu.webp"
            alt=""
            width="1578"
            height="783"
          />
          <div className="detail-shade" />
          <nav className="breadcrumbs" aria-label={t.nav.main}>
            <a href="/">{t.nav.home}</a>
            <span aria-hidden="true">/</span>
            <a href="/#jogos">{t.nav.games}</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">War Effort</span>
          </nav>
          <div className="detail-hero-content">
            <span className="eyebrow">{c.presents}</span>
            <h1 id="game-title">
              WAR EFFORT<span>.</span>
            </h1>
            <div className="detail-hero-bottom">
              <p>
                {c.introLine1}
                <br />
                {c.introLine2}
              </p>
              <a href="#introducao" className="watch-button">
                <span className="play-circle">
                  <Play size={17} fill="currentColor" />
                </span>
                <span>
                  {c.watch}
                  <span className="button-note">{c.withAudio}</span>
                </span>
                <ArrowDown size={18} />
              </a>
            </div>
          </div>
          <div className="detail-hero-index">
            <span>WAR EFFORT</span>
            <span>{c.catalog}</span>
          </div>
        </section>
        <section
          id="introducao"
          className="intro-section section-shell"
          aria-labelledby="intro-title"
        >
          <div className="section-top">
            <span className="eyebrow">
              <span className="section-number">01 /</span>
              {c.introduction}
            </span>
            <span className="catalog-count">{c.originalAudio}</span>
          </div>
          <div className="section-heading">
            <h2 id="intro-title">
              {c.introHeading}
              <br />
              <em>{c.introAccent}</em>
            </h2>
            <p>{c.introDescription}</p>
          </div>
          <div className="inline-trailer">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/assets/war-effort/introduction-poster.jpg"
              aria-label={c.videoLabel}
            >
              <source src="/assets/war-effort/introduction.mp4" type="video/mp4" />
              {c.videoFallback}
              <a href="/assets/war-effort/introduction.mp4">{c.openVideo}</a>
            </video>
            <div className="trailer-caption">
              <span>{c.videoCaption}</span>
              <span>GLÜCKFLUSS GAMES</span>
            </div>
          </div>
        </section>
        <section
          className="war-screenshot-section section-shell"
          aria-labelledby="game-image-title"
        >
          <div className="section-top">
            <span className="eyebrow">
              <span className="section-number">02 /</span>
              {c.images}
            </span>
            <span className="catalog-count">{c.gameScreenshot}</span>
          </div>
          <div className="frames-heading">
            <h2 id="game-image-title">
              {c.imageHeading} <em>{c.imageAccent}</em>
            </h2>
          </div>
          <figure className="war-screenshot">
            <img
              src="/assets/war-effort/main-menu.webp"
              alt={c.menuAlt}
              width="1578"
              height="783"
              loading="lazy"
            />
            <figcaption>{c.menuCaption}</figcaption>
          </figure>
        </section>
        <section className="frames-section section-shell" aria-labelledby="frames-title">
          <div className="section-top">
            <span className="eyebrow">
              <span className="section-number">03 /</span>
              {c.scenes}
            </span>
            <span className="catalog-count">{c.introImages}</span>
          </div>
          <div className="frames-heading">
            <h2 id="frames-title">
              {c.scenesHeading} <em>{c.scenesAccent}</em>
            </h2>
            <p>{c.scenesDescription}</p>
          </div>
          <div className="frames-grid">
            {c.frames.map((frame) => (
              <figure key={frame.file}>
                <img
                  src={"/assets/war-effort/introduction-scene-" + frame.file + ".jpg"}
                  alt={frame.alt}
                  width="1280"
                  height="720"
                  loading="lazy"
                />
                <figcaption>{frame.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section className="next-game section-shell">
          <span className="eyebrow">{c.next}</span>
          <a className="next-game-link" href="/jogos/bulicho-de-campanha/">
            <h2>
              Bulicho <em>de Campanha.</em>
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
