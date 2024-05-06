import Image from "next/image"

import { GridContainter } from "../gridContainer"

import IconRain from '/public/rain.svg'
import IconPeoples from '/public/peoples.svg'
import IconPrioritize from '/public/prioritize.svg'
import IconMoney from '/public/money.svg'

export function Work(){
  return(
    <section className="py-16 bg-fund">
      <GridContainter>
        <h1 className="title-section text-center">Como <span className="text-orange-dark">trabalhamos</span></h1>

        <div className="mt-16 space-y-8">
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
      </GridContainter>
    </section>
  )
}