"use client";
import { useEffect, useRef } from "react";

export default function AdBannerFreelance({ spot = "inline" }: { spot?: string }) {
  const loaded = useRef(false);
  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    const s = document.createElement("script");
    s.async = true;
    s.dataset.cfasync = "false";
    s.src = "https://pl30918975.effectivecpmnetwork.com/d9d0a0b313e8d829e5008868557cdac8/invoke.js";
    document.body.appendChild(s);
  }, []);
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm no-print" data-ad-spot={spot} aria-label="Advertisement">
      <p className="text-[11px] text-gray-400 tracking-widest uppercase text-center mb-2 font-medium">Sponsored</p>
      <div id="container-d9d0a0b313e8d829e5008868557cdac8" className="min-h-[90px] flex items-center justify-center bg-gray-50 rounded-xl border border-dashed border-gray-200" />
    </div>
  );
}

export function DirectLinkCta({ variant = "button" }: { variant?: "button" | "banner" }) {
  const href = "https://www.effectivecpmnetwork.com/efcmas0qkd?key=73bf03acf481effec355869d60a1daf7";
  if (variant === "banner") {
    return (
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 no-print">
        <div>
          <p className="text-sm font-semibold text-amber-900">💼 Recommended Freelance Tools</p>
          <p className="text-xs text-amber-700/80">Hand-picked tools freelancers use to earn more & work less — sponsored.</p>
        </div>
        <a href={href} target="_blank" rel="noopener sponsored" className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-xl hover:bg-amber-700 transition-colors shadow-sm">
          Explore Tools →
        </a>
      </div>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener sponsored" className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-amber-200 text-amber-800 text-sm font-medium rounded-full hover:bg-amber-50 transition-colors no-print">
      💼 Recommended Freelance Tools
    </a>
  );
}
