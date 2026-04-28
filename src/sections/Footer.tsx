import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import type { ReactNode } from "react";

interface Social {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function Footer() {
  const socials: Social[] = [
    { href: "https://www.facebook.com/hrit.amatya.2025", icon: <Facebook size={18} />, label: "Facebook" },
    { href: "https://www.instagram.com/i_am__hrit/", icon: <Instagram size={18} />, label: "Instagram" },
    { href: "https://github.com/Hrit-Codes", icon: <Github size={18} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/hrit-amatya-b23289379/", icon: <Linkedin size={18} />, label: "LinkedIn" },
  ];

  return (
    <div className="w-full h-full ">
      <div className="w-full  mx-auto relative ">

        {/* Top accent bar */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#72EFDD] to-transparent" />

        {/* Glow strip */}
        <div className="w-full h-8 bg-gradient-to-b from-[#72EFDD]/10 to-transparent" />

        <div className="w-full max-w-5xl mx-auto px-6 pb-8">

          {/* Main Row */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">

            {/* Identity Block */}
            <div className="flex flex-col text-center md:text-start leading-tight tracking-tight">
              <h2 className="text-3xl font-extrabold text-[#80FFDB] -tracking-wide">
                Hrit Amatya
              </h2>
              <p className="text-2xl font-bold text-[#B79CED]">
                Full Stack <span className="text-[#64DFDF]">Developer</span>
              </p>

              {/* Availability Badge */}
              <div className="w-full flex flex-row justify-center items-center gap-2 mt-3  px-3 py-1 rounded-full border border-[#72EFDD]/25 bg-[#72EFDD]/10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-[#72EFDD]">
                  Available For Hire
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
              {socials.map((social: Social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-[#B79CED]/50 bg-[#B79CED]/15 text-[#B79CED] hover:bg-[#72EFDD]/15 hover:border-[#72EFDD] hover:text-[#80FFDB] hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
              </div>
              
              <div className="mt-4 flex flex-col">
                <h4 className="text-center tracking-[0.2em] my-1 text-sm">Get In Touch</h4>
                <a href="mailto:privhritamatya@gmail.com" className="font-semibold tracking-[0.1em] bg-gradient-to-r from-[#80FFDB] to-[#64DFDF] bg-clip-text text-transparent drop-shadow-lg border border-[#72EFDD]/25 bg-[#72EFDD]/10 px-4 py-3 rounded-2xl">privhritamatya@gmail.com</a>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="w-full my-6 h-px bg-gradient-to-r from-transparent via-[#B79CED]/40 to-transparent" />

          {/* Bottom Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-[#72EFDD]/50">
              Built on code & caffeine runs
            </p>
            <p className="text-xs font-semibold flex items-center gap-1 text-[#64DFDF]">
              © 2026 Hrit Amatya
              <span className="text-[#B79CED]">·</span>
              All rights reserved
            </p>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#B79CED]/60 to-transparent" />
      </div>
    </div>
  );
}