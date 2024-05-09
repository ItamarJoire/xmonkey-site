'use client'

import Image from "next/image"

import { GridContainer } from "../gridContainer"

import ReactPlayer from "react-player"

import IconRain from '/public/rain.svg'
import IconPeoples from '/public/peoples.svg'
import IconPrioritize from '/public/prioritize.svg'
import IconMoney from '/public/money.svg'

import { ButtonPrimary } from "../buttonPrimary"

export function Work(){
  return(
    <section className="py-16 bg-fund">
      <GridContainer>
        <h1 className="title-section text-center">Como <span className="text-orange-dark">trabalhamos</span></h1>
      </GridContainer>

      <div className="mx-4 mt-12 md:mt-14 md:text-xl space-y-8 md:mx-20 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0 md:gap-8 gap-16 lg:mx-40 2xl:mx-[250px]">
        <div>
          <div className="flex gap-2">
            <Image src={IconMoney} alt=""/>
            <h4 className="text-title font-semibold">Menor custo</h4>
          </div>
          <p className="mt-2 text-body w-[280px]">Levamos os melhores clientes, com um <span className="text-orange-dark">CAC</span> de menor custo e que <span className="text-orange-dark">compre mais vezesa</span> na sua empresa.</p>
        </div>

        <div>
          <div className="flex gap-2">
            <Image src={IconPeoples} alt=""/>
            <h4 className="text-title font-semibold">Reduza margens de erro</h4>
          </div>
          <p className="mt-2 text-body w-[280px]">Fazemos diversos testes para a sua empresa se adaptar o mais rápido ao <span className="text-orange-dark">mundo digital</span>.</p>
        </div>

        <div>
          <div className="flex gap-2">
            <Image src={IconRain} alt=""/>
            <h4 className="text-title font-semibold">Automatizar</h4>
          </div>
          <p className="mt-2 text-body w-[280px]">Somos focados no <span className="text-orange-dark">aumento do seu faturamento</span>.</p>
        </div>

        <div>
          <div className="flex gap-2">
            <Image src={IconPrioritize} alt=""/>
            <h4 className="text-title font-semibold">Prioriza qualidade</h4>
          </div>
          <p className="mt-2 text-body w-[280px]">Colocamos a qualidade acima de tudo, significa que seus <span className="text-orange-dark">processos estão bem adotados</span>.</p>
        </div>
      </div>

      <div className="mt-12  p-[1.6px] bg-gradient-to-r from-orange-dark to-orange-semi-light max-w-[600px] md:max-w-[740px] h-[320px] md:h-[420px] mx-4 rounded-sm md:mx-auto lg:max-w-[1000px] lg:h-[500px]">
        <ReactPlayer url='https://www.youtube.com/watch?v=AaWcOSVFbK4' width='100%' height='100%' controls/>
      </div>

       <div className="flex justify-center items-center">
        <ButtonPrimary name="Investir agora"/>
      </div>
    </section>
  )
}