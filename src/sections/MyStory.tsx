import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const story = [
  {
    header: "Early Foundations",
    title: "Roots in Bhairahawa",
    description:
      "Born in Bhairahawa, I began my academic journey in a government school, where limited resources shaped a strong sense of discipline, adaptability, and self-driven learning from an early age."
  },
  {
    header: "Global Exposure",
    title: "Learning Beyond Borders",
    description:
      "I continued my studies in the UK up to Grade 8, gaining early international exposure. I also had the opportunity to travel across the UK, France, Germany, Turkey, India, and Nepal—broadening my perspective and cultural understanding."
  },
  {
    header: "Academic Direction",
    title: "+2 in Computer Science",
    description:
      "Returning to Nepal, I completed my higher secondary education at Ankuram Academy, choosing Computer Science as a specialization—marking my first formal step into the world of technology."
  },
  {
    header: "Undergraduate Journey",
    title: "BSc CSIT – Kathmandu",
    description:
      "I pursued my undergraduate degree in BSc CSIT in Kathmandu, stepping out of my comfort zone and consistently achieving top-ranking positions within my batch through dedication and academic excellence."
  },
  {
    header: "Technical Breakthrough",
    title: "MERN Stack Training",
    description:
      "During my 4th semester, I completed intensive MERN stack training at Agile Institute under the guidance of Mr. Arin Sunar, strengthening my foundation in full-stack web development and modern JavaScript technologies."
  },
  {
    header: "Industry Experience",
    title: "Fullstack Internship – Rabbit Studio",
    description:
      "I gained hands-on industry experience as a Fullstack Intern at Rabbit Studio, primarily focusing on frontend development and API integration while contributing to real-world production projects."
  },
  {
    header: "Professional Growth",
    title: "Junior Fullstack Developer",
    description:
      "Currently working as a Junior Fullstack Developer at Magnas Infotech Solutions, building scalable web applications using React.js, Next.js, MongoDB, Express.js, and Tailwind CSS."
  },
  {
    header: "Current Focus",
    title: "Building for Impact",
    description:
      "Passionate about building efficient, scalable, and user-centric web applications, I am continuously refining my skills in full-stack development while balancing academic and professional growth."
  }
];

const ROTATIONS = [-3, 2, -2, 4, -4, 3];

// Alternating color palette
const COLOR_PALETTE = ["#4d194d", "#312244", "#006466"];


// Define the story item type
interface StoryItem {
  header: string;
  title: string;
  description: string;
  color?:string,
}


export default function MyStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<StoryItem | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current && sectionRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom", 
          pin: contentRef.current,
          pinSpacing: false,
        });
      }

      if (leftColRef.current) {
        gsap.to(leftColRef.current, {
          y: -150, 
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }

      if (rightColRef.current) {
        gsap.to(rightColRef.current, {
          y: 150, 
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const total= story.length;

  return (
    <section ref={sectionRef} className="relative min-h-[200vh] md:min-h-[300vh] overflow-hidden">
      {/* Pinned center */}
      <div ref={contentRef} className="h-screen w-full flex items-center justify-center px-6 z-10 relative pointer-events-none">
        <div className="text-center max-w-2xl pointer-events-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.4em] bg-gradient-to-r from-[#80FFDB] to-[#64DFDF] bg-clip-text text-transparent filter drop-shadow-sm">Explorations</span>
            <span className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            My <span className="font-serif italic font-semibold bg-gradient-to-r from-[#B79CED] to-[#72EFDD] bg-clip-text text-transparent filter drop-shadow-sm">Story</span>
          </h2>
          <p className="text-sm md:text-base text-muted mt-4 max-w-md mx-auto">
            A journey shaped by curiosity, discipline, and continuous growth—across places, perspectives, and code.
          </p>
        </div>
      </div>

      {/* Zigzag cards */}
      <div className="relative z-20 max-w-2xl mx-auto px-6 pb-32 flex flex-col gap-16 md:gap-24">
        {story.map((item, i) => {
          const isLeft = i % 2 === 0;
          const color = COLOR_PALETTE[i % COLOR_PALETTE.length];
          const rotation = ROTATIONS[i] ?? 0;
          
          const lightboxItem={...item,color};

          return (
            <div
              key={item.header}
              className={`story-card w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
            >
              <div
                onClick={() => setLightbox(lightboxItem)}
                style={{
                  backgroundColor: color,
                  transform: `rotate(${isLeft ? Math.abs(rotation) * -1 : Math.abs(rotation)}deg)`,
                }}
                className="relative w-full max-w-[340px] md:max-w-[380px] rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-6 cursor-pointer transition-transform hover:scale-[1.03] hover:rotate-0"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                  <span className="text-[#80FFDB] text-xs font-bold tabular-nums">
                    {i+1}
                  </span>
                  <span className="text-white/30 text-xs">/</span>
                  <span className="text-white/40 text-xs tabular-nums">
                    {total}
                  </span>
                </div>

                <h2 className="text-center text-lg md:text-xl font-bold text-white mt-1">
                  {item.header}
                </h2>
                <h4 className="text-center text-sm md:text-base font-semibold text-white/80 mt-1">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-white/70 mt-3 leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <div className={`max-w-2xl w-full bg-gradient-to-br bg-[${lightbox.color}] rounded-2xl p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in duration-300`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-12 h-px bg-white" />
              <span className="text-xs text-white uppercase tracking-[0.4em] font-semibold">{lightbox.header}</span>
              <span className="w-12 h-px bg-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              {lightbox.title}
            </h3>
            <p className="text-white/90 text-base md:text-lg leading-relaxed text-center">
              {lightbox.description}
            </p>
            <div className="mt-8 text-center">
              <span className="text-white/60 text-sm">Click anywhere to close</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}