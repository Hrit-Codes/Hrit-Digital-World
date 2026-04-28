import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '../UI/SectionHeader'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  title: string
  description: string,
  points:string[],
  tags: string[]
  year: string,
  img:string,
  link: string
  isLinkActive:boolean
}

interface Theme {
  gradient: string
  accent: string
  glowStyle: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
}

const PROJECTS: Project[] = [
  {
    title: 'Empress Mode',
    description: 'A full-featured smart e-commerce platform with real-time capabilities and AI integration. Architected and developed the complete frontend experience including UI/UX design, RESTful API integration, secure payment processing (Razorpay/Stripe), and WebSocket-based live order notifications. Implemented dynamic product discovery with advanced filtering, trending and featured product sections, category-based browsing, and personalized user preferences. Integrated AI-powered chat assistant for customer support, automated invoice generation, and real-time order status updates.',
    points: [
      'Complete frontend with UI/UX design & secure payment processing',
      'WebSocket-based real-time order notifications',
      'Dynamic product discovery with advanced filtering',
      'Personalized recommendations with trending & featured sections',
      'AI-powered chat assistant & automated invoice generation'
    ],
    tags: ['React', 'Node.js', 'FastAPI', 'MongoDB', 'TailwindCSS', 'WebSocket', 'AI Integration'],
    year: '2025',
    img:"/Empress.png",
    link: 'https://',
    isLinkActive:false
  },
  {
    title: 'KalaPathar',
    description: 'A premium travel and tours platform for a Nepal-based adventure company. Built a high-performance, SEO-optimized website showcasing Himalayan expeditions, cultural tours, and adventure packages. Implemented smooth GSAP scroll-triggered animations for immersive storytelling, dynamic package browsing with real-time availability, and a complete booking management system. Features include dynamic package filtering, custom itinerary builder, real-time availability checks, and responsive design for seamless mobile browsing.',
    points: [
      'SEO-optimized platform for Himalayan expeditions & cultural tours',
      'Smooth GSAP scroll-triggered immersive animations',
      'Dynamic package browsing with real-time availability',
      'Complete booking management system',
      'Custom itinerary builder & responsive design'
    ],
    tags: ['Next.js', 'Express.js', 'MongoDB', 'GSAP', 'Node.js', 'TailwindCSS'],
    year: '2026',
    img:"/KalaPathar.png",
    link: 'https://',
    isLinkActive:false
  },
  {
    title: 'Techversity',
    description: 'A premium EdTech solution for an Australian IT Institute designed to accelerate career readiness for tech graduates. I engineered a responsive, high-performance frontend featuring a clean, minimalist UI that emphasizes user flow and professional credibility. Developed key features including a secure student portal, dynamic enrollment inquiries, and real-time form processing. The platform bridges the gap between academic learning and industry standards through a streamlined, conversion-focused digital experience.',
    points: [
      'Built a high-conversion frontend using Next.js and Tailwind CSS',
      'Implemented secure student authentication and profile management',
      'Developed dynamic inquiry and contact systems with real-time validation',
      'Optimized performance for SEO and accessibility across Australian regions',
      'Integrated RESTful APIs for automated lead management and student tracking'
    ],
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'API Integration'],
    year: '2026',
    img:"/Techyversity.png",
    link: 'https://techyversity.com/',
    isLinkActive:true,
  },
  {
    title: 'Project Four',
    description: 'On going....',
    points: [
      'On going...',
      'On going...',
      'On going...',
    ],
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'MongoDB','GSAP'],
    year: '2026',
    img:"",
    link: 'https://',
    isLinkActive:false,
  },
]

const THEMES: Theme[] = [
  {
    gradient: 'linear-gradient(135deg, #006466 0%, #065a60 50%, #0b525b 100%)',
    accent: '#80FFDB',
    glowStyle: { top: '-60px', right: '-60px' },
  },
  {
    gradient: 'linear-gradient(135deg, #1b3a4b 0%, #212f45 55%, #272640 100%)',
    accent: '#72EFDD',
    glowStyle: { bottom: '-80px', left: '-40px' },
  },
  {
    gradient: 'linear-gradient(135deg, #272640 0%, #312244 55%, #3e1f47 100%)',
    accent: '#B79CED',
    glowStyle: { top: '-40px', left: '30%' },
  },
  {
    gradient: 'linear-gradient(135deg, #3e1f47 0%, #4d194d 60%, #3a1040 100%)',
    accent: '#64DFDF',
    glowStyle: { bottom: '-50px', right: '10%' },
  },
]

const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`

export default function ScrollStack() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [showMessage, setShowMessage]=useState<boolean>(false)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const isMobile = window.innerWidth < 768
    const cards = gsap.utils.toArray<HTMLElement>('.ssc-card', wrapper)
    const triggers: ScrollTrigger[] = []

    cards.forEach((card, i) => {
      gsap.set(card, { zIndex: i + 1, transformOrigin: 'top center' })
    })

    cards.forEach((card, i) => {
      if (i >= cards.length - 1) return
      const depth = cards.length - 1 - i

      // On mobile: tighter scrub window so stack snaps cleanly before next card arrives
      const trigger = gsap.to(card, {
        scale: 1 - depth * 0.04,
        y: isMobile ? depth * 10 : depth * 18,
        ease: 'none',
        scrollTrigger: {
          trigger: cards[i + 1],
          // Mobile: start pushing earlier (95%) and finish earlier (30%)
          // so the stack is settled before the new card fully appears
          start: isMobile ? 'top 95%' : 'top 80%',
          end: isMobile ? 'top 30%' : 'top 12%',
          scrub: isMobile ? 0.3 : 0.6,
        },
      }).scrollTrigger

      if (trigger) triggers.push(trigger)
    })

    // Fade + slide in — on mobile use a gentler entry
    cards.forEach((card) => {
      const trigger = gsap.fromTo(
        card,
        { opacity: 0, y: isMobile ? 30 : 50 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.5 : 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: isMobile ? 'top 92%' : 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      ).scrollTrigger

      if (trigger) triggers.push(trigger)
    })

    // Glow drift
    const glowElements = wrapper.querySelectorAll<HTMLElement>('.ssc-glow')
    glowElements.forEach((glow) => {
      gsap.to(glow, {
        x: 'random(-25, 25)',
        y: 'random(-25, 25)',
        duration: 'random(4, 7)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    // Hover scale (desktop only — mobile has no hover)
    if (!isMobile) {
      const onEnter = (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement
        gsap.to(target, {
          scale: (gsap.getProperty(target, 'scale') as number) * 1.012,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
      const onLeave = (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement
        gsap.to(target, {
          scale: (gsap.getProperty(target, 'scale') as number) / 1.012,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
      cards.forEach((card) => {
        card.addEventListener('mouseenter', onEnter)
        card.addEventListener('mouseleave', onLeave)
      })
      return () => {
        triggers.forEach((t) => t?.kill())
        cards.forEach((card) => {
          card.removeEventListener('mouseenter', onEnter)
          card.removeEventListener('mouseleave', onLeave)
        })
      }
    }

    return () => {
      triggers.forEach((t) => t?.kill())
    }
  }, [])

  return (
    <div ref={wrapperRef} id='projects' className="w-full h-full min-h-screen my-10 px-4">
      <div className="max-w-5xl mx-auto">

        <SectionHeader
          subtitle="Selected Work"
          title="Featured Projects"
          description="A selection of projects I've worked on, from concept to launch."
        />

        {PROJECTS.map((project, i) => {
          const theme = THEMES[i % THEMES.length]
          const num = String(i + 1).padStart(2, '0')
          const total = String(PROJECTS.length).padStart(2, '0')

          return (
            <div
              key={i}
              className="ssc-card sticky top-[8vh] mb-4 md:mb-6 w-full cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl"
              style={{ willChange: 'transform, opacity' }}
            >
              <div
                className="relative flex min-h-[320px] md:min-h-80 flex-col overflow-hidden px-6 py-8 md:px-14 md:py-12"
                style={{ background: theme.gradient }}
              >
                {/* Noise */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{ backgroundImage: NOISE_BG }}
                />

                {/* Glow */}
                <div
                  className="ssc-glow pointer-events-none absolute h-72 w-72 rounded-full opacity-20"
                  style={{
                    background: theme.accent,
                    filter: 'blur(75px)',
                    ...theme.glowStyle,
                  }}
                />

                {/* Counter + Year row */}
                <div className="relative z-10 flex items-center justify-between mb-4 md:mb-5">
                  <span
                    className="font-mono text-[11px] tracking-[0.2em] opacity-50"
                    style={{ color: theme.accent }}
                  >
                    {num} / {total}
                  </span>
                  <span
                    className="font-mono text-[11px] tracking-widest"
                    style={{ color: `${theme.accent}66` }}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Tags */}
                <div className="relative z-10 mb-3 md:mb-4 flex flex-wrap gap-1.5 md:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-2.5 py-0.5 md:px-3 md:py-1 font-mono text-[9px] md:text-[10px] uppercase tracking-wider opacity-75"
                      style={{ borderColor: `${theme.accent}55`, color: theme.accent }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3
                  className="relative z-10 mb-2 md:mb-3 text-2xl md:text-4xl font-extrabold leading-tight tracking-tight text-teal-50"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: '-0.025em' }}
                >
                  {project.title}
                </h3>

                {/* Description — truncated on mobile */}
                <div className='w-full flex justify-between'>
                  <p
                    className="hidden md:block relative z-10 mb-6 md:mb-10 max-w-lg font-mono text-[11px] md:text-[13px] leading-relaxed line-clamp-3 md:line-clamp-none"
                    style={{ color: 'rgba(220,245,240,0.62)' }}
                  >
                    {project.description}
                  </p>
                  {project.img && (
                    <img src={project.img} alt={project.title} className='w-52 h-52 object-contain' />
                  )}
                </div>

                <ul className='md:hidden relative z-10 flex flex-col gap-2 max-w-lg font-mono text-[11px] md:text-[13px] leading-relaxed line-clamp-3 md:line-clamp-none'>
                  {project.points.map((point,index)=>(
                    <li key={index} className='flex flex-row gap-2 items-center'><Check size="20"/> {point}</li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href={project.isLinkActive? project.link : "#" }
                  onClick={(e)=>{
                    if(!project.isLinkActive){
                      e.preventDefault();
                      setShowMessage(true);
                    }
                  }}
                  target="_blank"
                  rel="noreferrer"
                  className="relative text-white z-10 mt-5 inline-flex items-center gap-2 self-start font-mono text-[11px] uppercase tracking-widest opacity-55 transition-opacity duration-200 hover:opacity-100"
                >
                  View project
                  <span
                    className="inline-flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full border text-sm"
                    style={{ borderColor: theme.accent }}
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>
          )
        })}

        <div />
      </div>
      {showMessage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setShowMessage(false)}
        >
          <div className={`max-w-2xl w-full bg-gradient-to-br bg-[#006466] rounded-2xl p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in duration-300`}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Live Demo Unavailable
            </h3>
            <p className="text-white/90 text-base md:text-lg leading-relaxed text-center">
              Due to company policy and client confidentiality agreements, 
              the live URL for this project cannot be shared publicly.
            </p>

            <div className="bg-white/5 rounded-lg p-4 mb-6 my-4">
              <p className="text-white/90 text-sm leading-relaxed text-center">
                💡 The project is fully functional and deployed. For a private demo or 
                to discuss this project in detail, please feel free to reach out.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}