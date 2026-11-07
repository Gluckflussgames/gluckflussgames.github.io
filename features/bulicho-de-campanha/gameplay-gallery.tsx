"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { useLanguage } from "@/components/language-provider";

export function GameplayGallery() {
  const { t } = useLanguage();
  const c = t.bulicho;
  const clips = c.clips;
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const clip = clips[selected];
  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % clips.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + clips.length) % clips.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = clips.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }
  return (
    <div className="gameplay-gallery">
      <div className="gameplay-tabs" role="tablist" aria-label={c.gameplayTabs}>
        {clips.map((item, index) => (
          <button
            key={item.file}
            type="button"
            role="tab"
            id={"gameplay-tab-" + item.file}
            aria-selected={selected === index}
            aria-controls="gameplay-panel"
            tabIndex={selected === index ? 0 : -1}
            ref={(element) => {
              tabs.current[index] = element;
            }}
            onKeyDown={(event) => onKey(event, index)}
            onClick={() => setSelected(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div
        id="gameplay-panel"
        className="gameplay-panel"
        role="tabpanel"
        aria-labelledby={"gameplay-tab-" + clip.file}
        tabIndex={0}
      >
        <video
          key={clip.file}
          controls
          playsInline
          preload="none"
          poster={"/assets/bulicho-de-campanha/" + clip.file + ".jpg"}
          aria-label={clip.title + c.videoSuffix}
        >
          <source src={"/assets/bulicho-de-campanha/" + clip.file + ".mp4"} type="video/mp4" />
          {c.videoFallback}{" "}
          <a href={"/assets/bulicho-de-campanha/" + clip.file + ".mp4"}>{c.openVideo}</a>
        </video>
        <div className="gameplay-clip-description">
          <div>
            <span className="eyebrow">{clip.label}</span>
            <h3>{clip.title}</h3>
          </div>
          <p>{clip.description}</p>
        </div>
      </div>
      <p className="development-caption">{c.developmentCaption}</p>
    </div>
  );
}
