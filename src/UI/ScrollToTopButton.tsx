import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react"

export default function ScrollToTopButton(){
    const [isVisible, setIsVisible]=useState(false);

    useEffect(()=>{
        const toggleVisiblity=()=>{
            if(window.scrollY>800){
                setIsVisible(true);
            }else{
                setIsVisible(false);
            }
        }

        window.addEventListener("scroll",toggleVisiblity);

        return()=>{
            window.removeEventListener("scroll",toggleVisiblity);
        }
    },[])

    const scrollToTop=()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }

    return(
        <>
            {isVisible && (
                <button 
                    type="button" 
                    onClick={scrollToTop} 
                    className="group fixed bottom-8 right-4 md:right-8 z-50 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:cursor-pointer animate-fade-in bg-gradient-to-br from-[#006466] via-[#0b525b] to-[#1b3a4b] hover:from-[#4d194d] hover:via-[#312244] hover:to-[#212f45]"
                    aria-label="Scroll to top"
                >
                    <ArrowUp 
                        className="w-5 h-5 mx-auto transition-all duration-300 group-hover:-translate-y-1 text-[#80FFDB] drop-shadow-[0_0_2px_#64DFDF] animate-bounce"
                        strokeWidth={2}
                    />
                </button>
            )}
        </>
    )
}