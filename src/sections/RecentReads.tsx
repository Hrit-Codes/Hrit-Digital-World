import { useRef, useEffect } from 'react';
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "../UI/SectionHeader";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const colorVariants = [
  {
    text: 'text-[#80FFDB]',
    border: 'border-[#80FFDB]/25',
    bg: 'bg-[#80FFDB]/10',
    glow: 'hover:shadow-[0_0_18px_2px_#80FFDB30]',
    btnBorder: 'border-[#80FFDB]/40',
    imgBorder: 'ring-2 ring-[#80FFDB]',
  },
  {
    text: 'text-[#64DFDF]',
    border: 'border-[#64DFDF]/25',
    bg: 'bg-[#64DFDF]/10',
    glow: 'hover:shadow-[0_0_18px_2px_#64DFDF30]',
    btnBorder: 'border-[#64DFDF]/40',
    imgBorder: 'ring-2 ring-[#64DFDF]',
  },
  {
    text: 'text-[#72EFDD]',
    border: 'border-[#72EFDD]/25',
    bg: 'bg-[#72EFDD]/10',
    glow: 'hover:shadow-[0_0_18px_2px_#72EFDD30]',
    btnBorder: 'border-[#72EFDD]/40',
    imgBorder: 'ring-2 ring-[#72EFDD]',
  },
  {
    text: 'text-[#B79CED]',
    border: 'border-[#B79CED]/25',
    bg: 'bg-[#B79CED]/10',
    glow: 'hover:shadow-[0_0_18px_2px_#B79CED30]',
    btnBorder: 'border-[#B79CED]/40',
    imgBorder: 'ring-2 ring-[#B79CED]',
  },
  {
    text: 'text-[#006466]',
    border: 'border-[#006466]/25',
    bg: 'bg-[#006466]/10',
    glow: 'hover:shadow-[0_0_18px_2px_#00646630]',
    btnBorder: 'border-[#006466]/40',
    imgBorder: 'ring-2 ring-[#006466]',
  },
];

const posts = [
  {
    title: "Matt Shumer: 'AI models will soon be able to...",
    meta: "X Post · 2025",
    img: "",
    link:"https://x.com/i/status/2021256989876109403",
    color: colorVariants[0],
  },
  {
    title: "Vercel April 2026 Security Incident: What Happened & How to Respond",
    meta: "Security Bulletin · 6 min read · April 2026",
    img: "",
    link:"https://vercel.com/kb/bulletin/vercel-april-2026-security-incident",
    color: colorVariants[3],
  },
  {
    title: "The Boy Who Didn't Want to Die by Peter Lantos",
    meta: "Peter Lantos · 212 pages · Rated 4.4",
    img: "",
    link:"https://www.goodreads.com/book/show/75282953-the-boy-who-didn-t-want-to-die",
    color: colorVariants[2],
  },
];

export default function RecentReads() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="w-full h-full mb-20 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="w-full text-start flex justify-start">
          <SectionHeader
            subtitle="Journal"
            title="Recent thoughts"
            description="Short essays on craft, process, and the ideas behind the work."
          />
        </div>

        <div className="flex flex-col gap-4">
          {posts.map((post, i) => (
            <div
              key={i}
              ref={el => { itemRefs.current[i] = el; }}
            >
              <div className={`group flex items-center justify-between p-3 px-8 border rounded-full transition-all cursor-pointer ${post.color.bg} ${post.color.border} ${post.color.glow}`}>
                <div className="flex items-center gap-6">
                {post.img && (
                  <div className="w-20 h-20 shrink-0">
                    <img
                      src={post.img}
                      alt=""
                      className={`w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ${post.color.imgBorder}`}
                    />
                  </div>
                )}
                  <div className="flex flex-col gap-1">
                    <h4 className={`text-lg md:text-xl font-medium tracking-tight ${post.color.text}`}>
                      {post.title}
                    </h4>
                    <p className="text-white text-sm font-light">
                      {post.meta}
                    </p>
                  </div>
                </div>
                <a href={post.link} className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${post.color.text} ${post.color.btnBorder} group-hover:text-white`}>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}