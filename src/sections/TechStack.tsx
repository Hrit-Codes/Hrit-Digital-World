import { Network } from "lucide-react";
import { useState } from "react";

const icons = [
  { 
    src: "/Git.svg", 
    alt: "Git", 
    color: "#80FFDB", // Hyper-light Teal
    desc: "The foundation of modern version control. Git allows for sophisticated branching strategies and precise history management, ensuring that complex collaborative features can be developed in isolation and integrated without risking the stability of the main codebase." 
  },
  { 
    src: "/Github.svg", 
    alt: "GitHub", 
    color: "#64DFDF", // Bright Mint
    desc: "Beyond simple code hosting, GitHub serves as the primary engine for CI/CD and team collaboration. It provides the infrastructure for automated testing, deployment pipelines, and peer-led code reviews that maintain high standards for production software." 
  },
  { 
    src: "/Mongodb.svg", 
    alt: "MongoDB", 
    color: "#72EFDD", // Electric Aquamarine
    desc: "A document-based NoSQL database built for flexibility and horizontal scaling. Its JSON-like structure is ideal for handling deeply nested data and rapid schema changes, allowing the database architecture to adapt as quickly as the frontend requirements." 
  },
  { 
    src: "/ExpressJs.svg", 
    alt: "Express.js", 
    color: "#72EFDD", // Electric Aquamarine
    desc: "A minimal and flexible Node.js web application framework that provides a robust set of features for building single-page, multi-page, and hybrid web applications. It simplifies routing, middleware integration, and API development, making it the standard choice for building RESTful backends with Node.js." 
  },
  { 
    src: "/Nodejs.svg", 
    alt: "Node.js", 
    color: "#B79CED", // Soft Lavender
    desc: "A powerful JavaScript runtime built on Chrome's V8 engine that brings high-performance, non-blocking I/O to the backend. It allows for a unified development experience, using a single language across the entire stack for scalable network applications." 
  },
  { 
    src: "/Nextjs.svg", 
    alt: "Next.js", 
    color: "#006466", // Deep Teal
    desc: "The leading React framework for building production-grade web applications. It bridges the gap between static and dynamic content through advanced features like Incremental Static Regeneration (ISR), optimized routing, and built-in API handling." 
  },
  { 
    src: "/Reactjs.svg", 
    alt: "React", 
    color: "#312244", // Deep Purple
    desc: "A declarative library for building modular, component-based user interfaces. Its virtual DOM and unidirectional data flow make it possible to build complex, highly interactive UIs that remain predictable and easy to debug as the application scales." 
  },
  { 
    src: "/Typescript.svg", 
    alt: "TypeScript", 
    color: "#4d194d", // Rich Plum
    desc: "A strongly typed superset of JavaScript that brings industrial-strength reliability to the development process. By catching structural errors during development and providing rich IDE tooling, it drastically reduces runtime bugs and improves maintainability." 
  }
];

export default function TechStack() {
  const [selectedStack, setSelectedStack] = useState(icons[0]);
  const radius = 180; 
  const totalIcons = icons.length;

  return (
    <section className="w-full my-10 flex items-center justify-center text-white overflow-hidden">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center  px-6 gap-20">
        
        {/* Left Side: Orbital Tech Stack */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          
          {/* Outer Thin Ring */}
          <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full" />
          
          {/* Main Background Glow/Circle */}
          <div className="absolute w-[350px] h-[350px] bg-gradient-to-b from-[#1a1a3a] to-transparent opacity-20 rounded-full blur-2xl" />

          {/* Central Content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center text-center px-5 rounded-2xl w-[300px]">
            <div className="bg-purple-500/20 p-3 rounded-xl mb-4">
              <Network className="w-10 h-10 text-purple-400" />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Full-Stack <span className="bg-gradient-to-r from-[#B79CED] to-[#72EFDD] bg-clip-text text-transparent drop-shadow-sm ">Ecosystem</span>
            </h4>
            <p className="text-white text-sm leading-relaxed">
              Bridging the gap between robust architecture and fluid user experiences.
            </p>
          </div>

          {/* Orbiting Icons */}
          <div className="absolute inset-0 flex items-center justify-center">
            {icons.map((icon, index) => {
              const angle = (index / totalIcons) * 360;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedStack(icon)}
                  className={`absolute w-14 h-14 p-3 rounded-xl bg-transparent border border-white/10 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:border-purple-500/50 cursor-pointer shadow-2xl shadow-black group`}
                  style={{
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                  }}
                >
                  <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain group group-hover:cursor-pointer" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-6">
          <div className="inline-block px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium">
             Current Selection
          </div>
          <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-[#B79CED] to-[#72EFDD] bg drop-shadow-sm bg-clip-text">{selectedStack.alt}</h2>
          <p className="text-white text-lg leading-relaxed text-center">
            {selectedStack.desc}
          </p>
        </div>

      </div>
    </section>
  );
}