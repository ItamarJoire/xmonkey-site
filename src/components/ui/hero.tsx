"use client"
import { useRef, useEffect } from "react"

import Image from "next/image";
import Link from "next/link";

import { gsap } from "gsap"

import LogoXmonkey from "/public/logo.svg"
import { Bubbles } from "@/components/bubbles";

export function Hero(){
  const logoRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const btnRef = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({defaults: { duration: 1} })

    const logo = logoRef.current
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const btn = btnRef.current 

    tl.fromTo(logo, 
      { opacity: 0, y: 100},
      { opacity: 1, y: 0 },
      "-=0.3")
    .fromTo(title, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 },
      "-=0.5")
    .fromTo(subtitle, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 },
      "-=0.5")
    .fromTo(btn, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 },
      "-=0.5")
    }, [])

  return(
    <section className="flex justify-center bg-gradient-to-b from-[#0D243E]  to-[#03090F]  h-screen">  
      <div className="mt-32 flex flex-col justify-center items-center  absolute z-[2]">
        <Image 
          ref={logoRef}
          src={LogoXmonkey} 
          alt="Logo Xmonkey" 
          className="w-[150px] h-[140px] md:w-[180px] md:h-[170px]"
        />

        <h1 ref={titleRef} className="mt-3 text-7xl md:text-7xl lg:text-9xl font-black text-center text-white relative z-20 font-[lufga]">
          Xmonkey
        </h1>
        
        <div ref={subtitleRef} className="mt-6">
          <p className="text-2xl text-center font-semibold text-[#A1A1AA] text-opacity-80">Nossa meta é bater a sua.</p>
          <p className="text-2xl text-center font-semibold text-[#A1A1AA] text-opacity-80">Somos <span className="text-[#FF7205]">experts na arte de vendas</span>!</p>
        </div>

        <Link ref={btnRef} href="" target="_blank" className="mt-10">
          <button className="relative text-[#a1a1aa] transition-all duration-300 hover:text-white z-10 rounded-full px-4 py-1.5 ring-1 ring-[#a1a1aa]/10 hover:ring-white/15">
            Quero vender mais
            <span className="absolute inset-9 h-px w-[calc(100%-6.25rem)] bg-gradient-to-r from-orange-400/0 via-orange-400/90 to-orange-400/0 spanHoverEffect"></span>
          </button>
        </Link>

        <style>
          {`
            button:hover .spanHoverEffect
            {
              transition: all .5s;
              width: calc(100% - 3.25rem);
            }
          `}
        </style>
      </div>

      <Bubbles  />

    </section>
  )
}
