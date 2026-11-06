import { useState, useEffect, useRef, type MouseEvent } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { BrandLogo } from "./components/glacier/Brandlogo";
import JoinSection from "./components/glacier/JoinSection";
import FaqSection from "./components/glacier/FaqSection";
import { playClickSound, playHoverSound } from "./lib/ui-sounds";

const YOUTUBE_URL = "https://youtube.com/@xcfq2?si=Mp3wzq_ApVFmEcgP";

export default function GreenGlacier() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Automatically play or pause the background audio based on soundEnabled state
  useEffect(() => {
    if (audioRef.current) {
      if (soundEnabled) {
        audioRef.current.play().catch(() => {
          // Browser policy will allow playback once the user interacts with the page
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [soundEnabled]);

  const onHover = () => {
    if (soundEnabled) playHoverSound();
  };

  const onClick = () => {
    if (soundEnabled) playClickSound();
  };

  const scrollToJoin = (e: MouseEvent) => {
    e.preventDefault();
    onClick();
    document.getElementById("server-connect")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-[#0b1715] text-[#e2edea] font-sans antialiased selection:bg-[#fbcfe8] selection:text-[#112320]">
      {/* Background Audio Element looping your track */}
      <audio
        ref={audioRef}
        src="/audio/background-music.wav"
        loop
        preload="auto"
      />

      <header className="w-full border-b border-[#24473e]/70 bg-[#0e1d1a]/85 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#1b4332] via-[#40916c] to-[#fbcfe8] p-[2px] shadow-[0_0_18px_rgba(251,207,232,0.35)] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <BrandLogo className="w-9 h-9 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm tracking-[0.2em] font-black uppercase text-[#e9f5f0] drop-shadow-sm flex items-center gap-1.5">
                GREEN GLACIER
                <span className="text-xs text-[#fedfe1]">🌸</span>
              </span>
              <span className="text-[10px] text-[#86b5a8] font-medium tracking-wider -mt-0.5">
                cozy minecraft rp ✧
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);
                if (next) playHoverSound();
              }}
              onMouseEnter={onHover}
              aria-label="Toggle sound effects"
              title={soundEnabled ? "Mute cute sounds" : "Unmute cute sounds"}
              className="p-2.5 rounded-full border border-[#3b5951] bg-[#132723]/80 hover:bg-[#1f3f37] text-[#9abeb5] hover:text-[#fedfe1] transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              {soundEnabled ? (
                <span className="flex items-center gap-1 text-[11px] font-bold text-[#fedfe1] px-1">
                  <Volume2 className="w-3.5 h-3.5 text-[#fbcfe8]" />
                  <span className="hidden sm:inline">Sound on</span>
                </span>
              ) : (
                <span className="flex items-center gap-1 text-[11px] font-medium text-[#7d9e95] px-1">
                  <VolumeX className="w-3.5 h-3.5 opacity-60" />
                  <span className="hidden sm:inline">Muted</span>
                </span>
              )}
            </button>

            <button
              onClick={scrollToJoin}
              onMouseEnter={onHover}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#4a7266] bg-gradient-to-r from-[#17332c] to-[#1e4239] hover:from-[#21493f] hover:to-[#2b594e] hover:border-[#fbcfe8] transition-all text-xs font-bold tracking-wide text-[#fdf2f4] shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_16px_rgba(251,207,232,0.25)] hover:scale-105 active:scale-95"
            >
              <span>How to join</span>
              <span className="text-[#fedfe1]">↗</span>
            </button>
          </div>
        </div>
      </header>

      <section className="relative w-full pt-16 pb-24 px-6 overflow-hidden bg-[#0c1816]">
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            backgroundImage: `radial-gradient(#568478 1.4px, transparent 1.4px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute top-12 left-10 text-[#fedfe1]/40 text-lg animate-pulse pointer-events-none">✦</div>
        <div className="absolute top-28 left-1/3 text-[#fbcfe8]/50 text-2xl animate-bounce pointer-events-none duration-1000">
          ✧
        </div>
        <div className="absolute top-20 right-20 text-[#a7f3d0]/40 text-xl animate-pulse pointer-events-none">
          ⋆｡°✩
        </div>
        <div className="absolute bottom-16 right-1/3 text-[#fedfe1]/40 text-sm animate-pulse pointer-events-none">
          🌸
        </div>
        <div className="absolute bottom-24 left-16 text-[#fef08a]/35 text-base animate-pulse pointer-events-none">
          ✨
        </div>

        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2d6a4f]/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#ffb4c8]/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-[#52b788]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16332c] border border-[#2d5c50] text-xs font-bold text-[#fedfe1] w-fit mb-6 shadow-sm">
              <span className="text-[#fbcfe8]">✧</span>
              <span>welcome to the server</span>
              <span className="text-[#fbcfe8]">✧</span>
            </div>

            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tight text-[#fedfe1] leading-[0.92] select-none drop-shadow-[0_4px_24px_rgba(254,223,225,0.25)]">
              <span className="block hover:translate-x-2 transition-transform duration-300">Ready</span>
              <span className="block mt-4 hover:translate-x-2 transition-transform duration-300">to</span>
              <span className="block mt-4 hover:translate-x-2 transition-transform duration-300 flex items-center gap-4">
                join?
                <span className="text-4xl sm:text-5xl md:text-6xl text-[#fbcfe8] animate-pulse">✧</span>
              </span>
            </h1>

            <div className="mt-14 w-full max-w-lg border-b-2 border-dashed border-[#29463e]" />
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group cursor-pointer select-none">
              <div className="absolute -inset-10 bg-gradient-to-r from-[#52b788]/35 via-[#fbcfe8]/30 to-[#74c69d]/30 rounded-full blur-3xl group-hover:blur-[80px] transition-all duration-700 opacity-95 animate-pulse" />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <BrandLogo className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(251,207,232,0.4)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#091513] border-y border-[#1c3931] py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit xcfq2 on YouTube"
              onClick={onClick}
              onMouseEnter={onHover}
              className="w-12 h-12 rounded-2xl border-2 border-[#4d7d70] bg-[#142c26] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.3)] group hover:border-[#fbcfe8] hover:scale-110 hover:rotate-3 transition-all"
            >
              <Play className="w-5 h-5 text-[#fedfe1] fill-[#fedfe1] ml-0.5 group-hover:scale-110 transition-transform" />
            </a>
            <div>
              <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                <span className="font-extrabold text-white text-base">See what's new!</span>
                <span className="text-[#f9c74f] text-sm animate-pulse">✨</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#fedfe1]/15 text-[#fedfe1] font-bold border border-[#fedfe1]/30">
                  new video
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#93b3ab] mt-0.5">
                Pop over to xcfq2's YouTube channel to watch the latest videos.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://discord.gg/zTgqgaYj2B"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClick}
              onMouseEnter={onHover}
              className="px-5 py-2.5 rounded-full border border-[#3b5e48] bg-[#162a1d]/90 hover:bg-[#1f3a28] hover:border-[#fbcfe8] text-[#e6f4ea] font-black text-xs sm:text-sm tracking-wide transition-all shadow-md hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Join our discord</span>
            </a>

            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClick}
              onMouseEnter={onHover}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#fedfe1] to-[#ffd1dc] hover:from-white hover:to-[#ffe4ec] text-[#112320] font-black text-xs sm:text-sm tracking-wide transition-all shadow-[0_4px_16px_rgba(254,223,225,0.35)] hover:shadow-[0_6px_22px_rgba(254,223,225,0.5)] hover:scale-105 active:scale-95 flex items-center gap-2 shrink-0"
            >
              <span>Watch new videos</span>
              <span className="text-sm">↗</span>
            </a>
          </div>
        </div>
      </section>

      <JoinSection soundEnabled={soundEnabled} />

      <FaqSection soundEnabled={soundEnabled} />

      <footer className="w-full bg-[#081210] border-t border-[#162925] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e8a82]">
          <p className="font-semibold text-[#8caea4]">Green Glacier founded by xcfq2</p>
          <p>© 2026 xcfq2</p>
        </div>
      </footer>
    </div>
  );
}
