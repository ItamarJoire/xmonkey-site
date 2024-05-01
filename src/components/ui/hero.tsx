"use client"

import Image from "next/image";
import LogoXmonkey from "/public/logo.png"
import styled, { keyframes } from "styled-components";
import Link from "next/link";

const risingAnimation = keyframes`
  0% {
    transform: translateY(100vh) scale(0);
  }
  100% {
    transform: translateY(-10vh) scale(.2);
  }
`
const Container = styled.div`
  position: relative;
  width: 800px;
  height: 80vh;
  overflow: hidden;
`
const Bubbles = styled.div`
  position: absolute;
  display: flex;
`
const Span = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  background: #fff;
  opacity: .2;
  margin: 0 4px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #ffffff06,
  0 0 50px #fff,
  0 0 100px #fff;

  animation: ${risingAnimation} calc(300s / var(--i)) linear infinite;
`

interface CustomCSSProperties extends React.CSSProperties{
  "--i"?: string;
}

export function Hero(){
  const spanValues = ["11", "17", "25", "14", "9", "2", "28", "16", "22", "4", "13", "27", "17", "9", "15", "24", "12", "16", "14", "3", "75", "2", "9", "13", "28", "16", "5", "40", "13", "27", "17", "9", "15", "24", "12", "16"]
  
  return(
    <section className="flex justify-center bg-gradient-to-b from-[#0D243E] to-[#03090F] h-screen">  
      <div className="flex flex-col justify-center items-center h-screen absolute z-[2]">
        <Image 
          src={LogoXmonkey} 
          alt="Logo Xmonkey" 
          className="w-[180px] h-[170px]"
        />

        <h1 className="mt-3 text-7xl md:text-7xl lg:text-9xl font-black text-center text-white relative z-20 font-[lufga]">
          Xmonkey
        </h1>
        
        <div>
          <p className="text-2xl text-center font-semibold text-[#A1A1AA] text-opacity-80">Nossa meta é bater a sua.</p>
          <p className="text-2xl text-center font-semibold text-[#A1A1AA] text-opacity-80">Somos <span className="text-[#FF7205]">experts na arte de vendas</span>!</p>
        </div>

        <Link href="" target="_blank">
          <div className="relative">
          <button type="button" className="text-white relative z-10 rounded-full px-4 py-1.5 ring-1 ring-white/10">
            Venha vender mais
          </button>
          <span className="absolute inset-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-orange-400/0 via-orange-400/90 to-orange-400/0 transition-opacity duration-500 hover:opacity-40"></span>
          </div>
        </Link>
      </div>
      <Container className="absolute z-[1]">
        <Bubbles>
          {spanValues.map((value, index) => (
            <Span key={index} style={{ '--i': value} as CustomCSSProperties}></Span>
          ))}
        </Bubbles>
      </Container>
    </section>
  )
}
