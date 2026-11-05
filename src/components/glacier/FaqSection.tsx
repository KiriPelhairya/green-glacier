import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { playClickSound, playHoverSound } from "@/lib/ui-sounds";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Which Minecraft edition and version can I use?",
    answer:
      "Green Glacier runs strictly on Minecraft Java Edition v26.3. Due to custom role-play mechanics and server plugins, Bedrock Edition and console versions are not supported.",
  },
  {
    question: "Do I need role-play experience?",
    answer:
      "None at all! Whether you're an experienced role-player with a detailed backstory or a complete beginner trying it for the first time, our community is built to be welcoming and approachable for everyone.",
  },
  {
    question: "Is it slice-of-life or fantasy?",
    answer:
      "It blends cozy slice-of-life township storytelling with gentle fantasy lore. You can run a small bakery, explore wilderness rumors, forge alliances, or simply hang out with fellow players.",
  },
  {
    question: "Do I need a character before joining?",
    answer:
      "No pre-made character sheet is required to hop in! You can simply log in, get a feel for the glacier valley, and let your character's persona and bonds develop naturally as you play.",
  },
  {
    question: "Where can I find the server address?",
    answer:
      "The official server IP is mc.greenglacier.tech. Simply copy it from the Server Connection box above, paste it into your Minecraft Java Edition Multiplayer menu, and click Join Server.",
  },
];

interface FaqSectionProps {
  soundEnabled: boolean;
}

export default function FaqSection({ soundEnabled }: FaqSectionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    if (soundEnabled) playClickSound();
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-6 bg-[#0a1614]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 flex flex-col">
          <span className="text-xs uppercase tracking-[0.25em] font-black text-[#fbcfe8] flex items-center gap-1.5">
            <span>✦ GOOD TO KNOW ✦</span>
          </span>

          <div className="flex items-center gap-3 mt-3">
            <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight">FAQ's</h2>
            <div className="w-12 h-12 rounded-2xl bg-[#fedfe1]/15 border-2 border-[#fedfe1]/40 flex items-center justify-center text-2xl text-[#fbcfe8] shadow-[0_0_15px_rgba(251,207,232,0.3)] animate-pulse">
              ❓
            </div>
          </div>

          <div className="mt-6 text-sm text-[#8eb0a8] leading-relaxed space-y-1">
            <p>enjoy role-playing with people from all around the world ✧</p>
            <p>and keep the story going even outside the server 🌸</p>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col divide-y divide-[#1e3d35] border-y border-[#1e3d35]">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={item.question}
                className={`py-5 transition-all duration-300 rounded-2xl px-3 ${
                  isOpen ? "bg-[#122822]/60" : "hover:bg-[#122822]/30"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  onMouseEnter={() => soundEnabled && playHoverSound()}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span
                    className={`text-base sm:text-lg font-bold transition-colors pr-6 ${
                      isOpen ? "text-[#fedfe1]" : "text-[#d7ebe5] group-hover:text-white"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? "bg-[#fedfe1] text-[#112320] rotate-180 scale-105 shadow-[0_0_12px_rgba(254,223,225,0.4)]"
                        : "bg-[#18362f] text-[#a0c4bb] group-hover:text-[#fedfe1] group-hover:scale-105"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-8 text-sm sm:text-base text-[#a7c9c0] leading-relaxed animate-faq-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
