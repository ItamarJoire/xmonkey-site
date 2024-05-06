import Image from 'next/image'

import { GridContainter } from '../gridContainer'

import IconArrowRounded from '/public/arrow-rounded.svg'
import ImgFunc from '/public/func.svg'

export function Highlights(){
  return(
    <section className='py-28 bg-fund'>
      <GridContainter>
        <h2 className='title-section'>Por que investir em <br /><span className='text-orange-dark'>marketing digital?</span></h2>
        <h4 className='body-section'>Empresas que investem no digital <span className='text-title'>são encontradas com mais facilidade pelo público alvo</span>.</h4>

        <div>
          <div className='flex items-start mt-8'>
              <Image src={IconArrowRounded} alt="" className='mr-3'/>
              <p className='text-body'>A criação de um <span className='text-title'>site</span>, <span className='text-title'>páginas nas redes sociais </span>e <span className='text-title'>anúncios</span> em ferramentas como <span className='text-title'>Facebook Ads</span> e <span className='text-title'>Google Ads</span>, são ótimas formas de aumentar o alcance da sua marca.</p>
          </div>
          <div className='flex items-start mt-8'>
              <Image src={IconArrowRounded} alt="" className='mr-3'/>
              <p className='text-body'>Com o <span className='text-title'>aumento da visibilidade</span>, seu produto ou serviço será visto com maior frequência pelos potenciais clientes. Dessa forma, é possível <span className='text-title'>aumentar as vendas das empresa</span>, fazendo ela crescer exponencialmente.</p>
          </div>
          <div className='flex items-start mt-8'>
              <Image src={IconArrowRounded} alt="" className='mr-3'/>
              <p className='text-body'>Além disso, você consegue acompanhar os resultados das estratégias do <span className='text-title'>marketing digital</span> em tempo real. Deste modo, é possível analisar e ajustar as campanhas para que os resultados <span className='text-title'>sejam cada vez melhores</span>.</p>
          </div>
        </div>

        <div className='mt-16'>
          <Image src={ImgFunc} alt=''/>
        </div>
       </GridContainter>
    </section>
    
  )
}