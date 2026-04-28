import { Dot } from "lucide-react";

export default function Profile(){
    return(
        <div className="w-full h-full min-h-screen flex pt-10">
            <div className="w-full h-full max-w-5xl mx-auto flex flex-col md:flex-row px-4 gap-2">

                {/* Left side: Profile Bio */}
                <div className="w-full md:w-1/2 text-center md:text-start flex flex-col justify-center items-center md:items-start gap-2">

                    <p className=" max-w-3xl w-fit text-xs md:text-sm leading-relaxed rounded-xl px-4 border-[#B79CED]/10 bg-[#B79CED]/10 text-white flex gap-2 items-center"><Dot className="text-[#72EFDD]"/>Namaste ! I am Hrit Amatya</p>

                    <h2 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
                    Building Exceptional{" "}
                        <br />
                        {/* Gradient 1: Using the new Mint to Light Teal */}
                        <span className="bg-gradient-to-r from-[#80FFDB] to-[#64DFDF] bg-clip-text text-transparent filter drop-shadow-sm">
                            Digital
                        </span>{" "}
                        {/* Gradient 2: Using the new Lavender to Aquamarine */}
                        <span className="bg-gradient-to-r from-[#B79CED] to-[#72EFDD] bg-clip-text text-transparent drop-shadow-sm">
                            Experiences
                        </span>
                    </h2>

                    <p className="text-md md:text-lg text-white">Junior Full-Stack Developer specializing in high-performance cloud architectures and fluid, interactive user interfaces. Passionate about building scalable web applications that prioritize performance and user experience.</p>

                    <div className="w-full h-full flex justify-center md:justify-start mt-2 md:mt-0 gap-2 ">
                        {/* Hire Me button - Teal gradient */}
                        <a href="#projects" className="px-6 py-3 border-2 border-transparent bg-gradient-to-r from-[#006466] via-[#065a60] to-[#0b525b] hover:from-[#0b525b] hover:via-[#006466] hover:to-[#065a60] transition-all duration-300 rounded-xl font-medium cursor-pointer">
                            View Projects
                        </a>
                        
                        {/* View Projects button - Purple/Dark gradient */}
                        <button className="px-6 py-3 border-2 border-white/10 bg-gradient-to-r from-[#272640] via-[#312244] to-[#3e1f47] hover:from-[#3e1f47] hover:via-[#4d194d] hover:to-[#272640] transition-all duration-300 rounded-xl font-medium text-white/90 hover:text-white cursor-pointer">
                            Download CV
                        </button>
                    </div>

                    <div className="border-t-2 border-white/10 text-white my-5 py-5 px-2 flex flex-row gap-10">

                    <div className="flex flex-row gap-20">

                        <div className="flex flex-col gap-1">
                            <h4 className="text-4xl">1+</h4>
                            <p className="text-sm text-[#64DFDF]">Years Experience</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h4 className="text-4xl">4+</h4>
                            <p className="text-sm text-[#64DFDF]">Projects Shipped</p>
                        </div>

                    </div>

                    </div>
                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center">

                    <div className="w-96 h-96 rounded-2xl border-2 shadow-md rotate-3">
                        <img src="/hrit.jpg" alt="Profile Picture" className="w-full h-full object-cover rounded-2xl" fetchPriority="high" loading="eager" />
                    </div>

                </div>

            </div>

        </div>
    )
}