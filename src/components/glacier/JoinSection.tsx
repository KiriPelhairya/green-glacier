import { useState } from "react";
import { Check, Copy, Server } from "lucide-react";
import { playHoverSound, playSparkleSound } from "@/lib/ui-sounds";

const SERVER_IP = "mc.greenglacier.tech";

interface JoinSectionProps {
  soundEnabled: boolean;
}

export default function JoinSection({ soundEnabled }: JoinSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      if (soundEnabled) playSparkleSound();
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard blocked: leave the button unchanged so it doesn't claim success
    }
  };

  const onHover = () => {
    if (soundEnabled) playHoverSound();
  };

  return (
    <section
      id="server-connect"
      className="relative w-full py-20 px-6 bg-[#0e211d] border-b border-[#1b3831] scroll-mt-20"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(116, 198, 157, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(116, 198, 157, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#a2cbbf]">
              ✦ YOUR NEXT CHAPTER ✦
            </span>
            <span className="text-xs text-[#fedfe1]">🌱</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-serif font-black text-white mt-3 tracking-tight flex items-baseline gap-3">
            Come on in.
            <span className="text-2xl text-[#fedfe1] font-sans">₍ᐢ.ˬ.ᐢ₎</span>
          </h2>

          <p className="mt-6 text-[#b7d3cc] text-base sm:text-lg leading-relaxed max-w-xl">
            New to Minecraft role-play? Already have a character in mind? Either way, the first step is simply
            showing up with an open mind.
          </p>

          <div className="mt-10 space-y-6 max-w-xl">
            {[
              "Use Minecraft Java Edition v26.3. Green Glacier does not support cross-play, so Bedrock Edition cannot join.",
              "Read the server's community rules and any character or application guidelines when available.",
              "Add the official server address in Minecraft, join, and start meeting the world.",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 p-3 rounded-2xl hover:bg-[#152e27]/60 transition-colors group"
              >
                <div className="w-10 h-10 rounded-2xl border-2 border-[#598c80] bg-gradient-to-br from-[#18362f] to-[#122822] flex items-center justify-center shrink-0 text-sm font-black text-[#fedfe1] group-hover:border-[#fbcfe8] group-hover:scale-110 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base text-[#d2e7e1] leading-relaxed pt-1.5">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-[32px] p-[2px] bg-gradient-to-b from-[#568a7d] via-[#2d564b] to-[#fbcfe8]/40 shadow-[0_24px_60px_rgba(0,0,0,0.6)] group hover:shadow-[0_24px_70px_rgba(251,207,232,0.2)] transition-shadow duration-500">
            <div className="bg-[#102420]/95 backdrop-blur-xl rounded-[30px] p-7 sm:p-9 flex flex-col border border-[#21433b]">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-white tracking-tight flex items-center gap-2">
                  Server connection
                  <span className="text-lg">✨</span>
                </h3>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18362e] border border-[#356155] text-[11px] font-bold text-[#98e2c4] shadow-inner">
                  <span className="w-2 h-2 rounded-full bg-[#52b788] animate-ping" />
                  <span>Java v26.3</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#9abeb5] mt-2.5 leading-relaxed">
                Enter this address in Minecraft Java Edition to join Green Glacier.
              </p>

              <div className="mt-8">
                <span className="text-[10px] uppercase font-black tracking-[0.22em] text-[#86aea4] block mb-2 flex items-center gap-1.5">
                  <span>SERVER ADDRESS</span>
                  <span className="text-[#fedfe1]">✧</span>
                </span>

                <div className="flex items-center justify-between gap-3 bg-[#16332d] border-2 border-[#315d52] hover:border-[#fbcfe8] rounded-2xl px-4 py-3.5 shadow-inner transition-all">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-7 h-7 rounded-lg bg-[#20443c] flex items-center justify-center shrink-0 text-[#74c69d]">
                      <Server className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-sm sm:text-base font-bold text-[#f2faf7] tracking-wider truncate">
                      {SERVER_IP}
                    </span>
                  </div>

                  <button
                    onClick={handleCopy}
                    onMouseEnter={onHover}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-black transition-all shadow-md hover:scale-105 active:scale-95 shrink-0 ${
                      copied
                        ? "bg-[#52b788] text-[#081c15] shadow-[0_0_15px_rgba(82,183,136,0.6)]"
                        : "bg-gradient-to-r from-[#fedfe1] to-[#ffd1dc] hover:from-white hover:to-[#ffe5ec] text-[#112320]"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied! ✧</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="w-full border-b border-[#24473e] my-7" />

              <div className="flex items-center gap-2 text-[11px] text-[#86aaa0] leading-relaxed">
                <span className="text-sm">🧊</span>
                <p>Green Glacier is for Minecraft Java Edition v26.3 only; cross-play is not supported.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
